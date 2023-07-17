import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardCommentList.styles";
import type { IBoardCommentListUIProps } from "./BoardCommentList.types";
import { Rate, Button, Input } from "antd";

export default function BoardCommentListUI(
  props: IBoardCommentListUIProps,
): JSX.Element {
  return (
    <div>
      {props.data?.fetchBoardComments.map((el) => (
        <S.ItemWrapper key={el._id}>
          <S.FlexWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{el.writer}</S.Writer>
              </S.WriterWrapper>
              <S.Contents>{el.contents}</S.Contents>
              <Rate disabled defaultValue={el.rating}></Rate>
            </S.MainWrapper>
            <S.OptionWrapper>
              <S.UpdateIcon src="/images/boardComment/list/option_update_icon.png/" />
              <S.DeleteIcon
                id={el._id}
                src="/images/boardComment/list/option_delete_icon.png/"
                onClick={props.onClickDelete}
              />
              {props.passwordModalIsOpen && (
                <S.PasswordModal
                  open={true}
                  closeIcon={false}
                  footer={[
                    <Button key="ok">비밀번호 확인</Button>,
                    <Button
                      key="cancle"
                      onClick={props.handlePasswordModalCancle}
                    >
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
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.DateString>{getDate(el?.createdAt)}</S.DateString>
        </S.ItemWrapper>
      ))}
    </div>
  );
}
