import { Tooltip } from "antd";
import * as S from "./BoardDetail.styles";
import type { IBoardDetailUIProps } from "./BoardDetail.types";

export default function BoardDetailUI(props: IBoardDetailUIProps): JSX.Element {
  console.log(props.data);

  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.Info>
              <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
              <S.CreatedAt>{props.data?.fetchBoard?.createdAt}</S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
          <S.IconWrapper>
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard?.youtubeUrl ?? ""}`}
            >
              <S.LinkIcon>
                <img src="/images/board/detail/link.png" alt="" />
              </S.LinkIcon>
            </Tooltip>
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard.boardAddress?.address ?? ""} ${
                props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
              }`}
            >
              <S.LocationIcon src="/images/board/detail/location.png" />
            </Tooltip>
          </S.IconWrapper>
        </S.Header>
        <S.Body>
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
          <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
          {props.data?.fetchBoard.youtubeUrl !== "" && (
            <S.Youtube
              url={props.data?.fetchBoard.youtubeUrl ?? ""}
              width="486px"
              height="240px"
            />
          )}
        </S.Body>
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickMoveToList}>목록으로</S.Button>
        <S.Button onClick={props.onClickMoveToEdit}>수정하기</S.Button>
        <S.Button>삭제하기</S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
