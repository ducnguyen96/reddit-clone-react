/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UserLoginInput = {
    username: string;
    password: string;
};
export type LoginDialogLoginMutationVariables = {
    input: UserLoginInput;
};
export type LoginDialogLoginMutationResponse = {
    readonly login: {
        readonly expiresIn: number | null;
        readonly accessToken: string | null;
    };
};
export type LoginDialogLoginMutation = {
    readonly response: LoginDialogLoginMutationResponse;
    readonly variables: LoginDialogLoginMutationVariables;
};



/*
mutation LoginDialogLoginMutation(
  $input: UserLoginInput!
) {
  login(input: $input) {
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
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "TokenPayloadDto",
    "kind": "LinkedField",
    "name": "login",
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
    "name": "LoginDialogLoginMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LoginDialogLoginMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b61ed211605d5dede77c9f1a6cfd0d66",
    "id": null,
    "metadata": {},
    "name": "LoginDialogLoginMutation",
    "operationKind": "mutation",
    "text": "mutation LoginDialogLoginMutation(\n  $input: UserLoginInput!\n) {\n  login(input: $input) {\n    expiresIn\n    accessToken\n  }\n}\n"
  }
};
})();
(node as any).hash = 'd13986c14393cda65c5cff39bf928d54';
export default node;
