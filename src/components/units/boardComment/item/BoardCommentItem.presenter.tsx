import * as S from "./BoardCommentItem.styles";
import { Rate, Button, Input } from "antd";
import { getDate } from "../../../../commons/libraries/utils";
import type { IBoardCommentItemUIProps } from "./BoardCommentItem.types";
import BoardCommentWrite from "../write/BoardCommentWrite.container";

export default function BoardCommentItemUI(
  props: IBoardCommentItemUIProps
): JSX.Element {

  return (
    <>
      {props.passwordModalIsOpen && (
        <S.PasswordModal
          open={true}
          closeIcon={false}
          onOk={props.onClickDelete}
          footer={[
            <Button key="ok" onClick={props.onClickDelete}>
              비밀번호 확인
            </Button>,
            <Button key="cancle" onClick={props.handlePasswordModalCancle}>
              취소
            </Button>,
          ]}
        >
          <p className="modal-title">
            댓글 삭제를 위한 비밀번호를 입력해주세요.
          </p>
          <Input.Password
            placeholder="input password"
            onChange={props.onChangeCheckPassword}
          />
        </S.PasswordModal>
      )}
      {!props.isEdit ? (
        <S.ItemWrapper>
          <S.FlexWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{props.el.writer}</S.Writer>
              </S.WriterWrapper>
              <S.Contents>{props.el.contents}</S.Contents>
              <Rate disabled value={props.el.rating}></Rate>
            </S.MainWrapper>
            <S.OptionWrapper>
              <S.UpdateIcon
                src="/images/boardComment/list/option_update_icon.png/"
                onClick={props.onClickUpdate}
              />
              <S.DeleteIcon
                id={props.el._id}
                src="/images/boardComment/list/option_delete_icon.png/"
                onClick={props.onClickOpenDeleteModal}
              />
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.DateString>{getDate(props.el?.createdAt)}</S.DateString>
        </S.ItemWrapper>
      ) : (
        <BoardCommentWrite
          isEdit={true}
          setIsEdit={props.setIsEdit}
          el={props.el}
        />
      )}
    </>
  );
}
