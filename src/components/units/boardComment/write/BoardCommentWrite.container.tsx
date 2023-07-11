import { useMutation } from '@apollo/client';
import { CREATE_BOARD_COMMENT } from './BoardCommentWrite.queries';
import { FETCH_BOARD_COMMENTS } from '../list/BoardCommentList.queries';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ChangeEvent } from 'react';
import BoardCommentWriteUI from './BoardCommentWrite.presenter';
import { IMutation, IMutationCreateBoardCommentArgs } from '../../../../commons/types/generated/types';
import { log } from 'console';

export default function BoardCommentWrite() {
	const router = useRouter();
	const [writer, setWriter] = useState('');
	const [password, setPassword] = useState('');
	const [contents, setContents] = useState('');

	const [createBoardComment] = useMutation<Pick<IMutation, 'createBoardComment'>, IMutationCreateBoardCommentArgs>(
		CREATE_BOARD_COMMENT
	);

	const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
		setWriter(event.target.value);
	};

	const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};
	4;
	const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setContents(event.target.value);
	};

	const onClickWrite = async () => {
		try {
			if (typeof router.query.boardId !== 'string') {
				alert('시스템에 문제가 있습니다.');
				return;
			}

			await createBoardComment({
				variables: {
					createBoardCommentInput: {
						writer,
						password,
						contents,
						rating: 0,
					},
					boardId: router.query.boardId,
				},
				refetchQueries: [
					{
						query: FETCH_BOARD_COMMENTS,
						variables: { boardId: router.query.boardId },
					},
				],
			});

		} catch (error) {
			if (error instanceof Error) alert(error.message);
		}
	};

	return (
		<BoardCommentWriteUI
			onChangeWriter={onChangeWriter}
			onChangePassword={onChangePassword}
			onChangeContents={onChangeContents}
			onClickWrite={onClickWrite}
			contents={contents}
		/>
	);
}
