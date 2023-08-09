import * as S from "./BoardCommentWrite.styles";
import type { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";
import { Rate } from "antd";

export default function BoardCommentWriteUI(
  props: IBoardCommentWriteUIProps
): JSX.Element {
  return (
    <S.Wrapper>
      <S.PencilIcon src="/images/boardComment/write/pencil.png" />
      {props.isEdit === true ? <span>댓글 수정하기</span>: <span>댓글</span>}
      <S.InputWrapper>
        <S.Input
          placeholder="작성자"
          onChange={props.onChangeWriter}
          value={props.writer !== "" ? props.writer : props.el?.writer ?? ""}
          readOnly={props.isEdit}
        />
        <S.Input
          type="password"
          placeholder="비밀번호"
          onChange={props.onChangePassword}
          value={props.password}
        />
        <Rate
          onChange={props.setStar}
          defaultValue = {props.isEdit === true ? props.el?.rating : props.star}
        ></Rate>
      </S.InputWrapper>
      <S.ContentsWrapper>
        <S.Contents
          maxLength={100}
          onChange={props.onChangeContents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          value={
            props.contents !== "" ? props.contents : props.el?.contents ?? ""
          }
        />
        <S.BottomWrapper>
          <S.ContentsLength>
            {props.contents !== ""
              ? props.contents.length
              : props.el?.contents.length ?? 0}
            /100
          </S.ContentsLength>
          {props.isEdit === true ? (
            <S.Button onClick={props.onClickUpdate}>수정하기</S.Button>
          ) : (
            <S.Button onClick={props.onClickWrite}>등록하기</S.Button>
          )}
        </S.BottomWrapper>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}
