/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type useIsCommunityNameExistedQueryVariables = {
    name: string;
};
export type useIsCommunityNameExistedQueryResponse = {
    readonly isCommunityNameExisted: boolean;
};
export type useIsCommunityNameExistedQuery = {
    readonly response: useIsCommunityNameExistedQueryResponse;
    readonly variables: useIsCommunityNameExistedQueryVariables;
};



/*
query useIsCommunityNameExistedQuery(
  $name: String!
) {
  isCommunityNameExisted(name: $name)
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      }
    ],
    "kind": "ScalarField",
    "name": "isCommunityNameExisted",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useIsCommunityNameExistedQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useIsCommunityNameExistedQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "723f92743594e0d81d3d4b0b84a57a23",
    "id": null,
    "metadata": {},
    "name": "useIsCommunityNameExistedQuery",
    "operationKind": "query",
    "text": "query useIsCommunityNameExistedQuery(\n  $name: String!\n) {\n  isCommunityNameExisted(name: $name)\n}\n"
  }
};
})();
(node as any).hash = '65d0bf6f25fb9a0532bed3a0dea7861c';
export default node;
