/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type UserRegisterInput = {
    username: string;
    password: string;
    repeatPassword: string;
};
export type SignupDialogRegisterMutationVariables = {
    input: UserRegisterInput;
};
export type SignupDialogRegisterMutationResponse = {
    readonly register: {
        readonly __typename: "RegisterPayload";
        readonly user: {
            readonly id: string;
            readonly username: string;
            readonly createdAt: string;
            readonly updatedAt: string;
        };
        readonly token: {
            readonly expiresIn: number | null;
            readonly accessToken: string | null;
        };
    } | {
        readonly __typename: "RegisterBadRequest";
        readonly errors: ReadonlyArray<{
            readonly message: string;
            readonly path: string;
        }>;
    } | {
        readonly __typename: "RegisterInternalServerError";
        readonly error: {
            readonly message: string;
            readonly path: string;
        };
    } | {
        /*This will never be '%other', but we need some
        value in case none of the concrete values match.*/
        readonly __typename: "%other";
    };
};
export type SignupDialogRegisterMutation = {
    readonly response: SignupDialogRegisterMutationResponse;
    readonly variables: SignupDialogRegisterMutationVariables;
};



/*
mutation SignupDialogRegisterMutation(
  $input: UserRegisterInput!
) {
  register(input: $input) {
    __typename
    ... on RegisterPayload {
      user {
        id
        username
        createdAt
        updatedAt
      }
      token {
        expiresIn
        accessToken
      }
    }
    ... on RegisterBadRequest {
      errors {
        message
        path
      }
    }
    ... on RegisterInternalServerError {
      error {
        message
        path
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
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "message",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "path",
    "storageKey": null
  }
],
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": null,
    "kind": "LinkedField",
    "name": "register",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
        "storageKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
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
                "name": "username",
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
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "TokenPayloadDto",
            "kind": "LinkedField",
            "name": "token",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "expiresIn",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "accessToken",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "type": "RegisterPayload",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CustomError",
            "kind": "LinkedField",
            "name": "errors",
            "plural": true,
            "selections": (v1/*: any*/),
            "storageKey": null
          }
        ],
        "type": "RegisterBadRequest",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CustomError",
            "kind": "LinkedField",
            "name": "error",
            "plural": false,
            "selections": (v1/*: any*/),
            "storageKey": null
          }
        ],
        "type": "RegisterInternalServerError",
        "abstractKey": null
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
    "name": "SignupDialogRegisterMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SignupDialogRegisterMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "608b444920c99939452b3543661300a2",
    "id": null,
    "metadata": {},
    "name": "SignupDialogRegisterMutation",
    "operationKind": "mutation",
    "text": "mutation SignupDialogRegisterMutation(\n  $input: UserRegisterInput!\n) {\n  register(input: $input) {\n    __typename\n    ... on RegisterPayload {\n      user {\n        id\n        username\n        createdAt\n        updatedAt\n      }\n      token {\n        expiresIn\n        accessToken\n      }\n    }\n    ... on RegisterBadRequest {\n      errors {\n        message\n        path\n      }\n    }\n    ... on RegisterInternalServerError {\n      error {\n        message\n        path\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '771d3a6682302b2e6a443a147758d6fa';
export default node;
