import { graphql } from "relay-runtime";
import { Route } from "../../core/router";
import type Home from "./Home";
import type { homeQueryResponse } from "./__generated__/homeQuery.graphql";

/**
 * Homepage route.
 */
export default {
  path: "/",
  // query: graphql`
  //   query homeQuery {
  //     me {
  //       ...CurrentUser_me
  //       id
  //       username
  //     }
  //   }
  // `,
  component: () => import(/* webpackChunkName: "home" */ "./Home"),
  response: (data) => ({
    title: "Reddit Clone - ducnguyen96",
    description: "Reddit clone built with React and Relay by ducnguyen96",
    props: data,
  }),
} as Route<typeof Home, homeQueryResponse>;
