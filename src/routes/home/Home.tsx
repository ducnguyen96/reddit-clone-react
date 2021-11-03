import { useTheme } from "@emotion/react";
import { Box, Grid } from "@mui/material";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRelayEnvironment } from "react-relay";
import { fetchQuery, graphql } from "relay-runtime";
import { CreatePostHome } from "../../components/CreatePostHome/CreatePostHome";
import { Post } from "../../components/Post/Post";
import { SortPost } from "../../components/SortPost/SortPost";
import { TopNewCommunities } from "../../components/TopNewCommunities/TopNewCommunities";
import { SortPostEnum } from "../../graphql/types";
import { useCurrentUser } from "../../hooks";
import {
  HomeQuery,
  HomeQueryResponse,
  InputContentMode,
  PostType,
} from "./__generated__/HomeQuery.graphql";

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
  const [currentPage, setCurrentPage] = useState(2);
  const [currentSort, setCurrentSort] = useState(SortPostEnum.Best);

  const environment = useRelayEnvironment();
  const fetchData = (page?: number, sort?: SortPostEnum) => {
    // load data
    fetchQuery<HomeQuery>(environment, queryPost, {
      input: {
        limit: 10,
        page: page ? page : currentPage,
        sort: sort ? sort : currentSort,
      },
    }).subscribe({
      next: (res) => {
        const newPosts = res?.queryPost.posts || [];
        if (newPosts.length < 10) {
          setHasMore(false);
        } else {
          setHasMore(true);
        }
        if (page) {
          setCurrentPosts(newPosts);
          setCurrentPage(2);
        } else {
          setCurrentPosts(currentPosts.concat(newPosts));
          setCurrentPage(currentPage + 1);
        }
      },
    });
  };

  const handleChangeSort = (newSort: SortPostEnum) => {
    fetchData(1, newSort);
    setCurrentSort(newSort);
  };

  return (
    <Box
      sx={{
        margin: "68px 0 0 0 ",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid item lg={4}>
          {me && <CreatePostHome username={me.username} />}
          <SortPost
            theme={theme}
            handleChangeSort={handleChangeSort}
            currentSort={currentSort}
          />
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
        </Grid>
        <Grid item lg={2}>
          <TopNewCommunities />
        </Grid>
      </Grid>
    </Box>
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
