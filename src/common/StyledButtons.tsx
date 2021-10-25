import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { UserActionType } from "../components/Post/__generated__/PostCreateActionMutation.graphql";

export type UpDownVoteButtonProps = {
  id: string;
  label: string;
  color: string;
  disabled: boolean;
  onClickHandler: (actionType: UserActionType, target: string) => void;
};

export const UpVoteButton = (props: UpDownVoteButtonProps) => {
  return (
    <IconButton
      sx={{
        ":disabled": {
          color: "#FF4500",
        },
        color: props.color,
      }}
      disabled={props.disabled}
      aria-label={props.label}
      onClick={() => props.onClickHandler("UpVote", props.id)}
    >
      <ArrowDropUp />
    </IconButton>
  );
};

export const DownVoteButton = (props: UpDownVoteButtonProps) => {
  return (
    <IconButton
      sx={{
        ":disabled": {
          color: "#7193FF",
        },
        color: props.color,
      }}
      disabled={props.disabled}
      aria-label={props.label}
      onClick={() => props.onClickHandler("DownVote", props.id)}
    >
      <ArrowDropDown />
    </IconButton>
  );
};
