/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CurrentUser_me = {
    readonly id: string;
    readonly username: string;
    readonly " $refType": "CurrentUser_me";
};
export type CurrentUser_me$data = CurrentUser_me;
export type CurrentUser_me$key = {
    readonly " $data"?: CurrentUser_me$data;
    readonly " $fragmentRefs": FragmentRefs<"CurrentUser_me">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CurrentUser_me",
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
      "name": "username",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = '4fadf044b53cd87365f04576a103c4cb';
export default node;
