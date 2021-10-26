/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type QueryCommentInput = {
    postID: string;
    parentID?: string | null;
    limit?: number | null;
    page?: number | null;
};
export type ViewPostDialogCommentQueryVariables = {
    input: QueryCommentInput;
};
export type ViewPostDialogCommentQueryResponse = {
    readonly queryComment: {
        readonly length: number;
        readonly currentPage: number;
        readonly comments: ReadonlyArray<{
            readonly id: string;
            readonly replies: ReadonlyArray<{
                readonly replies: ReadonlyArray<{
                    readonly replies: ReadonlyArray<{
                        readonly replies: ReadonlyArray<{
                            readonly " $fragmentRefs": FragmentRefs<"CommentFragment">;
                        }>;
                        readonly " $fragmentRefs": FragmentRefs<"CommentFragment">;
                    }>;
                    readonly " $fragmentRefs": FragmentRefs<"CommentFragment">;
                }>;
                readonly " $fragmentRefs": FragmentRefs<"CommentFragment">;
            }>;
            readonly " $fragmentRefs": FragmentRefs<"CommentFragment">;
        }>;
    };
};
export type ViewPostDialogCommentQuery = {
    readonly response: ViewPostDialogCommentQueryResponse;
    readonly variables: ViewPostDialogCommentQueryVariables;
};



/*
query ViewPostDialogCommentQuery(
  $input: QueryCommentInput!
) {
  queryComment(input: $input) {
    length
    currentPage
    comments {
      id
      ...CommentFragment
      replies {
        ...CommentFragment
        replies {
          ...CommentFragment
          replies {
            ...CommentFragment
            replies {
              ...CommentFragment
              id
            }
            id
          }
          id
        }
        id
      }
    }
  }
}

fragment CommentFragment on Comment {
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "length",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "currentPage",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "postID",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "contentMode",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "upVotes",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "downVotes",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "owner",
  "plural": false,
  "selections": [
    (v4/*: any*/),
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
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isUpVoted",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isDownVoted",
  "storageKey": null
},
v15 = [
  (v4/*: any*/),
  (v5/*: any*/),
  (v6/*: any*/),
  (v7/*: any*/),
  (v8/*: any*/),
  (v9/*: any*/),
  (v10/*: any*/),
  (v11/*: any*/),
  (v12/*: any*/),
  (v13/*: any*/),
  (v14/*: any*/)
],
v16 = {
  "kind": "InlineDataFragmentSpread",
  "name": "CommentFragment",
  "selections": (v15/*: any*/)
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ViewPostDialogCommentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CommentPagination",
        "kind": "LinkedField",
        "name": "queryComment",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Comment",
            "kind": "LinkedField",
            "name": "comments",
            "plural": true,
            "selections": [
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Comment",
                "kind": "LinkedField",
                "name": "replies",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Comment",
                    "kind": "LinkedField",
                    "name": "replies",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Comment",
                        "kind": "LinkedField",
                        "name": "replies",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Comment",
                            "kind": "LinkedField",
                            "name": "replies",
                            "plural": true,
                            "selections": [
                              (v16/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v16/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v16/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v16/*: any*/)
                ],
                "storageKey": null
              },
              (v16/*: any*/)
            ],
            "storageKey": null
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ViewPostDialogCommentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CommentPagination",
        "kind": "LinkedField",
        "name": "queryComment",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Comment",
            "kind": "LinkedField",
            "name": "comments",
            "plural": true,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Comment",
                "kind": "LinkedField",
                "name": "replies",
                "plural": true,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v14/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Comment",
                    "kind": "LinkedField",
                    "name": "replies",
                    "plural": true,
                    "selections": [
                      (v4/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/),
                      (v12/*: any*/),
                      (v13/*: any*/),
                      (v14/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Comment",
                        "kind": "LinkedField",
                        "name": "replies",
                        "plural": true,
                        "selections": [
                          (v4/*: any*/),
                          (v5/*: any*/),
                          (v6/*: any*/),
                          (v7/*: any*/),
                          (v8/*: any*/),
                          (v9/*: any*/),
                          (v10/*: any*/),
                          (v11/*: any*/),
                          (v12/*: any*/),
                          (v13/*: any*/),
                          (v14/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Comment",
                            "kind": "LinkedField",
                            "name": "replies",
                            "plural": true,
                            "selections": (v15/*: any*/),
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
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "51c9dad03ab79a8ad146d3b0c09ef68c",
    "id": null,
    "metadata": {},
    "name": "ViewPostDialogCommentQuery",
    "operationKind": "query",
    "text": "query ViewPostDialogCommentQuery(\n  $input: QueryCommentInput!\n) {\n  queryComment(input: $input) {\n    length\n    currentPage\n    comments {\n      id\n      ...CommentFragment\n      replies {\n        ...CommentFragment\n        replies {\n          ...CommentFragment\n          replies {\n            ...CommentFragment\n            replies {\n              ...CommentFragment\n              id\n            }\n            id\n          }\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment CommentFragment on Comment {\n  id\n  postID\n  content\n  contentMode\n  createdAt\n  updatedAt\n  upVotes\n  downVotes\n  owner {\n    id\n    username\n    avatar\n  }\n  isUpVoted\n  isDownVoted\n}\n"
  }
};
})();
(node as any).hash = '25241fb527ea49e70f1775cc2438f958';
export default node;
