import { CommentWithFragment } from "../dialogs/ViewPostDialog";

export const newCommentToCommentWithFragment = (
  c: any
): CommentWithFragment => {
  return {
    // @ts-ignore
    ...c["__fragments"]["CommentFragment"],
    oldestParentID: c["__fragments"]["CommentFragment"].id,
    replies: c.replies.map((d: any) => ({
      // @ts-ignore
      ...d["__fragments"]["CommentFragment"],
      oldestParentID: c["__fragments"]["CommentFragment"].id,
      replies: d.replies.map((d: any) => ({
        // @ts-ignore
        ...d["__fragments"]["CommentFragment"],
        oldestParentID: c["__fragments"]["CommentFragment"].id,
        replies: d.replies.map((d: any) => ({
          // @ts-ignore
          ...d["__fragments"]["CommentFragment"],
          oldestParentID: c["__fragments"]["CommentFragment"].id,
          replies: d.replies.map((d: any) => ({
            // @ts-ignore
            ...d["__fragments"]["CommentFragment"],
            oldestParentID: c["__fragments"]["CommentFragment"].id,
            replies: d.replies.map((d: any) => ({
              // @ts-ignore
              ...d["__fragments"]["CommentFragment"],
              oldestParentID: c["__fragments"]["CommentFragment"].id,
              replies: d.replies.map((d: any) => ({
                // @ts-ignore
                ...d["__fragments"]["CommentFragment"],
                oldestParentID: c["__fragments"]["CommentFragment"].id,
                replies: d.replies.map((d: any) => ({
                  // @ts-ignore
                  ...d["__fragments"]["CommentFragment"],
                  oldestParentID: c["__fragments"]["CommentFragment"].id,
                  replies: d.replies.map((d: any) => ({
                    // @ts-ignore
                    ...d["__fragments"]["CommentFragment"],
                    oldestParentID: c["__fragments"]["CommentFragment"].id,
                    replies: d.replies.map((d: any) => ({
                      // @ts-ignore
                      ...d["__fragments"]["CommentFragment"],
                      oldestParentID: c["__fragments"]["CommentFragment"].id,
                      replies: d.replies.map((d: any) => ({
                        // @ts-ignore
                        ...d["__fragments"]["CommentFragment"],
                        oldestParentID: c["__fragments"]["CommentFragment"].id,
                        replies: d.replies.map((d: any) => ({
                          // @ts-ignore
                          ...d["__fragments"]["CommentFragment"],
                          oldestParentID:
                            c["__fragments"]["CommentFragment"].id,
                          replies: d.replies.map((d: any) => ({
                            // @ts-ignore
                            ...d["__fragments"]["CommentFragment"],
                            oldestParentID:
                              c["__fragments"]["CommentFragment"].id,
                            replies: d.replies.map((d: any) => ({
                              // @ts-ignore
                              ...d["__fragments"]["CommentFragment"],
                              oldestParentID:
                                c["__fragments"]["CommentFragment"].id,
                              replies: d.replies.map((d: any) => ({
                                // @ts-ignore
                                ...d["__fragments"]["CommentFragment"],
                                oldestParentID:
                                  c["__fragments"]["CommentFragment"].id,
                                replies: d.replies.map((d: any) => ({
                                  // @ts-ignore
                                  ...d["__fragments"]["CommentFragment"],
                                  oldestParentID:
                                    c["__fragments"]["CommentFragment"].id,
                                  replies: d.replies.map((d: any) => ({
                                    // @ts-ignore
                                    ...d["__fragments"]["CommentFragment"],
                                  })),
                                  d,
                                })),
                              })),
                            })),
                          })),
                        })),
                      })),
                    })),
                  })),
                })),
              })),
            })),
          })),
        })),
      })),
    })),
  };
};
export const mapNewCommentToCommentWithFragment = (
  newComments: any
): CommentWithFragment[] => {
  return newComments.map((c: any) => newCommentToCommentWithFragment(c));
};
