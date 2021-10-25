import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRelayEnvironment } from "react-relay";
import { fetchQuery, graphql } from "relay-runtime";
import { CreatePostHome } from "../../components/CreatePostHome/CreatePostHome";
import { Post } from "../../components/Post/Post";
import { SortPost } from "../../components/SortPost/SortPost";
import { TopNewCommunities } from "../../components/TopNewCommunities/TopNewCommunities";
import { useCurrentUser } from "../../hooks";
import {
  HomeQuery,
  HomeQueryResponse,
  InputContentMode,
  PostType,
} from "./__generated__/HomeQuery.graphql";
// import { PostList } from "./PostList";

export type PostListFragment = {
  readonly id: string;
  readonly title: string;
  readonly slug: string;
  readonly content: string;
  readonly type: PostType;
  readonly contentMode: InputContentMode;
  readonly upVotes: number;
  readonly downVotes: number;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly numberOfComments: number;
  readonly isUpVoted: boolean;
  readonly isDownVoted: boolean;
  readonly community: {
    readonly id: string;
    readonly name: string;
    readonly slug: string;
    readonly numberOfMember: number;
  };
  readonly owner: {
    readonly id: string;
    readonly username: string;
    readonly avatar: string | null;
  };
};

export default function Home(props: HomeQueryResponse): JSX.Element {
  const theme = useTheme();
  const me = useCurrentUser();

  const [currentPosts, setCurrentPosts] = useState<
    ReadonlyArray<PostListFragment>
  >(props.queryPost.posts);

  const [hasMore, setHasMore] = useState(true);
  let page = 1;

  const environment = useRelayEnvironment();
  const fetchData = () => {
    page = page + 1;
    // load data
    fetchQuery<HomeQuery>(environment, queryPost, {
      input: {
        limit: 10,
        page,
      },
    })
      .toPromise()
      .then((res) => {
        const newPosts = res?.queryPost.posts || [];
        if (newPosts.length < 10) {
          setHasMore(false);
        }
        setCurrentPosts(currentPosts.concat(newPosts));
      });
  };

  return (
    <>
      <Box
        sx={{ margin: "20px 24px", display: "flex", justifyContent: "center" }}
      >
        <Box sx={{ width: "640px" }}>
          {me && <CreatePostHome username={me.username} />}
          <SortPost theme={theme} />
          <InfiniteScroll
            dataLength={currentPosts ? currentPosts.length : 0}
            next={fetchData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {currentPosts.map((p) => (
              <Post theme={theme} fragment={p} key={p.id} />
            ))}
          </InfiniteScroll>
        </Box>
        <Box sx={{ width: "310px", marginLeft: "24px" }}>
          <TopNewCommunities />
        </Box>
      </Box>
    </>
  );
}

export const queryPost = graphql`
  query HomeQuery($input: QueryPostInput!) {
    queryPost(input: $input) {
      length
      currentPage
      posts {
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
  }
`;
