import { Route } from "../../core/router";
import Submit from "./Submit";

export default {
  path: "/submit",
  component: () => import(/* webpackChunkName: "legal" */ "./Submit"),
  response: () => ({
    title: "Submit to Reddit",
  }),
} as Route<typeof Submit>;
