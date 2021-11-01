import { Close, Facebook, Google } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  ButtonProps,
  Dialog,
  DialogContent,
  FormControl,
  IconButton,
  InputLabel,
  Link,
  OutlinedInput,
  Typography,
} from "@mui/material";
import * as React from "react";
import { Environment, useRelayEnvironment } from "react-relay";
import {
  commitMutation,
  createOperationDescriptor,
  getRequest,
  graphql,
} from "relay-runtime";
import { UserLoginInput } from "../graphql/types";
import { useLoginDialog } from "../hooks";
import { useSignupDialog } from "../hooks/useSignupDialog";
import { escapeHtml } from "../utils/html_escape";
import { LoginDialogLoginMutation } from "./__generated__/LoginDialogLoginMutation.graphql";
import { GoogleLogin } from "react-google-login";
// @ts-ignore
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { LoginDialogLoginGoogleMutation } from "./__generated__/LoginDialogLoginGoogleMutation.graphql";

// Pop-up window for Google/Facebook authentication
let loginWindow: WindowProxy | null = null;

export function LoginDialog(): JSX.Element {
  const [error, setError] = React.useState<string | undefined>();
  const loginDialog = useLoginDialog(true);
  const signupDialog = useSignupDialog(false);
  const relay = useRelayEnvironment();

  // Start listening for notifications from the pop-up login window
  React.useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (
        event.origin === window.location.origin &&
        event.source === loginWindow
      ) {
        if (event.data.error) {
          setError(event.data.error);
        } else if (event.data) {
          // Save user into the local store and close dialog
          const request = getRequest(meQuery);
          const operation = createOperationDescriptor(request, {});
          relay.commitPayload(operation, event.data.data);
          loginDialog.hide();
        }
      }
    }
    window.addEventListener("message", handleMessage, false);
    return () => window.removeEventListener("message", handleMessage);
  }, [relay]);

  const [username, setUsername] = React.useState("");

  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const [password, setPassword] = React.useState("");

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleClickSignup = () => {
    loginDialog.hide();
    signupDialog.show();
  };

  function commitLoginMutation(
    environment: Environment,
    input: UserLoginInput
  ) {
    return commitMutation<LoginDialogLoginMutation>(environment, {
      mutation: loginMutation,
      variables: { input },
      onCompleted: (response) => {
        localStorage.setItem("jwt", response.login.accessToken || "");
        window.location.reload();
      } /* Mutation completed */,
      onError: (error) => {
        console.log("error :", error);
        setUsernameError("invalid username or password");
      } /* Mutation errored */,
    });
  }

  const [usernameError, setUsernameError] = React.useState<String>();
  const [passwordError, setPasswordError] = React.useState<String>();

  const handleSummitLoginForm = (e: any) => {
    e.preventDefault();

    // validate input
    setUsername(escapeHtml(username));
    setPassword(escapeHtml(password));
    if (username.length < 6) {
      setUsernameError("invalid username");
      return;
    }
    setUsernameError(undefined);
    if (password.length < 6) {
      setPasswordError("invalid password");
      return;
    }
    setPasswordError(undefined);
    commitLoginMutation(relay, { username, password });
  };

  const commitSocialLogin = (input: string) => {
    commitMutation<LoginDialogLoginGoogleMutation>(relay, {
      mutation: loginGoogleMutation,
      variables: { gmail: input },
      onCompleted: (response) => {
        localStorage.setItem("jwt", response.loginGoogle.accessToken || "");
        window.location.reload();
      } /* Mutation completed */,
      onError: (error) => {
        console.log("error :", error);
        setUsernameError("invalid username or password");
      } /* Mutation errored */,
    });
  };

  const responseFacebook = (response: any) => {
    const id = response["userID"];
    const name = response["name"] as string;
    const newName = name.replaceAll(" ", "").toLowerCase();
    commitSocialLogin(newName + id.slice(0, 6));
  };

  const responseGoogle = (response: any) => {
    const email = response["profileObj"]["email"];
    commitSocialLogin(email);
  };

  return (
    <Dialog
      key={loginDialog.key}
      open={loginDialog.open}
      onClose={loginDialog.hide}
      scroll="body"
      maxWidth="xl"
    >
      <IconButton onClick={loginDialog.hide} children={<Close />} />

      <DialogContent
        sx={{
          margin: "0 auto",
          "& .MuiButton-root:not(:last-of-type)": {
            marginBottom: "1rem",
          },
          display: "flex",
        }}
      >
        {/* Left */}
        <Box sx={{ width: "6rem", backgroundColor: "blue.200" }}></Box>

        {/* Center */}
        <Box>
          <Box>
            {/* Title */}
            <Typography
              sx={{ marginBottom: "1rem", fontWeight: "bold" }}
              variant="h3"
              align="left"
              children="Login"
            />
            <Typography
              sx={{ marginBottom: "4rem" }}
              variant="body2"
              align="left"
              children={
                <>
                  By continuing, you agree to our{" "}
                  <Link href="#" underline="none">
                    User Agreement
                  </Link>{" "}
                  and{" "}
                  <Link href="#" underline="none">
                    {" "}
                    Privacy Policy.
                  </Link>
                </>
              }
            />
          </Box>
          <Box
            sx={{
              maxWidth: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Error message(s) */}
            {error && (
              <Alert
                sx={{ marginBottom: "1rem" }}
                severity="error"
                children={error}
              />
            )}

            {/* Login buttons */}
            {/* <LoginButton provider="Google" /> */}
            <GoogleLogin
              autoLoad={false}
              clientId="754019167088-u5fr688kem8p8qoehiggfi9evu36erb3.apps.googleusercontent.com"
              render={(renderProps) => (
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Google />}
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  fullWidth
                >
                  <span style={{ flexGrow: 1, textAlign: "center" }}>
                    Continue with Google
                  </span>
                </Button>
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />

            <FacebookLogin
              appId="892601878037709"
              callback={responseFacebook}
              render={(renderProps: any) => (
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Facebook />}
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  fullWidth
                >
                  <span style={{ flexGrow: 1, textAlign: "center" }}>
                    Continue with Facebook
                  </span>
                </Button>
              )}
            />

            <p style={{ color: "gray", margin: "1rem" }}>OR</p>

            {/* Login Form */}
            <Box
              component="form"
              sx={{
                width: "300px",
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleSummitLoginForm}
            >
              <FormControl variant="filled" sx={{ margin: 0, width: "100%" }}>
                <InputLabel htmlFor="username-input">
                  {usernameError ? usernameError : "username"}
                </InputLabel>
                <OutlinedInput
                  id="username-input"
                  value={username}
                  onChange={handleChangeUsername}
                  label="username"
                  error={!!usernameError}
                />
              </FormControl>
              <FormControl
                variant="filled"
                sx={{
                  margin: 0,
                  width: "100%",
                  marginTop: "0.75rem",
                  marginBottom: "0.75rem",
                }}
              >
                <InputLabel htmlFor="password-input">
                  {passwordError ? passwordError : "password"}
                </InputLabel>
                <OutlinedInput
                  id="password-input"
                  value={password}
                  onChange={handleChangePassword}
                  label="password"
                  error={!!passwordError}
                  type="password"
                />
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: "2rem",
                  height: "3rem",
                  fontWeight: "bold",
                }}
              >
                Login
              </Button>
            </Box>
          </Box>
          <Box>
            <Typography
              variant="body2"
              align="left"
              children={
                <>
                  Forgot your{" "}
                  <Link href="#" underline="none">
                    username
                  </Link>{" "}
                  or{" "}
                  <Link href="#" underline="none">
                    password
                  </Link>
                  {"  ?"}
                </>
              }
            />
            <Typography
              variant="body2"
              align="left"
              sx={{ marginTop: "2rem", marginBottom: "3rem" }}
              children={
                <>
                  New to Reddit?{" "}
                  <Link
                    href="#"
                    underline="none"
                    sx={{ fontWeight: "bold" }}
                    onClick={handleClickSignup}
                  >
                    SIGN UP
                  </Link>{" "}
                </>
              }
            />
          </Box>
        </Box>

        {/* Right */}

        <Box sx={{ width: "15rem" }}></Box>
      </DialogContent>
    </Dialog>
  );
}
export const meQuery = graphql`
  query LoginDialogMeQuery {
    me {
      ...CurrentUser_me
      id
      username
    }
  }
`;

export const loginMutation = graphql`
  mutation LoginDialogLoginMutation($input: UserLoginInput!) {
    login(input: $input) {
      expiresIn
      accessToken
    }
  }
`;

const loginGoogleMutation = graphql`
  mutation LoginDialogLoginGoogleMutation($gmail: String!) {
    loginGoogle(gmail: $gmail) {
      expiresIn
      accessToken
    }
  }
`;
