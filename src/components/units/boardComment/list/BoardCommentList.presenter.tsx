import type { IBoardCommentListUIProps } from "./BoardCommentList.types";
import InfiniteScroll from "react-infinite-scroller";
import BoardCommentItem from '../item/BoardCommentItem.container';

export default function BoardCommentListUI(
  props: IBoardCommentListUIProps
): JSX.Element {
  return (
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={false}>
        {props.data?.fetchBoardComments.map((el) => (
          <BoardCommentItem key={el._id} el={el} />
        )) ?? <></>}
      </InfiniteScroll>
  );
}
