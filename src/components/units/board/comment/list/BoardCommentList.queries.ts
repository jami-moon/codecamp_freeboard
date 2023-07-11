import { gql } from '@apollo/client';

export const FETCH_BOARD_COMMENTS = gql`
	query fetchBoardComments($page: Int, $boardId: ID!) {
		fetchBoardComments(page: $page, boardId: $boardId) {
			_id
			writer
			contents
			createdAt
		}
	}
`;

export const CREATE_BOARD_COMMENT = gql`
	mutation createBoardComment($createBoardCommentInput: CreateBoardCommentInput!, $boardId: ID!) {
		createBoardComment(createBoardCommentInput: $createBoardCommentInput, boardId: $boardId) {
			_id
		}
	}
`;

export const UPDATE_BOARD_COMMENT = gql`
	mutation updateBoardComment($updateBoardCommentInput: UpdateBoardCommentInput!, $password: string, $boardCommentId: ID!) {
		updateBoardComment(updateBoardCommentInput: $updateBoardCommentInput, password: $password, boardCommentId: $boardCommentId) {
			_id
		}
	}
`;
