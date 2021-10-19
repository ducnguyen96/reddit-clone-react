import React from "react";
import ReactDOM from "react-dom";
import { createRelay } from "./core/relay";
import { App } from "./common/App";
import history from "history/browser";

const data = (document.getElementById("data") as HTMLScriptElement).text;
const records = data ? JSON.parse(data) : undefined;
const relay = createRelay({ records });

ReactDOM.render(
  <React.StrictMode>
    <App history={history} relay={relay} />
  </React.StrictMode>,
  document.getElementById("root")
);
