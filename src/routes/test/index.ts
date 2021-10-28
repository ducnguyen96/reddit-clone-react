import { Route } from "../../core/router";

export default {
  path: "/test",
  component: () => import("./Test"),
  response: () => ({
    title: "test",
  }),
} as Route<any>;
