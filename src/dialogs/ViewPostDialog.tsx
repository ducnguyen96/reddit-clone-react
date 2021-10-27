import { useTheme } from "@emotion/react";
import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useRelayEnvironment } from "react-relay";
import { fetchQuery, graphql } from "relay-runtime";
import { DownVoteButton, UpVoteButton } from "../common/StyledButtons";
import { Comment } from "../components/Comment/Comment";
import { Post } from "../components/Post/Post";
import { CommentFragment } from "../fragments/__generated__/CommentFragment.graphql";
import { useActivePost, useViewPostDialog } from "../hooks";
import * as _ from "lodash";

import { PostListFragment } from "../routes/home/Home";
import { ViewPostDialogCommentQuery } from "./__generated__/ViewPostDialogCommentQuery.graphql";
import { ViewPostDialogPostQuery } from "./__generated__/ViewPostDialogPostQuery.graphql";
import {
  mapNewCommentToCommentWithFragment,
  newCommentToCommentWithFragment,
} from "../utils/mapNewCommentToCommentWithFragment";
import { ViewPostDialogGetCommentQuery } from "./__generated__/ViewPostDialogGetCommentQuery.graphql";

export interface CommentWithFragment extends CommentFragment {
  replies: CommentWithFragment[];
  oldestParentID?: string;
}

export function ViewPostDialog(): JSX.Element {
  // const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper");
  const viewPostDialog = useViewPostDialog(true);
  const theme = useTheme();
  const activePost = useActivePost();
  const environment = useRelayEnvironment();
  const [post, setPost] = useState<PostListFragment>();

  const handleUpdateCommentList = (
    newComment: CommentWithFragment,
    parent: Boolean
  ) => {
    if (!parent) {
      console.log("newComment: ", newComment);
      setCurrentComments([newComment].concat(currentComments));
    } else {
      const clone = currentComments;
      const updatedIndex = currentComments.findIndex(
        (c) => c.id === newComment.oldestParentID
      );
      fetchQuery<ViewPostDialogGetCommentQuery>(
        environment,
        commentGet,
        { id: newComment.oldestParentID || "" },
        {
          fetchPolicy: "network-only",
        }
      )
        .toPromise()
        .then((res) => {
          const mapped = newCommentToCommentWithFragment(res?.getComment);
          clone[updatedIndex] = mapped;
          setCurrentComments((prevState) =>
            prevState.map((c) => (c.id === mapped.id ? { ...mapped } : c))
          );
        });
    }
  };

  useEffect(() => {
    if (activePost.slug) {
      fetchQuery<ViewPostDialogPostQuery>(
        environment,
        postQuery,
        { slug: activePost.slug },
        {
          fetchPolicy: "store-or-network",
        }
      )
        .toPromise()
        .then((res) => {
          setPost(res?.getPost);
        });
    }
  }, [viewPostDialog.key]);

  /*
      COMMENT SECTIONS
  */

  const [currentComments, setCurrentComments] = useState<CommentWithFragment[]>(
    []
  );
  const [currentPage, setCurrentPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const [maxScrollTop, setMaxScrollTop] = useState(0);

  // Initial
  useEffect(() => {
    // load data
    if (!!post) {
      fetchQuery<ViewPostDialogCommentQuery>(environment, commentQuery, {
        input: {
          limit: 10,
          page: 1,
          postID: post.id,
        },
      }).subscribe({
        next: (res) => {
          const newComments = res?.queryComment.comments || [];
          if (newComments.length < 10) {
            setHasMore(false);
          } else {
            setHasMore(true);
          }

          const mapped: CommentWithFragment[] =
            mapNewCommentToCommentWithFragment(newComments);
          setCurrentComments(mapped);
        },
      });
    }
  }, [post]);

  const fetchData = () => {
    console.log("fetching comments...");
    // load data
    if (!!post) {
      fetchQuery<ViewPostDialogCommentQuery>(environment, commentQuery, {
        input: {
          limit: 10,
          page: currentPage,
          postID: post.id,
        },
      }).subscribe({
        next: (res) => {
          const newComments = res?.queryComment.comments || [];
          if (newComments.length < 10) {
            setHasMore(false);
          } else {
            setHasMore(true);
          }

          const mapped: CommentWithFragment[] =
            mapNewCommentToCommentWithFragment(newComments);

          setCurrentComments(currentComments.concat(mapped));
          setCurrentPage(currentPage + 1);
        },
      });
    }
  };

  return (
    <Dialog
      key={viewPostDialog.key}
      open={viewPostDialog.open}
      onClose={() => {
        viewPostDialog.hide();
        setPost(undefined);
      }}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      fullWidth
      maxWidth="lg"
    >
      <Paper
        sx={{
          width: "100%",
          display: "fixed",
          backgroundColor: "black",
          height: "48px",
          borderRadius: "0",
          color: "#878a8c",
          alignItems: "center",
          padding: "0 60px",
        }}
      >
        |
        <UpVoteButton
          color="#878a8c"
          id="1"
          label="upvote"
          onClickHandler={() => {}}
          disabled={false}
        />
        <Typography variant="h4" textAlign={"center"} color="#d7dadc">
          {post ? post.upVotes - post.downVotes : 0}
        </Typography>
        <DownVoteButton
          color="#878a8c"
          id="1"
          label="upvote"
          onClickHandler={() => {}}
          disabled={false}
        />
        |
        <Typography
          variant="subtitle1"
          sx={{ marginLeft: "1rem", color: "#d7dadc" }}
        >
          {post ? post.title : ""}
        </Typography>
        <Button
          variant="text"
          startIcon={<Close />}
          sx={{ float: "right", marginLeft: "auto", color: "#d7dadc" }}
          onClick={viewPostDialog.hide}
        >
          Close
        </Button>
      </Paper>

      <DialogContent
        sx={{
          width: "1200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // @ts-ignore
          backgroundColor: theme.palette.backgroundSecondary.default,
        }}
        onScroll={_.debounce(function (e) {
          const element = e.target;
          // @ts-ignore
          const scrollHeight = element.scrollHeight;

          // @ts-ignore
          const scrollTop = element.scrollTop;

          const clientHeight = element.clientHeight;
          if (
            scrollHeight - scrollTop < clientHeight * 1.3 &&
            hasMore &&
            scrollTop > maxScrollTop
          ) {
            setMaxScrollTop(scrollTop);
            fetchData();
          }
        }, 100)}
      >
        <Box sx={{ display: "flex", marginTop: "1rem" }}>
          <Paper sx={{ width: "740px", marginRight: "1rem" }}>
            <Post
              theme={theme}
              fragment={post}
              comment={true}
              sx={{ marginBottom: "0" }}
              handleUpdateCommentList={handleUpdateCommentList}
            />

            {currentComments.map((p) => (
              <Comment
                main={p}
                theme={theme}
                key={p.id}
                handleUpdateCommentList={handleUpdateCommentList}
              />
            ))}
          </Paper>
          <Paper sx={{ width: "312px" }}>Right</Paper>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

const postQuery = graphql`
  query ViewPostDialogPostQuery($slug: String!) {
    getPost(slug: $slug) {
      id
      title
      slug
      content
      type
      contentMode
      upVotes
      downVotes
      createdAt
      updatedAt
      numberOfComments
      isUpVoted
      isDownVoted
      community {
        id
        name
        slug
        numberOfMember
      }
      owner {
        id
        username
        avatar
      }
    }
  }
`;

const commentQuery = graphql`
  query ViewPostDialogCommentQuery($input: QueryCommentInput!) {
    queryComment(input: $input) {
      length
      currentPage
      comments {
        ...CommentFragment
        replies {
          ...CommentFragment
          replies {
            ...CommentFragment
            replies {
              ...CommentFragment
              replies {
                ...CommentFragment
                replies {
                  ...CommentFragment
                  replies {
                    ...CommentFragment
                    replies {
                      ...CommentFragment
                      replies {
                        ...CommentFragment
                        replies {
                          ...CommentFragment
                          replies {
                            ...CommentFragment
                            replies {
                              ...CommentFragment
                              replies {
                                ...CommentFragment
                                replies {
                                  ...CommentFragment
                                  replies {
                                    ...CommentFragment
                                    replies {
                                      ...CommentFragment
                                      replies {
                                        ...CommentFragment
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const commentGet = graphql`
  query ViewPostDialogGetCommentQuery($id: ID!) {
    getComment(id: $id) {
      ...CommentFragment
      replies {
        ...CommentFragment
        replies {
          ...CommentFragment
          replies {
            ...CommentFragment
            replies {
              ...CommentFragment
              replies {
                ...CommentFragment
                replies {
                  ...CommentFragment
                  replies {
                    ...CommentFragment
                    replies {
                      ...CommentFragment
                      replies {
                        ...CommentFragment
                        replies {
                          ...CommentFragment
                          replies {
                            ...CommentFragment
                            replies {
                              ...CommentFragment
                              replies {
                                ...CommentFragment
                                replies {
                                  ...CommentFragment
                                  replies {
                                    ...CommentFragment
                                    replies {
                                      ...CommentFragment
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
