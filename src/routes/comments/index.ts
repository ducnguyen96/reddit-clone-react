import { Route } from "../../core/router";
import type Comments from "./Comments";

export default {
  path: "/r/:communitySlug/comments/:id/:slug",
  component: () => import(/* webpackChunkName: "legal" */ "./Comments"),
  response: () => ({
    title: "Submit to Reddit",
  }),
} as Route<typeof Comments>;
