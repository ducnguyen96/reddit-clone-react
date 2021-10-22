/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type LoginDialogMeQueryVariables = {};
export type LoginDialogMeQueryResponse = {
    readonly me: {
        readonly id: string;
        readonly username: string;
        readonly " $fragmentRefs": FragmentRefs<"CurrentUser_me">;
    } | null;
};
export type LoginDialogMeQuery = {
    readonly response: LoginDialogMeQueryResponse;
    readonly variables: LoginDialogMeQueryVariables;
};



/*
query LoginDialogMeQuery {
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
    "name": "LoginDialogMeQuery",
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
    "name": "LoginDialogMeQuery",
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
    "cacheID": "30974437645db9c90fb6d1b110630d40",
    "id": null,
    "metadata": {},
    "name": "LoginDialogMeQuery",
    "operationKind": "query",
    "text": "query LoginDialogMeQuery {\n  me {\n    ...CurrentUser_me\n    id\n    username\n  }\n}\n\nfragment CurrentUser_me on User {\n  id\n  username\n}\n"
  }
};
})();
(node as any).hash = '40ecdeb1cf2575da12de1d5a1babc593';
export default node;
