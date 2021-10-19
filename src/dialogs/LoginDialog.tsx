import { graphql } from "relay-runtime";
import { useCurrentUser } from "../hooks/useCurrentUser";

export function LoginDialog(): JSX.Element {
  const user = useCurrentUser();
  console.log("user :", user);
  return <p>Hello {user?.username}</p>;
}

export const meQuery = graphql`
  query LoginDialogMeQuery {
    me {
      id
      username
    }
  }
`;
