/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type InputContentMode = "MarkDown" | "TextEditor" | "%future added value";
export type CreateCommentInput = {
    postID: string;
    parentID?: string | null;
    content: string;
    contentMode: InputContentMode;
};
export type PostCommentMutationVariables = {
    input: CreateCommentInput;
};
export type PostCommentMutationResponse = {
    readonly createComment: {
        readonly id: string;
        readonly postID: string;
        readonly content: string;
        readonly contentMode: InputContentMode;
        readonly createdAt: string;
        readonly updatedAt: string;
        readonly upVotes: number;
        readonly downVotes: number;
        readonly owner: {
            readonly id: string;
            readonly username: string;
            readonly avatar: string | null;
        };
        readonly isUpVoted: boolean;
        readonly isDownVoted: boolean;
    };
};
export type PostCommentMutation = {
    readonly response: PostCommentMutationResponse;
    readonly variables: PostCommentMutationVariables;
};



/*
mutation PostCommentMutation(
  $input: CreateCommentInput!
) {
  createComment(input: $input) {
    id
    postID
    content
    contentMode
    createdAt
    updatedAt
    upVotes
    downVotes
    owner {
      id
      username
      avatar
    }
    isUpVoted
    isDownVoted
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Comment",
    "kind": "LinkedField",
    "name": "createComment",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "postID",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "content",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "contentMode",
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "upVotes",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "downVotes",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "owner",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "username",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "avatar",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isUpVoted",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isDownVoted",
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
    "name": "PostCommentMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PostCommentMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "1c33ea67bc3b0cf0867afc525fa9708c",
    "id": null,
    "metadata": {},
    "name": "PostCommentMutation",
    "operationKind": "mutation",
    "text": "mutation PostCommentMutation(\n  $input: CreateCommentInput!\n) {\n  createComment(input: $input) {\n    id\n    postID\n    content\n    contentMode\n    createdAt\n    updatedAt\n    upVotes\n    downVotes\n    owner {\n      id\n      username\n      avatar\n    }\n    isUpVoted\n    isDownVoted\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a1b67a6752dc585f2aec734b931307c8';
export default node;
