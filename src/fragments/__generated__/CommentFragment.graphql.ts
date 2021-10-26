/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type InputContentMode = "MarkDown" | "TextEditor" | "%future added value";
export type CommentFragment = {
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
    readonly " $refType": "CommentFragment";
};
export type CommentFragment$data = CommentFragment;
export type CommentFragment$key = {
    readonly " $data"?: CommentFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"CommentFragment">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "CommentFragment"
};
(node as any).hash = '4d333d71bd964d1e5b7ca2d2d1f76983';
export default node;
