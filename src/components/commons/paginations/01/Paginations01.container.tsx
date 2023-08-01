import { useState } from "react";
import type { MouseEvent } from "react";
import Paginations01UI from "./Paginations01.presenter";
import type { IPaginations01Props } from "./Paginations01.types";

export default function Paginations01(props: IPaginations01Props): JSX.Element {
  const [startPage, setStartPage] = useState(1);
  const [activatedPage, setActivatedPage] = useState(1);
  const lastPage = Math.ceil((props.count ?? 10) / 10);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    const activatedPage = Number(event.currentTarget.id);
    setActivatedPage(activatedPage);
    void props.refetch({ page: activatedPage });
  };

  const onClickPrev = (): void => {
    if (startPage === 1) {
      alert(`첫 목록 입니다.`);
      return;
    }
    setStartPage(startPage - 10);
    setActivatedPage(startPage - 10);
    void props.refetch({ page: startPage - 10 });
  };

  const onClickNext = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      setActivatedPage(startPage + 10);
      void props.refetch({ page: startPage + 10 });
    } else {
      alert(`마지막 목록입니다.`)
    }
  };

  const onClickMoveFirst = (): void => {
    if (startPage === 1) {
      alert(`이미 첫 목록 입니다.`);
      return;
    }

    const activatedPage = 1;
    setStartPage(activatedPage);
    setActivatedPage(activatedPage);
    void props.refetch({ page: 1 });
  };

  const onClickMoveLast = (): void => {
    const activatedPage = Math.floor(lastPage / 10) * 10 + 1;
    const startPage = activatedPage;

    setStartPage(startPage);
    setActivatedPage(activatedPage);
    void props.refetch({ page: activatedPage });
  };

  return (
    <div>
      <Paginations01UI
        startPage={startPage}
        lastPage={lastPage}
        activatedPage={activatedPage}
        onClickPage={onClickPage}
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
        onClickMoveFirst={onClickMoveFirst}
        onClickMoveLast={onClickMoveLast}
      />
    </div>
  );
}
