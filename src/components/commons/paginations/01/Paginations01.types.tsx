import type { MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";

export interface IPaginations01Props {
  count?: number;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}

export interface IPaginations01UIProps {
  lastPage: number;
  startPage: number;
  activatedPage: number;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrev: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickNext: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveFirst: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveLast: (event: MouseEvent<HTMLButtonElement>) => void;
}
