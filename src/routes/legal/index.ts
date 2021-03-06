import { Route } from "../../core/router";
import type Privacy from "./Privacy";
import type Terms from "./Terms";

export default [
  {
    path: "/privacy",
    component: () => import(/* webpackChunkName: "legal" */ "./Privacy"),
    response: () => ({
      title: "Privacy Policy",
    }),
  } as Route<typeof Privacy>,

  {
    path: "/terms",
    component: () => import(/* webpackChunkName: "legal" */ "./Terms"),
    response: () => ({
      title: "Privacy Policy",
    }),
  } as Route<typeof Terms>,
];
