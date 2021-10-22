/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type submitQueryVariables = {};
export type submitQueryResponse = {
    readonly me: {
        readonly id: string;
        readonly username: string;
        readonly " $fragmentRefs": FragmentRefs<"CurrentUser_me">;
    } | null;
};
export type submitQuery = {
    readonly response: submitQueryResponse;
    readonly variables: submitQueryVariables;
};



/*
query submitQuery {
  me {
    ...CurrentUser_me
    id
    username
  }
}

fragment CurrentUser_me on User {
  id
  username
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "submitQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
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
    "name": "submitQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4a0fc4d75739733879348e16c4b31bab",
    "id": null,
    "metadata": {},
    "name": "submitQuery",
    "operationKind": "query",
    "text": "query submitQuery {\n  me {\n    ...CurrentUser_me\n    id\n    username\n  }\n}\n\nfragment CurrentUser_me on User {\n  id\n  username\n}\n"
  }
};
})();
(node as any).hash = 'c3f03a8e03d4e1abbebece25b364ae07';
export default node;
