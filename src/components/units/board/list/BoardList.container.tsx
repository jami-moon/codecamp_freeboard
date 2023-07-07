import { useQuery } from '@apollo/client';
import BoardListUI from './BoardList.presenter';
import { FETCH_BOARDS } from './BoardList.queries';
import { useRouter } from 'next/router';

export default function BoardList() {
	const router = useRouter();
	const { data } = useQuery(FETCH_BOARDS);

	const onClickMoveToDetail = async (e) => {
		router.push(`/boards/${e.target.id}`);
	};

	const onClickMoveToNew = async (e) => {
		router.push(`/boards/new`);
	};

	return <BoardListUI data={data} onClickMoveToDetail={onClickMoveToDetail} onClickMoveToNew={onClickMoveToNew} />;
}
