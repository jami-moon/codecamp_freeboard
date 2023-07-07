import * as S from './BoardComment.styles';
import { getDate } from '../../../../commons/libraries/utils';

export default function BoardCommentUI(props) {
	const { onChangeCommentContents, onChangeCommentPassword, onChangeCommentWriter, onChangeCommentRating, onClickSubmitComment } = props;
	const { data } = props;

	return (
		<div>
			<S.commentListWrapper>
				<p className="title">댓글</p>
				{data?.fetchBoardComments.map((el, index) => (
					<S.commentListItem key={el._id}>
						<div>작성자 : {el.contents}</div>
						<div className='content'>내용: {el.contents}</div>
						<div>작성날짜: {getDate(el.createdAt)}</div>
					</S.commentListItem>
				))}
			</S.commentListWrapper>
			<S.createCommentWrapper>
				<div>
					<span>작성자</span>
					<input type='text' name='' id='' onChange={onChangeCommentWriter} />
				</div>
				<div>
					<span>비밀번호</span>
					<input type='text' name='' id='' onChange={onChangeCommentPassword} />
				</div>
				<div>
					<span>내용</span>
					<input type='text' name='' id='' onChange={onChangeCommentContents} />
				</div>
				<div>
					<span>rating</span>
					<input type='text' name='' id='' onChange={onChangeCommentRating} />
				</div>
				<button onClick={onClickSubmitComment}>댓글 추가하기</button>
			</S.createCommentWrapper>
		</div>
	);
}
