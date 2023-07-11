import styled from '@emotion/styled';

export const createCommentWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 50px;
	width: 1200px;
`;

export const commentListWrapper = styled.ul`
	width: 1200px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: start;
	padding: 50px;

	.title {
		font-size: 40px;
		margin-bottom: 50px;
	}
`;

export const commentListItem = styled.li`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 30px;
	min-height: 30px;

	.content {
		flex-grow: 1;
	}
`
