import { Theme } from "@emotion/react";
import { Typography } from "@mui/material";
import {
  commitMutation,
  useLazyLoadQuery,
  useRelayEnvironment,
} from "react-relay";
import { IsCommunityNameExisted } from "../../graphql/queries/IsCommunityNameExisted";
import { IsCommunityNameExistedQuery } from "../../graphql/queries/__generated__/IsCommunityNameExistedQuery.graphql";
import { useCreateCommunityDialog, useCurrentCommunity } from "../../hooks";
import { createCommunityMutation } from "./CreateCommunity";
import {
  CommunityType,
  CreateCommunityMutation,
} from "./__generated__/CreateCommunityMutation.graphql";

export type ErrorWhenCreatingCommunityProps = {
  name: string;
  type: CommunityType;
  isAdult: boolean;
  theme: Theme;
};
export const ErrorWhenCreatingCommunity = ({
  isAdult,
  name,
  theme,
  type,
}: ErrorWhenCreatingCommunityProps) => {
  const data = useLazyLoadQuery<IsCommunityNameExistedQuery>(
    IsCommunityNameExisted,
    {
      name,
    }
  );

  const dialog = useCreateCommunityDialog();

  const currentCommunity = useCurrentCommunity();

  if (!data.isCommunityNameExisted) {
    const environment = useRelayEnvironment();
    commitMutation<CreateCommunityMutation>(environment, {
      mutation: createCommunityMutation,
      variables: {
        input: {
          isAdult,
          name,
          type,
        },
      },
      onCompleted: (res) => {
        dialog.hide();
        if (res.createCommunity) {
          const created = res.createCommunity;
          currentCommunity.setCurrentCommunity({
            id: created.id,
            name: created.name,
            numberOfMember: 1,
          });
        }
      } /* Mutation completed */,
      onError: (error) => {
        console.log("error :", error);
      } /* Mutation errored */,
    });
  }

  return (
    // @ts-ignore
    <Typography variant="h5" sx={{ color: theme.palette.error.main }}>
      {data.isCommunityNameExisted ? "invalid name" : null}
    </Typography>
  );
};
