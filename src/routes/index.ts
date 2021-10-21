import home from "./home";
import legal from "./legal";
import submit from "./submit";

/**
 * The list of application routes (pages).
 */
export default [home, ...legal, submit] as const;
