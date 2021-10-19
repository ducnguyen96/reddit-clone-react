import { Environment, Network, RecordSource, Store } from "relay-runtime";
import { config as appConfig } from ".";

type Config = {
  baseUrl?: string;
  request?: Request;
  records?: ConstructorParameters<typeof RecordSource>[0];
};

/* eslint-disable @typescript-eslint/no-explicit-any */

export function createRelay(config: Config = {}): Environment {
  const recordSource = new RecordSource(config.records);
  const store = new Store(recordSource);
  const apiUrl = appConfig.api.origin;

  const network = Network.create((operation, variables): Promise<any> => {
    const jwt = localStorage.getItem("jwt");
    const cookie = config.request?.headers.get("cookie");
    return fetch(`${apiUrl}${appConfig.api.path}`, {
      method: "POST",
      headers: {
        ...(cookie && { cookie }),
        "content-Type": "application/json",
        Authorization: jwt ? `Bearer ${jwt}` : "",
      },
      body: JSON.stringify({ query: operation.text, variables }),
      ...(!config.request && { credentials: "include" }),
    }).then((res) => res.json());
  });

  return new Environment({
    store,
    network,
    handlerProvider: null,
  });
}
