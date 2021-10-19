/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type LoginDialogMeQueryVariables = {};
export type LoginDialogMeQueryResponse = {
    readonly me: {
        readonly id: string;
        readonly username: string;
    } | null;
};
export type LoginDialogMeQuery = {
    readonly response: LoginDialogMeQueryResponse;
    readonly variables: LoginDialogMeQueryVariables;
};



/*
query LoginDialogMeQuery {
  me {
    id
    username
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LoginDialogMeQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "LoginDialogMeQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "6567d2c01fee5d66a932dcb7af685274",
    "id": null,
    "metadata": {},
    "name": "LoginDialogMeQuery",
    "operationKind": "query",
    "text": "query LoginDialogMeQuery {\n  me {\n    id\n    username\n  }\n}\n"
  }
};
})();
(node as any).hash = 'd667ade9733d3c2c6947931f2258f650';
export default node;
