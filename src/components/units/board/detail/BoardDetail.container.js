import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import BoardDetailUI from './BoardDetail.presenter';
import { FETCH_BOARD } from './BoardDetail.queries';

export default function BoardDetail() {
	const router = useRouter();

	const { data } = useQuery(FETCH_BOARD, {
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
