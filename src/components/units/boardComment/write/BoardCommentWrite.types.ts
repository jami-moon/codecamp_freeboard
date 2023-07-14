import type { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IBoardCommentWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickWrite: () => void;
  writer: string;
  password: string;
  contents: string;
  star: number;
  setStar: Dispatch<SetStateAction<number>>;
}
