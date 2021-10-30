/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type MediaType = "Image" | "Video" | "%future added value";
export type CreateMediaInput = {
    url: string;
    type: MediaType;
};
export type CreatePostEditorCreateMediaMutationVariables = {
    input: CreateMediaInput;
};
export type CreatePostEditorCreateMediaMutationResponse = {
    readonly createMedia: {
        readonly id: string;
        readonly url: string;
        readonly type: MediaType;
        readonly createdAt: string;
        readonly updatedAt: string;
    };
};
export type CreatePostEditorCreateMediaMutation = {
    readonly response: CreatePostEditorCreateMediaMutationResponse;
    readonly variables: CreatePostEditorCreateMediaMutationVariables;
};



/*
mutation CreatePostEditorCreateMediaMutation(
  $input: CreateMediaInput!
) {
  createMedia(input: $input) {
    id
    url
    type
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
    "concreteType": "Media",
    "kind": "LinkedField",
    "name": "createMedia",
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
        "name": "url",
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
    "name": "CreatePostEditorCreateMediaMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreatePostEditorCreateMediaMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a639a918b46d6bca20112c7890d96437",
    "id": null,
    "metadata": {},
    "name": "CreatePostEditorCreateMediaMutation",
    "operationKind": "mutation",
    "text": "mutation CreatePostEditorCreateMediaMutation(\n  $input: CreateMediaInput!\n) {\n  createMedia(input: $input) {\n    id\n    url\n    type\n    createdAt\n    updatedAt\n  }\n}\n"
  }
};
})();
(node as any).hash = 'dc41514b61c1f361bde24a6a9feb1c92';
export default node;
