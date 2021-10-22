/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type IsCommunityNameExistedQueryVariables = {
    name: string;
};
export type IsCommunityNameExistedQueryResponse = {
    readonly isCommunityNameExisted: boolean;
};
export type IsCommunityNameExistedQuery = {
    readonly response: IsCommunityNameExistedQueryResponse;
    readonly variables: IsCommunityNameExistedQueryVariables;
};



/*
query IsCommunityNameExistedQuery(
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
    "name": "IsCommunityNameExistedQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IsCommunityNameExistedQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b2681398e316845a94a2866e6fdfeda8",
    "id": null,
    "metadata": {},
    "name": "IsCommunityNameExistedQuery",
    "operationKind": "query",
    "text": "query IsCommunityNameExistedQuery(\n  $name: String!\n) {\n  isCommunityNameExisted(name: $name)\n}\n"
  }
};
})();
(node as any).hash = 'bab23a6236b82afddd4ab5201e59afda';
export default node;
