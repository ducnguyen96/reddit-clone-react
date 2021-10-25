/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type UserActionTargetType = "COMMENT" | "POST" | "%future added value";
export type UserActionType = "DownVote" | "UpVote" | "%future added value";
export type UserCreateActionInput = {
    type: UserActionType;
    target: string;
    targetType: UserActionTargetType;
};
export type PostCreateActionMutationVariables = {
    input: UserCreateActionInput;
};
export type PostCreateActionMutationResponse = {
    readonly userCreateAction: {
        readonly id: string;
        readonly type: UserActionType;
        readonly target: string;
        readonly targetType: UserActionTargetType;
        readonly createdAt: string;
        readonly updatedAt: string;
    };
};
export type PostCreateActionMutation = {
    readonly response: PostCreateActionMutationResponse;
    readonly variables: PostCreateActionMutationVariables;
};



/*
mutation PostCreateActionMutation(
  $input: UserCreateActionInput!
) {
  userCreateAction(input: $input) {
    id
    type
    target
    targetType
    createdAt
    updatedAt
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UserAction",
    "kind": "LinkedField",
    "name": "userCreateAction",
    "plural": false,
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
        "name": "type",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "target",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "targetType",
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
    "name": "PostCreateActionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PostCreateActionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a43a0f30c016c9f72ca0de7d475a33c1",
    "id": null,
    "metadata": {},
    "name": "PostCreateActionMutation",
    "operationKind": "mutation",
    "text": "mutation PostCreateActionMutation(\n  $input: UserCreateActionInput!\n) {\n  userCreateAction(input: $input) {\n    id\n    type\n    target\n    targetType\n    createdAt\n    updatedAt\n  }\n}\n"
  }
};
})();
(node as any).hash = '602f1f844eeea1e3ba2fd60db909e057';
export default node;
