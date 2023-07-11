import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import BoardDetailUI from './BoardDetail.presenter';
import { FETCH_BOARD } from './BoardDetail.queries';
import { IQuery, IQueryFetchBoardArgs } from '../../../../commons/types/generated/types';

export default function BoardDetail() {
	const router = useRouter();
	if(!router || typeof router.query.boardId !== "string") return <></>

	const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
		variables: { boardId: router.query.boardId },
	});

	const onClickMoveToEdit = async () => {
		router.push(`/boards/${router.query.boardId}/edit`);
	};

	const onClickMoveToList = async () => {
		router.push(`/boards/`);
	};

	return <BoardDetailUI data={data} onClickMoveToEdit={onClickMoveToEdit} onClickMoveToList={onClickMoveToList} />;
}
