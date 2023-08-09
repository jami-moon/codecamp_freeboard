import { useState } from "react";
import type { ChangeEvent, MouseEvent } from "react";
import type {
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IMutation,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import { useQuery, useMutation } from "@apollo/client";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentitem.queries";
import { useRouter } from "next/router";
import BoardCommentItemUI from "./BoardCommentItem.presenter";
import type { IBoardCommentItemUIProps } from "./BoardCommentItem.types";

export default function BoardCommentItem(
  props: IBoardCommentItemUIProps
): JSX.Element {
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
  const [isEdit, setIsEdit] = useState(false);

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
    event: MouseEvent<HTMLImageElement>
  ): void => {
    setBoardCommentId(event.currentTarget.id);
    setPasswordModalIsOpen(true);
  };

  const onChangeCheckPassword = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(event.target.value);
  };

  const handlePasswordModalCancle = (): void => {
    setPasswordModalIsOpen((prev) => !prev);
  };

  const onClickUpdate = (event: MouseEvent<HTMLImageElement>): void => {
    setIsEdit(true);
  };

  return (
    <BoardCommentItemUI
      data={data}
      el={props.el}
      isEdit={isEdit}
      setIsEdit={setIsEdit}
      onClickUpdate={onClickUpdate}
      onClickDelete={onClickDelete}
      passwordModalIsOpen={passwordModalIsOpen}
      handlePasswordModalCancle={handlePasswordModalCancle}
      onChangeCheckPassword={onChangeCheckPassword}
      onClickOpenDeleteModal={onClickOpenDeleteModal}
    />
  );
}
