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

  const [passwordModalIsOpen, setPasswordModalIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [boardCommentId, setBoardCommentId] = useState("");

  const onClickDelete = async (): Promise<void> => {
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setPasswordModalIsOpen(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickOpenDeleteModal = (
    event: MouseEvent<HTMLImageElement>,
  ): void => {
    setBoardCommentId(event.currentTarget.id);
    setPasswordModalIsOpen(true);
  };

  const onChangeCheckPassword = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setPassword(event.target.value);
  };

  const handlePasswordModalCancle = (): void => {
    setPasswordModalIsOpen((prev) => !prev);
  };

  return (
    <BoardCommentListUI
      data={data}
      onClickDelete={onClickDelete}
      passwordModalIsOpen={passwordModalIsOpen}
      handlePasswordModalCancle={handlePasswordModalCancle}
      onChangeCheckPassword={onChangeCheckPassword}
      onClickOpenDeleteModal={onClickOpenDeleteModal}
    />
  );
}
