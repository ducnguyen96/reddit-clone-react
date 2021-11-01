/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type LoginDialogLoginGoogleMutationVariables = {
    gmail: string;
};
export type LoginDialogLoginGoogleMutationResponse = {
    readonly loginGoogle: {
        readonly expiresIn: number | null;
        readonly accessToken: string | null;
    };
};
export type LoginDialogLoginGoogleMutation = {
    readonly response: LoginDialogLoginGoogleMutationResponse;
    readonly variables: LoginDialogLoginGoogleMutationVariables;
};



/*
mutation LoginDialogLoginGoogleMutation(
  $gmail: String!
) {
  loginGoogle(gmail: $gmail) {
    expiresIn
    accessToken
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "gmail"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "gmail",
        "variableName": "gmail"
      }
    ],
    "concreteType": "TokenPayloadDto",
    "kind": "LinkedField",
    "name": "loginGoogle",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "expiresIn",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "accessToken",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LoginDialogLoginGoogleMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LoginDialogLoginGoogleMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5749852cc71a6ee0e81ea270943e7c29",
    "id": null,
    "metadata": {},
    "name": "LoginDialogLoginGoogleMutation",
    "operationKind": "mutation",
    "text": "mutation LoginDialogLoginGoogleMutation(\n  $gmail: String!\n) {\n  loginGoogle(gmail: $gmail) {\n    expiresIn\n    accessToken\n  }\n}\n"
  }
};
})();
(node as any).hash = '8c0bff5b3bde35a07029f8db1009d6fe';
export default node;
