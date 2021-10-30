import { useTheme } from "@emotion/react";
import {
  ImageOutlined,
  LinkOutlined,
  PostAddOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  Input,
  OutlinedInput,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useRelayEnvironment } from "react-relay";
import { commitMutation, graphql } from "relay-runtime";
import config from "../../config";
import { MyEditor } from "../../editor/MyEditor";
import { PostType } from "../../graphql/types";
import { ValidatePostTitle } from "./Validate";
import {
  CreatePostEditorCreateMediaMutation,
  MediaType,
} from "./__generated__/CreatePostEditorCreateMediaMutation.graphql";

export type CreatePostEditorProps = {
  postType: PostType;
  setPostType: React.Dispatch<React.SetStateAction<PostType>>;
  setPostContent: React.Dispatch<React.SetStateAction<string>>;
  handleCreatePost: () => void;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
};

export const CreatePostEditor = ({
  setPostContent,
  handleCreatePost,
  title,
  setTitle,
  postType,
  setPostType,
}: CreatePostEditorProps) => {
  const theme = useTheme();
  const [titleLength, setTitleLength] = useState(0);

  const styledButton = (buttonType: PostType) => {
    const color =
      buttonType === postType
        ? {
            // @ts-ignore
            color: theme.palette.createPostButtonActive.main,
            // @ts-ignore
            borderBottom: `2px solid ${theme.palette.createPostButtonActive.main}`,
          }
        : {
            color: "#878A8C",
            borderBottom: "1px solid #969696",
          };
    let icon;
    switch (buttonType) {
      case PostType.Post:
        icon = <PostAddOutlined />;
        break;
      case PostType.ImageVideo:
        icon = <ImageOutlined />;
      default:
        icon = <LinkOutlined />;
        break;
    }
    return (
      <Button
        variant="outlined"
        startIcon={icon}
        sx={{
          border: "none",
          width: "25%",
          fontWeight: "bold",
          borderRadius: "0px",
          height: "45px",
          borderRight: "1px solid #969696",
          ...color,
        }}
        onClick={() => setPostType(buttonType)}
      >
        {buttonType}
      </Button>
    );
  };

  const handleOnChangeTitle = (e: any) => {
    e.preventDefault();
    const value: string = e.target.value;
    const length = value.length;

    if (length <= 300) {
      setTitle(e.target.value);
      setTitleLength(length);
    }
  };

  const [onBlur, setOnBlur] = useState(false);
  const handleOnBlurTitle = () => {
    setOnBlur(true);
  };

  const [uploadFile, setUploadFile] = useState<File | undefined>();
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);

  const env = useRelayEnvironment();
  const handleCommitUpload = () => {
    if (!uploadFile) return;
    setLoading(true);
    setDisable(true);

    const jwt = localStorage.getItem("jwt");
    const formData = new FormData();
    formData.append("file", uploadFile);
    return fetch(`${config.local.api.origin}/upload`, {
      method: "POST",
      headers: {
        Authorization: jwt ? `Bearer ${jwt}` : "",
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        let contentType: MediaType;
        const ct: string = res["content-type"];
        if (ct.startsWith("image")) {
          contentType = "Image";
        } else {
          contentType = "Video";
        }
        commitMutation<CreatePostEditorCreateMediaMutation>(env, {
          mutation: createMediaMutation,
          variables: {
            input: {
              type: contentType,
              url: res["url"],
            },
          },
          onCompleted: (createdMedia) => {
            console.log("createdMedia :", createdMedia);
            if (contentType === "Video") {
              const id = res["url"].split("/videos/raw/")[1];
              fetch(`${config.local.api.origin}/succeed?id=${id}`, {
                method: "PUT",
              });
            }
            setLoading(false);
            setPostContent(res["url"]);
          },
        });
      });
  };

  return (
    <>
      <Paper>
        {/* TOP */}
        <Paper>
          {styledButton(PostType.Post)}
          {styledButton(PostType.ImageVideo)}
          {/* {styledButton(PostType.Link)} */}
        </Paper>

        {/* Middle */}
        <Paper sx={{ padding: "15px", position: "relative" }}>
          <OutlinedInput
            placeholder="Title"
            fullWidth
            size="small"
            sx={{
              height: "35px",
              // @ts-ignore
              color: theme.palette.text.secondary,
              marginBottom: "15px",
              paddingRight: "45px",
            }}
            value={title}
            onChange={handleOnChangeTitle}
            onBlur={handleOnBlurTitle}
            onFocus={() => setOnBlur(false)}
          />
          {onBlur && <ValidatePostTitle />}
          <Typography
            sx={{
              position: "absolute",
              top: "25px",
              right: "25px",
              color: "#969696",
              fontWeight: "bold",
            }}
            variant="h5"
          >
            {`${titleLength}/300`}
          </Typography>

          {/* MY EDITOR */}

          {postType === PostType.ImageVideo ? (
            <Paper
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                margin: "1rem",
                padding: "1rem",
              }}
            >
              {!uploadFile && (
                <label htmlFor="contained-button-file">
                  <Input
                    id="contained-button-file"
                    type="file"
                    inputProps={{ accept: "video/*,image/*" }}
                    sx={{
                      ":before": { border: "none" },
                      ":after": { border: "none" },
                    }}
                    // @ts-ignore
                    onChange={(e) => setUploadFile(e.target.files[0])}
                  />
                </label>
              )}
              {uploadFile && uploadFile.type.startsWith("image/") && (
                <img
                  src={URL.createObjectURL(uploadFile)}
                  alt="image"
                  width={"80%"}
                />
              )}
              {uploadFile && uploadFile.type.startsWith("video/") && (
                <video width="400" controls>
                  <source src={URL.createObjectURL(uploadFile)} />
                </video>
              )}
              {loading ? (
                <CircularProgress />
              ) : (
                <Button
                  variant="contained"
                  component="span"
                  sx={{ marginTop: "1rem" }}
                  onClick={handleCommitUpload}
                  disabled={disable}
                >
                  Upload
                </Button>
              )}
            </Paper>
          ) : (
            <MyEditor setContent={setPostContent} />
          )}

          {/* MY EDITOR */}
          <Box
            sx={{ display: "flex", justifyContent: "end", marginTop: "1rem" }}
          >
            <Button
              onClick={() => {
                location.href = "/";
              }}
              sx={{
                // @ts-ignore
                color: theme.palette.text.secondary,
                // @ts-ignore
                borderColor: theme.palette.text.secondary,
              }}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              onClick={handleCreatePost}
              variant="contained"
              sx={{
                // @ts-ignore
                backgroundColor: theme.palette.neutral.main,
                marginLeft: "1rem",
              }}
            >
              Post
            </Button>
          </Box>
        </Paper>
      </Paper>
    </>
  );
};

const createMediaMutation = graphql`
  mutation CreatePostEditorCreateMediaMutation($input: CreateMediaInput!) {
    createMedia(input: $input) {
      id
      url
      type
      createdAt
      updatedAt
    }
  }
`;
