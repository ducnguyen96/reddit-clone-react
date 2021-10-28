import comments from "./comments";
import home from "./home";
import legal from "./legal";
import submit from "./submit";
import test from "./test";

/**
 * The list of application routes (pages).
 */
export default [home, ...legal, submit, comments, test] as const;
