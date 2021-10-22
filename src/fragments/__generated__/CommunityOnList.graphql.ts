/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityOnList = {
    readonly length: number;
    readonly currentPage: number;
    readonly communities: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
        readonly numberOfMember: number;
    }>;
    readonly " $refType": "CommunityOnList";
};
export type CommunityOnList$data = CommunityOnList;
export type CommunityOnList$key = {
    readonly " $data"?: CommunityOnList$data;
    readonly " $fragmentRefs": FragmentRefs<"CommunityOnList">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityOnList",
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
  "type": "CommunityPagination",
  "abstractKey": null
};
(node as any).hash = '7e6d8471f4e359b2c76ba7e8ee3e1849';
export default node;
