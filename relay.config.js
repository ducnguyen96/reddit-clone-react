/**
 * Relay configuration.
 *
 * @see https://relay.dev/docs/installation-and-setup
 */
module.exports = {
  src: ".",
  schema: "./src/graphql/schema.graphql",
  language: require("relay-compiler-language-typescript"),
  watchman: false,
};
