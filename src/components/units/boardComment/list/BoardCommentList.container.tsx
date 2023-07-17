import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import type { ChangeEvent, MouseEvent } from "react";
import type {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentListUI from "./BoardCommentList.presenter";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import { useState } from "react";

export default function BoardCommentList(): JSX.Element {
  const router = useRouter();
  const [passwordModalIsOpen, setPasswordModalIsOpen] = useState(false);
  const [password, setPassword] = useState("");

  if (typeof router.query.boardId !== "string") return <></>;

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  const onClickDelete = async (
    event: MouseEvent<HTMLImageElement>,
  ): Promise<void> => {
    try {
      if (!(event.target instanceof HTMLImageElement)) {
        alert("시스템에 문제가 있습니다.");
        return;
      }
      setPasswordModalIsOpen(true);
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onChangeCheckPassword = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setPassword(event.target.value);
  };

  const handlePasswordModalCancle = (): void => {
    setPasswordModalIsOpen((prev) => !prev);
  };

  console.log(password);

  return (
    <BoardCommentListUI
      data={data}
      onClickDelete={onClickDelete}
      passwordModalIsOpen={passwordModalIsOpen}
      handlePasswordModalCancle={handlePasswordModalCancle}
      onChangeCheckPassword={onChangeCheckPassword}
    />
  );
}
