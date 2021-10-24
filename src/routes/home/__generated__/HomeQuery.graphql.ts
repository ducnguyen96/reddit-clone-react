/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type InputContentMode = "MarkDown" | "TextEditor" | "%future added value";
export type PostType = "Image_Video" | "Link" | "Post" | "%future added value";
export type QueryPostInput = {
    limit?: number | null;
    page?: number | null;
};
export type HomeQueryVariables = {
    input: QueryPostInput;
};
export type HomeQueryResponse = {
    readonly queryPost: {
        readonly length: number;
        readonly currentPage: number;
        readonly posts: ReadonlyArray<{
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
        }>;
    };
};
export type HomeQuery = {
    readonly response: HomeQueryResponse;
    readonly variables: HomeQueryVariables;
};



/*
query HomeQuery(
  $input: QueryPostInput!
) {
  queryPost(input: $input) {
    length
    currentPage
    posts {
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
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "PostPagination",
    "kind": "LinkedField",
    "name": "queryPost",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "length",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "currentPage",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "posts",
        "plural": true,
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HomeQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "800e802cdf5b80653e300d4929dc70d2",
    "id": null,
    "metadata": {},
    "name": "HomeQuery",
    "operationKind": "query",
    "text": "query HomeQuery(\n  $input: QueryPostInput!\n) {\n  queryPost(input: $input) {\n    length\n    currentPage\n    posts {\n      id\n      title\n      slug\n      content\n      type\n      contentMode\n      upVotes\n      downVotes\n      createdAt\n      updatedAt\n      numberOfComments\n      community {\n        id\n        name\n        slug\n        numberOfMember\n      }\n      owner {\n        id\n        username\n        avatar\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '2ac30b45e8c5fe8ded45b14c7dfc6d0c';
export default node;
