/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type InputContentMode = "MarkDown" | "TextEditor" | "%future added value";
export type PostType = "Image_Video" | "Link" | "Post" | "%future added value";
export type ViewPostDialogPostQueryVariables = {
    slug: string;
};
export type ViewPostDialogPostQueryResponse = {
    readonly getPost: {
        readonly id: string;
        readonly title: string;
        readonly slug: string;
        readonly content: string;
        readonly type: PostType;
        readonly contentMode: InputContentMode;
        readonly upVotes: number;
        readonly downVotes: number;
        readonly createdAt: string;
        readonly updatedAt: string;
        readonly numberOfComments: number;
        readonly isUpVoted: boolean;
        readonly isDownVoted: boolean;
        readonly community: {
            readonly id: string;
            readonly name: string;
            readonly slug: string;
            readonly numberOfMember: number;
        };
        readonly owner: {
            readonly id: string;
            readonly username: string;
            readonly avatar: string | null;
        };
    };
};
export type ViewPostDialogPostQuery = {
    readonly response: ViewPostDialogPostQueryResponse;
    readonly variables: ViewPostDialogPostQueryVariables;
};



/*
query ViewPostDialogPostQuery(
  $slug: String!
) {
  getPost(slug: $slug) {
    id
    title
    slug
    content
    type
    contentMode
    upVotes
    downVotes
    createdAt
    updatedAt
    numberOfComments
    isUpVoted
    isDownVoted
    community {
      id
      name
      slug
      numberOfMember
    }
    owner {
      id
      username
      avatar
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "slug"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "slug",
        "variableName": "slug"
      }
    ],
    "concreteType": "Post",
    "kind": "LinkedField",
    "name": "getPost",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      (v2/*: any*/),
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
        "name": "type",
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
        "name": "numberOfComments",
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "numberOfMember",
            "storageKey": null
          }
        ],
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
    "name": "ViewPostDialogPostQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ViewPostDialogPostQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "da4e2f0cdc2ba697e0113fe09c4920b7",
    "id": null,
    "metadata": {},
    "name": "ViewPostDialogPostQuery",
    "operationKind": "query",
    "text": "query ViewPostDialogPostQuery(\n  $slug: String!\n) {\n  getPost(slug: $slug) {\n    id\n    title\n    slug\n    content\n    type\n    contentMode\n    upVotes\n    downVotes\n    createdAt\n    updatedAt\n    numberOfComments\n    isUpVoted\n    isDownVoted\n    community {\n      id\n      name\n      slug\n      numberOfMember\n    }\n    owner {\n      id\n      username\n      avatar\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'bbbe8d1d9ac2ed5be381fad99395ee83';
export default node;
