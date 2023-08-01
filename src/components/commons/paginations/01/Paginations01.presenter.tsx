import type { IPaginations01UIProps } from "./Paginations01.types";
import * as S from "./Paginations01.styles";

export default function Paginations01UI(
  props: IPaginations01UIProps
): JSX.Element {
  return (
    <>
      <button onClick={props.onClickMoveFirst}>첫 목록</button>
      <button onClick={props.onClickPrev}>이전 목록</button>
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <S.Page
              key={index + props.startPage}
              id={String(index + props.startPage)}
              isActive={props.startPage + index === props.activatedPage}
              onClick={props.onClickPage}
            >
              {index + props.startPage}
            </S.Page>
          )
      )}
      <button onClick={props.onClickNext}>다음 목록</button>
      <button onClick={props.onClickMoveLast}>끝 목록</button>
    </>
  );
}
