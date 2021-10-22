/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type useCurrentUserQueryVariables = {};
export type useCurrentUserQueryResponse = {
    readonly me: {
        readonly " $fragmentRefs": FragmentRefs<"CurrentUser_me">;
    } | null;
};
export type useCurrentUserQuery = {
    readonly response: useCurrentUserQueryResponse;
    readonly variables: useCurrentUserQueryVariables;
};



/*
query useCurrentUserQuery {
  me {
    ...CurrentUser_me
    id
  }
}

fragment CurrentUser_me on User {
  id
  username
}
*/

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useCurrentUserQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CurrentUser_me"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "useCurrentUserQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "username",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "310eec225d6e48791d7ef3e2c7758550",
    "id": null,
    "metadata": {},
    "name": "useCurrentUserQuery",
    "operationKind": "query",
    "text": "query useCurrentUserQuery {\n  me {\n    ...CurrentUser_me\n    id\n  }\n}\n\nfragment CurrentUser_me on User {\n  id\n  username\n}\n"
  }
};
(node as any).hash = '1341f45f2e71aba1f68c0cb80c915a13';
export default node;
