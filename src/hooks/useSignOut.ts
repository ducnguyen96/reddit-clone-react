import React from "react";
import { graphql } from "react-relay";

const signOutMutation = graphql`
  mutation useSignOutMutation {
    signOut
  }
`;

export function useSignOut(): () => void {
  // const [commit] = useMutation<useSignOutMutation>(signOutMutation);
  return React.useCallback(function () {
    // commit({
    //   variables: {},
    //   onCompleted(_, errors) {
    //     if (errors) throw errors[0];
    //     window.location.reload();
    //   },
    // });
    localStorage.removeItem("jwt");
    window.location.reload();
  }, []);
}
