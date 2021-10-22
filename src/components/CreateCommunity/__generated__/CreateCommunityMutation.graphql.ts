/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type CommunityType = "Private" | "Public" | "Restricted" | "%future added value";
export type CreateCommunityInput = {
    name: string;
    type: CommunityType;
    isAdult: boolean;
};
export type CreateCommunityMutationVariables = {
    input: CreateCommunityInput;
};
export type CreateCommunityMutationResponse = {
    readonly createCommunity: {
        readonly id: string;
        readonly name: string;
        readonly slug: string;
        readonly type: CommunityType;
        readonly isAdult: boolean;
        readonly createdAt: string;
        readonly updatedAt: string;
    };
};
export type CreateCommunityMutation = {
    readonly response: CreateCommunityMutationResponse;
    readonly variables: CreateCommunityMutationVariables;
};



/*
mutation CreateCommunityMutation(
  $input: CreateCommunityInput!
) {
  createCommunity(input: $input) {
    id
    name
    slug
    type
    isAdult
    createdAt
    updatedAt
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
    "concreteType": "Community",
    "kind": "LinkedField",
    "name": "createCommunity",
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
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "slug",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "type",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isAdult",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAt",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "updatedAt",
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
    "name": "CreateCommunityMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateCommunityMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f74fece9e08be608a795c46e6f96022b",
    "id": null,
    "metadata": {},
    "name": "CreateCommunityMutation",
    "operationKind": "mutation",
    "text": "mutation CreateCommunityMutation(\n  $input: CreateCommunityInput!\n) {\n  createCommunity(input: $input) {\n    id\n    name\n    slug\n    type\n    isAdult\n    createdAt\n    updatedAt\n  }\n}\n"
  }
};
})();
(node as any).hash = '005bfea55b4194eeea8476783dc75ed3';
export default node;
