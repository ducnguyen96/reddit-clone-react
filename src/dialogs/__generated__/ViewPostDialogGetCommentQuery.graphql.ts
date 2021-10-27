/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ViewPostDialogGetCommentQueryVariables = {
    id: string;
};
export type ViewPostDialogGetCommentQueryResponse = {
    readonly getComment: {
        readonly replies: ReadonlyArray<{
            readonly replies: ReadonlyArray<{
                readonly replies: ReadonlyArray<{
                    readonly replies: ReadonlyArray<{
                        readonly replies: ReadonlyArray<{
                            readonly replies: ReadonlyArray<{
                                readonly replies: ReadonlyArray<{
                                    readonly replies: ReadonlyArray<{
                                        readonly replies: ReadonlyArray<{
                                            readonly replies: ReadonlyArray<{
                                                readonly replies: ReadonlyArray<{
                                                    readonly replies: ReadonlyArray<{
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
            readonly " $fragmentRefs": FragmentRefs<"CommentFragment">;
        }>;
        readonly " $fragmentRefs": FragmentRefs<"CommentFragment">;
    };
};
export type ViewPostDialogGetCommentQuery = {
    readonly response: ViewPostDialogGetCommentQueryResponse;
    readonly variables: ViewPostDialogGetCommentQueryVariables;
};



/*
query ViewPostDialogGetCommentQuery(
  $id: ID!
) {
  getComment(id: $id) {
    ...CommentFragment
    replies {
      ...CommentFragment
      replies {
        ...CommentFragment
        replies {
          ...CommentFragment
          replies {
            ...CommentFragment
            replies {
              ...CommentFragment
              replies {
                ...CommentFragment
                replies {
                  ...CommentFragment
                  replies {
                    ...CommentFragment
                    replies {
                      ...CommentFragment
                      replies {
                        ...CommentFragment
                        replies {
                          ...CommentFragment
                          replies {
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
                            id
                          }
                          id
                        }
                        id
                      }
                      id
                    }
                    id
                  }
                  id
                }
                id
              }
              id
            }
            id
          }
          id
        }
        id
      }
      id
    }
    id
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
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "postID",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "contentMode",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "upVotes",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "downVotes",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "owner",
  "plural": false,
  "selections": [
    (v2/*: any*/),
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
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isUpVoted",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isDownVoted",
  "storageKey": null
},
v13 = [
  (v2/*: any*/),
  (v3/*: any*/),
  (v4/*: any*/),
  (v5/*: any*/),
  (v6/*: any*/),
  (v7/*: any*/),
  (v8/*: any*/),
  (v9/*: any*/),
  (v10/*: any*/),
  (v11/*: any*/),
  (v12/*: any*/)
],
v14 = {
  "kind": "InlineDataFragmentSpread",
  "name": "CommentFragment",
  "selections": (v13/*: any*/)
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ViewPostDialogGetCommentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Comment",
        "kind": "LinkedField",
        "name": "getComment",
        "plural": false,
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
                                                                      {
                                                                        "alias": null,
                                                                        "args": null,
                                                                        "concreteType": "Comment",
                                                                        "kind": "LinkedField",
                                                                        "name": "replies",
                                                                        "plural": true,
                                                                        "selections": [
                                                                          (v14/*: any*/)
                                                                        ],
                                                                        "storageKey": null
                                                                      },
                                                                      (v14/*: any*/)
                                                                    ],
                                                                    "storageKey": null
                                                                  },
                                                                  (v14/*: any*/)
                                                                ],
                                                                "storageKey": null
                                                              },
                                                              (v14/*: any*/)
                                                            ],
                                                            "storageKey": null
                                                          },
                                                          (v14/*: any*/)
                                                        ],
                                                        "storageKey": null
                                                      },
                                                      (v14/*: any*/)
                                                    ],
                                                    "storageKey": null
                                                  },
                                                  (v14/*: any*/)
                                                ],
                                                "storageKey": null
                                              },
                                              (v14/*: any*/)
                                            ],
                                            "storageKey": null
                                          },
                                          (v14/*: any*/)
                                        ],
                                        "storageKey": null
                                      },
                                      (v14/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v14/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v14/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v14/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v14/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v14/*: any*/)
                ],
                "storageKey": null
              },
              (v14/*: any*/)
            ],
            "storageKey": null
          },
          (v14/*: any*/)
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
    "name": "ViewPostDialogGetCommentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Comment",
        "kind": "LinkedField",
        "name": "getComment",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          (v12/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Comment",
            "kind": "LinkedField",
            "name": "replies",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Comment",
                "kind": "LinkedField",
                "name": "replies",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Comment",
                    "kind": "LinkedField",
                    "name": "replies",
                    "plural": true,
                    "selections": [
                      (v2/*: any*/),
                      (v3/*: any*/),
                      (v4/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/),
                      (v12/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Comment",
                        "kind": "LinkedField",
                        "name": "replies",
                        "plural": true,
                        "selections": [
                          (v2/*: any*/),
                          (v3/*: any*/),
                          (v4/*: any*/),
                          (v5/*: any*/),
                          (v6/*: any*/),
                          (v7/*: any*/),
                          (v8/*: any*/),
                          (v9/*: any*/),
                          (v10/*: any*/),
                          (v11/*: any*/),
                          (v12/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Comment",
                            "kind": "LinkedField",
                            "name": "replies",
                            "plural": true,
                            "selections": [
                              (v2/*: any*/),
                              (v3/*: any*/),
                              (v4/*: any*/),
                              (v5/*: any*/),
                              (v6/*: any*/),
                              (v7/*: any*/),
                              (v8/*: any*/),
                              (v9/*: any*/),
                              (v10/*: any*/),
                              (v11/*: any*/),
                              (v12/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Comment",
                                "kind": "LinkedField",
                                "name": "replies",
                                "plural": true,
                                "selections": [
                                  (v2/*: any*/),
                                  (v3/*: any*/),
                                  (v4/*: any*/),
                                  (v5/*: any*/),
                                  (v6/*: any*/),
                                  (v7/*: any*/),
                                  (v8/*: any*/),
                                  (v9/*: any*/),
                                  (v10/*: any*/),
                                  (v11/*: any*/),
                                  (v12/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Comment",
                                    "kind": "LinkedField",
                                    "name": "replies",
                                    "plural": true,
                                    "selections": [
                                      (v2/*: any*/),
                                      (v3/*: any*/),
                                      (v4/*: any*/),
                                      (v5/*: any*/),
                                      (v6/*: any*/),
                                      (v7/*: any*/),
                                      (v8/*: any*/),
                                      (v9/*: any*/),
                                      (v10/*: any*/),
                                      (v11/*: any*/),
                                      (v12/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "Comment",
                                        "kind": "LinkedField",
                                        "name": "replies",
                                        "plural": true,
                                        "selections": [
                                          (v2/*: any*/),
                                          (v3/*: any*/),
                                          (v4/*: any*/),
                                          (v5/*: any*/),
                                          (v6/*: any*/),
                                          (v7/*: any*/),
                                          (v8/*: any*/),
                                          (v9/*: any*/),
                                          (v10/*: any*/),
                                          (v11/*: any*/),
                                          (v12/*: any*/),
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "Comment",
                                            "kind": "LinkedField",
                                            "name": "replies",
                                            "plural": true,
                                            "selections": [
                                              (v2/*: any*/),
                                              (v3/*: any*/),
                                              (v4/*: any*/),
                                              (v5/*: any*/),
                                              (v6/*: any*/),
                                              (v7/*: any*/),
                                              (v8/*: any*/),
                                              (v9/*: any*/),
                                              (v10/*: any*/),
                                              (v11/*: any*/),
                                              (v12/*: any*/),
                                              {
                                                "alias": null,
                                                "args": null,
                                                "concreteType": "Comment",
                                                "kind": "LinkedField",
                                                "name": "replies",
                                                "plural": true,
                                                "selections": [
                                                  (v2/*: any*/),
                                                  (v3/*: any*/),
                                                  (v4/*: any*/),
                                                  (v5/*: any*/),
                                                  (v6/*: any*/),
                                                  (v7/*: any*/),
                                                  (v8/*: any*/),
                                                  (v9/*: any*/),
                                                  (v10/*: any*/),
                                                  (v11/*: any*/),
                                                  (v12/*: any*/),
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "concreteType": "Comment",
                                                    "kind": "LinkedField",
                                                    "name": "replies",
                                                    "plural": true,
                                                    "selections": [
                                                      (v2/*: any*/),
                                                      (v3/*: any*/),
                                                      (v4/*: any*/),
                                                      (v5/*: any*/),
                                                      (v6/*: any*/),
                                                      (v7/*: any*/),
                                                      (v8/*: any*/),
                                                      (v9/*: any*/),
                                                      (v10/*: any*/),
                                                      (v11/*: any*/),
                                                      (v12/*: any*/),
                                                      {
                                                        "alias": null,
                                                        "args": null,
                                                        "concreteType": "Comment",
                                                        "kind": "LinkedField",
                                                        "name": "replies",
                                                        "plural": true,
                                                        "selections": [
                                                          (v2/*: any*/),
                                                          (v3/*: any*/),
                                                          (v4/*: any*/),
                                                          (v5/*: any*/),
                                                          (v6/*: any*/),
                                                          (v7/*: any*/),
                                                          (v8/*: any*/),
                                                          (v9/*: any*/),
                                                          (v10/*: any*/),
                                                          (v11/*: any*/),
                                                          (v12/*: any*/),
                                                          {
                                                            "alias": null,
                                                            "args": null,
                                                            "concreteType": "Comment",
                                                            "kind": "LinkedField",
                                                            "name": "replies",
                                                            "plural": true,
                                                            "selections": [
                                                              (v2/*: any*/),
                                                              (v3/*: any*/),
                                                              (v4/*: any*/),
                                                              (v5/*: any*/),
                                                              (v6/*: any*/),
                                                              (v7/*: any*/),
                                                              (v8/*: any*/),
                                                              (v9/*: any*/),
                                                              (v10/*: any*/),
                                                              (v11/*: any*/),
                                                              (v12/*: any*/),
                                                              {
                                                                "alias": null,
                                                                "args": null,
                                                                "concreteType": "Comment",
                                                                "kind": "LinkedField",
                                                                "name": "replies",
                                                                "plural": true,
                                                                "selections": [
                                                                  (v2/*: any*/),
                                                                  (v3/*: any*/),
                                                                  (v4/*: any*/),
                                                                  (v5/*: any*/),
                                                                  (v6/*: any*/),
                                                                  (v7/*: any*/),
                                                                  (v8/*: any*/),
                                                                  (v9/*: any*/),
                                                                  (v10/*: any*/),
                                                                  (v11/*: any*/),
                                                                  (v12/*: any*/),
                                                                  {
                                                                    "alias": null,
                                                                    "args": null,
                                                                    "concreteType": "Comment",
                                                                    "kind": "LinkedField",
                                                                    "name": "replies",
                                                                    "plural": true,
                                                                    "selections": [
                                                                      (v2/*: any*/),
                                                                      (v3/*: any*/),
                                                                      (v4/*: any*/),
                                                                      (v5/*: any*/),
                                                                      (v6/*: any*/),
                                                                      (v7/*: any*/),
                                                                      (v8/*: any*/),
                                                                      (v9/*: any*/),
                                                                      (v10/*: any*/),
                                                                      (v11/*: any*/),
                                                                      (v12/*: any*/),
                                                                      {
                                                                        "alias": null,
                                                                        "args": null,
                                                                        "concreteType": "Comment",
                                                                        "kind": "LinkedField",
                                                                        "name": "replies",
                                                                        "plural": true,
                                                                        "selections": (v13/*: any*/),
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
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6e332a9c7698c4d60b26a0835edc8fad",
    "id": null,
    "metadata": {},
    "name": "ViewPostDialogGetCommentQuery",
    "operationKind": "query",
    "text": "query ViewPostDialogGetCommentQuery(\n  $id: ID!\n) {\n  getComment(id: $id) {\n    ...CommentFragment\n    replies {\n      ...CommentFragment\n      replies {\n        ...CommentFragment\n        replies {\n          ...CommentFragment\n          replies {\n            ...CommentFragment\n            replies {\n              ...CommentFragment\n              replies {\n                ...CommentFragment\n                replies {\n                  ...CommentFragment\n                  replies {\n                    ...CommentFragment\n                    replies {\n                      ...CommentFragment\n                      replies {\n                        ...CommentFragment\n                        replies {\n                          ...CommentFragment\n                          replies {\n                            ...CommentFragment\n                            replies {\n                              ...CommentFragment\n                              replies {\n                                ...CommentFragment\n                                replies {\n                                  ...CommentFragment\n                                  replies {\n                                    ...CommentFragment\n                                    id\n                                  }\n                                  id\n                                }\n                                id\n                              }\n                              id\n                            }\n                            id\n                          }\n                          id\n                        }\n                        id\n                      }\n                      id\n                    }\n                    id\n                  }\n                  id\n                }\n                id\n              }\n              id\n            }\n            id\n          }\n          id\n        }\n        id\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment CommentFragment on Comment {\n  id\n  postID\n  content\n  contentMode\n  createdAt\n  updatedAt\n  upVotes\n  downVotes\n  owner {\n    id\n    username\n    avatar\n  }\n  isUpVoted\n  isDownVoted\n}\n"
  }
};
})();
(node as any).hash = 'f2fa9c13940aaaa49c367729b9f643f1';
export default node;
