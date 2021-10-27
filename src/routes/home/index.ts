import { Route } from "../../core/router";
import { SortPostEnum } from "../../graphql/types";
import type Home from "./Home";
import { queryPost } from "./Home";
import { HomeQueryResponse } from "./__generated__/HomeQuery.graphql";

/**
 * Homepage route.
 */
export default {
  path: "/",
  query: queryPost,
  variables: {
    input: {
      limit: 10,
      page: 1,
      sort: SortPostEnum.Best,
    },
  },
  component: () => import(/* webpackChunkName: "home" */ "./Home"),
  response: (data) => ({
    title: "Reddit Clone - ducnguyen96",
    description: "Reddit clone built with React and Relay by ducnguyen96",
    props: data,
  }),
} as Route<typeof Home, HomeQueryResponse>;
