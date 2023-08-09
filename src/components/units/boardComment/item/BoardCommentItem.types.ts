import type { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import type {
  IBoardComment,
  IQuery,
} from "../../../../commons/types/generated/types";

export interface IBoardCommentItemUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  el: IBoardComment;
  passwordModalIsOpen: boolean;
  onClickDelete: () => void;
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  onClickUpdate: (event: MouseEvent<HTMLImageElement>) => void;
  handlePasswordModalCancle: () => void;
  onChangeCheckPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickOpenDeleteModal: (event: MouseEvent<HTMLImageElement>) => void;
}
