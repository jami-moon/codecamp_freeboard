import type { ChangeEvent, MouseEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  passwordModalIsOpen: boolean;
  onClickDelete: () => void;
  handlePasswordModalCancle: () => void;
  onChangeCheckPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickOpenDeleteModal: (event: MouseEvent<HTMLImageElement>) => void;
}
