/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type InputContentMode = "MarkDown" | "TextEditor" | "%future added value";
export type PostType = "Image_Video" | "Link" | "Post" | "%future added value";
export type CreatePostInput = {
    title: string;
    content: string;
    type: PostType;
    contentMode: InputContentMode;
    communityId: string;
};
export type SubmitMutationVariables = {
    input: CreatePostInput;
};
export type SubmitMutationResponse = {
    readonly createPost: {
        readonly id: string;
    };
};
export type SubmitMutation = {
    readonly response: SubmitMutationResponse;
    readonly variables: SubmitMutationVariables;
};



/*
mutation SubmitMutation(
  $input: CreatePostInput!
) {
  createPost(input: $input) {
    id
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
    "concreteType": "Post",
    "kind": "LinkedField",
    "name": "createPost",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
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
    "name": "SubmitMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SubmitMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "89b5e72ba81452b62e9fcf4cf970ad8a",
    "id": null,
    "metadata": {},
    "name": "SubmitMutation",
    "operationKind": "mutation",
    "text": "mutation SubmitMutation(\n  $input: CreatePostInput!\n) {\n  createPost(input: $input) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e5293ad93d94a939397383b0c1b92935';
export default node;
