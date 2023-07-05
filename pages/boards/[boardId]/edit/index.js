import BoardWrite from '../../../../src/components/units/board/write/BoardWrite.container';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { gql } from '@apollo/client';

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function BoardsEditPage() {
	const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, { 
    variables: { boardId: router.query.boardId } 
  });

  console.log(data);

	return <BoardWrite isEdit={true} data={data} />;
}
