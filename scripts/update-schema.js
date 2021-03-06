/* SPDX-FileCopyrightText: 2014-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

const fs = require("fs");
const path = require("path");
const got = require("got");
const { format } = require("prettier");
const {
  getIntrospectionQuery,
  buildClientSchema,
  printSchema,
} = require("graphql");

// Get GraphQL API URL for the the selected environment.
// Example: `yarn update-schema --env=test`
const url = `http://localhost:5000`;

// Download and save GraphQL API schema
got
  .post(url, { json: { query: getIntrospectionQuery() } })
  .json()
  .then((res) => {
    const schema = buildClientSchema(res.data);
    const filename = path.resolve(__dirname, "../src/graphql/schema.graphql");
    let output = printSchema(schema, { commentDescriptions: true });
    output = format(output, { parser: "graphql" });
    fs.writeFileSync(filename, output, { encoding: "utf-8" });
    console.log(`Saved ${url} to ${path.basename(filename)}`);
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });
