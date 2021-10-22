/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type QueryCommunityInput = {
    limit?: number | null;
    page?: number | null;
    onlyMine?: boolean | null;
};
export type useListCommunityQueryVariables = {
    input: QueryCommunityInput;
};
export type useListCommunityQueryResponse = {
    readonly queryCommunity: {
        readonly " $fragmentRefs": FragmentRefs<"CommunityOnList">;
    };
};
export type useListCommunityQuery = {
    readonly response: useListCommunityQueryResponse;
    readonly variables: useListCommunityQueryVariables;
};



/*
query useListCommunityQuery(
  $input: QueryCommunityInput!
) {
  queryCommunity(input: $input) {
    ...CommunityOnList
  }
}

fragment CommunityOnList on CommunityPagination {
  length
  currentPage
  communities {
    id
    name
    numberOfMember
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useListCommunityQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CommunityPagination",
        "kind": "LinkedField",
        "name": "queryCommunity",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CommunityOnList"
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
    "name": "useListCommunityQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CommunityPagination",
        "kind": "LinkedField",
        "name": "queryCommunity",
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
            "concreteType": "Community",
            "kind": "LinkedField",
            "name": "communities",
            "plural": true,
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
                "name": "numberOfMember",
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
    "cacheID": "0cebd7f057a601fff0e7bfc04178a67a",
    "id": null,
    "metadata": {},
    "name": "useListCommunityQuery",
    "operationKind": "query",
    "text": "query useListCommunityQuery(\n  $input: QueryCommunityInput!\n) {\n  queryCommunity(input: $input) {\n    ...CommunityOnList\n  }\n}\n\nfragment CommunityOnList on CommunityPagination {\n  length\n  currentPage\n  communities {\n    id\n    name\n    numberOfMember\n  }\n}\n"
  }
};
})();
(node as any).hash = '64d6bb881536bafd1c5392ec86652fc9';
export default node;
