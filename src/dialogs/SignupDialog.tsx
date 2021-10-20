import { Close } from "@mui/icons-material";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Dialog,
  DialogContent,
  FormControl,
  IconButton,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Environment, useRelayEnvironment } from "react-relay";
import {
  commitMutation,
  createOperationDescriptor,
  getRequest,
  graphql,
} from "relay-runtime";
import { useSignupDialog } from "../hooks/useSignupDialog";
import { escapeHtml } from "../utils/html_escape";
import { meQuery } from "./LoginDialog";
import {
  SignupDialogRegisterMutation,
  UserRegisterInput,
} from "./__generated__/SignupDialogRegisterMutation.graphql";

let loginWindow: WindowProxy | null = null;
export function SignupDialog(): JSX.Element {
  const [error, setError] = React.useState<string | undefined>();
  const signupDialog = useSignupDialog(true);
  const relay = useRelayEnvironment();
  const [errorMessage, setErrorMessage] = useState<string>();

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
          signupDialog.hide();
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

  function commitRegisterMutation(
    environment: Environment,
    input: UserRegisterInput
  ) {
    return commitMutation<SignupDialogRegisterMutation>(environment, {
      mutation: registerMutation,
      variables: { input },
      onCompleted: (response) => {
        switch (response.register.__typename) {
          case "RegisterPayload":
            localStorage.setItem(
              "jwt",
              response.register.token.accessToken || ""
            );
            window.location.reload();
            break;
          case "RegisterBadRequest":
            setErrorMessage(response.register.errors[0].message);
            break;
          case "RegisterInternalServerError":
            setErrorMessage(response.register.error.message);
          default:
            break;
        }
      } /* Mutation completed */,
    });
  }

  const handleSubmitSignupForm = (e: any) => {
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

    commitRegisterMutation(relay, {
      username,
      password,
      repeatPassword: password,
    });
  };

  const [usernameError, setUsernameError] = React.useState<String>();
  const [passwordError, setPasswordError] = React.useState<String>();

  return (
    <Dialog
      key={signupDialog.key}
      open={signupDialog.open}
      onClose={signupDialog.hide}
      scroll="body"
      maxWidth="xl"
    >
      <IconButton
        onClick={signupDialog.hide}
        children={<Close />}
        sx={{ position: "absolute" }}
      />

      <DialogContent
        sx={{
          margin: "0 auto",
          maxWidth: "804px",
          padding: "0",
          "& .MuiButton-root:not(:last-of-type)": {
            marginBottom: "1rem",
          },
        }}
      >
        {/* TOP */}
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "grey.500",
            padding: "1.5rem",
            paddingBottom: "1rem",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            Choose your username
          </Typography>
          <Typography variant="h5" gutterBottom component="div">
            Your username is how other community members will see you. This name
            will be used to credit you for things you share on Reddit. What
            should we call you?
          </Typography>
        </Box>

        {/* MIDDLE */}
        <Box sx={{ display: "flex" }}>
          <Box
            component="form"
            sx={{
              width: "50%",
              padding: "1.5rem",
            }}
            noValidate
            autoComplete="off"
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
                sx={{ backgroundColor: "grey.50" }}
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
                type="password"
                error={!!passwordError}
                sx={{ backgroundColor: "grey.50" }}
              />
            </FormControl>
          </Box>
          <Box
            sx={{
              width: "50%",
              padding: "1.5rem",
              display: errorMessage ? "unset" : "none",
            }}
          >
            <Alert severity="error" sx={{ width: "100%" }}>
              <AlertTitle>Error</AlertTitle>
              {errorMessage}
            </Alert>
          </Box>
        </Box>

        {/* BOTTOM */}
        <Box
          sx={{
            borderTop: 1,
            borderColor: "grey.500",
            backgroundColor: "grey.100",
            padding: ".5rem",
            display: "flex",
            justifyContent: "end",
            marginTop: "20rem",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            children="Sign Up"
            sx={{
              borderRadius: "1.5rem",
              width: "6rem",
              marginLeft: "1rem",
              fontWeight: "bold",
            }}
            onClick={handleSubmitSignupForm}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export const registerMutation = graphql`
  mutation SignupDialogRegisterMutation($input: UserRegisterInput!) {
    register(input: $input) {
      __typename
      ... on RegisterPayload {
        user {
          id
          username
          createdAt
          updatedAt
        }
        token {
          expiresIn
          accessToken
        }
      }
      ... on RegisterBadRequest {
        errors {
          message
          path
        }
      }
      ... on RegisterInternalServerError {
        error {
          message
          path
        }
      }
    }
  }
`;
