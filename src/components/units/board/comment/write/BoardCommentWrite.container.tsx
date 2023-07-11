import { useQuery, useMutation } from '@apollo/client';
import BoardCommentUI from './BoardCommentWrite.presenter';
import { FETCH_BOARD_COMMENTS, CREATE_BOARD_COMMENT, UPDATE_BOARD_COMMENT } from './BoardCommentWrite.queries';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function BoardComment() {
	const router = useRouter();

	const [commentWriter, setCommentWriter] = useState('');
	const [commentPassword, setCommentPassword] = useState('');
	const [commentContents, setCommentContents] = useState('');
	const [commentWriterError, setCommentWriterError] = useState('');
	const [commentRating, setCommentRating] = useState('');
	const [commentPasswordError, setCommentPasswordError] = useState('');
	const [commentContentsError, setCommentContentsError] = useState('');

	const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
	const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

	const { data } = useQuery(FETCH_BOARD_COMMENTS, {
		variables: {
			boardId: router.query.boardId,
		},
	});

	const onChangeCommentWriter = (event) => {
		setCommentWriter(event.target.value);
		if (event.target.value !== '') {
			setCommentWriterError('');
		}
	};

	const onChangeCommentPassword = (event) => {
		setCommentPassword(event.target.value);
		if (event.target.value !== '') {
			setCommentPasswordError('');
		}
	};

	const onChangeCommentContents = (event) => {
		setCommentContents(event.target.value);
		console.log(commentContents);
		if (event.target.value !== '') {
			setCommentContentsError('');
		}
	};

	const onChangeCommentRating = (event) => {
		setCommentRating(event.target.value);
		console.log(commentRating);
	};

	const onClickSubmitComment = async () => {
		if (!commentWriter) {
			setCommentWriterError('작성자를 입력해주세요.');
		}
		if (!commentPassword) {
			setCommentPasswordError('비밀번호를 입력해주세요.');
		}
		if (!commentContents) {
			setCommentContentsError('내용을 입력해주세요.');
		}
		if (commentWriter && commentPassword && commentContents) {
			try {
				const result = await createBoardComment({
					variables: {
						createBoardCommentInput: {
							writer: commentWriter,
							password: commentPassword,
							contents: commentContents,
							rating: Number(commentRating),
						},
						password: commentPassword,
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
				alert(error.message);
			}
		}
	};

	return (
		<BoardCommentUI
			data={data}
			onChangeCommentContents={onChangeCommentContents}
			onChangeCommentPassword={onChangeCommentPassword}
			onChangeCommentWriter={onChangeCommentWriter}
			onClickSubmitComment={onClickSubmitComment}
			onChangeCommentRating={onChangeCommentRating}
		/>
	);
}
