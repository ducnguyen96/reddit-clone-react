import { graphql } from "relay-runtime";
import { Route } from "../../core/router";
import Submit from "./Submit";
import { submitQueryResponse } from "./__generated__/submitQuery.graphql";

export default {
  path: "/submit",
  query: graphql`
    query submitQuery {
      me {
        ...CurrentUser_me
        id
        username
      }
    }
  `,
  component: () => import(/* webpackChunkName: "legal" */ "./Submit"),
  response: (data) => ({
    title: "Submit to Reddit",
    props: data,
  }),
} as Route<typeof Submit, submitQueryResponse>;
