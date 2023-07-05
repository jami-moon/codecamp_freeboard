import * as S from './BoardWrite.styles';

export default function BoardWriteUI(props) {
	const { isEdit, data } = props;
	const { writerError, passwordError, titleError, contentsError, onChangeWriter, onChangePassword, onChangeTitle, onChangeContents, isAllFilled } = props;
	const { onClickSubmit, onClickUpdate, onClickMoveToBack } = props;

	return (
		<S.Wrapper>
			{isEdit ? <S.Title>게시글 수정</S.Title> : <S.Title>게시글 등록</S.Title>}
			<S.WriterWrapper>
				<S.InputWrapper>
					<S.Label>작성자</S.Label>
					<S.Writer type='text' placeholder='이름을 적어주세요.' onChange={onChangeWriter} defaultValue={data?.fetchBoard.writer} disabled={isEdit} />
					<S.Error>{writerError}</S.Error>
				</S.InputWrapper>
				<S.InputWrapper>
					<S.Label>비밀번호</S.Label>
					<S.Password type='password' placeholder='비밀번호를 작성해주세요.' onChange={onChangePassword} />
					<S.Error>{passwordError}</S.Error>
				</S.InputWrapper>
			</S.WriterWrapper>
			<S.InputWrapper>
				<S.Label>제목</S.Label>
				<S.Subject type='text' placeholder='제목을 작성해주세요.' onChange={onChangeTitle} defaultValue={data?.fetchBoard.title} />
				<S.Error>{titleError}</S.Error>
			</S.InputWrapper>
			<S.InputWrapper>
				<S.Label>내용</S.Label>
				<S.Contents placeholder='내용을 작성해주세요.' onChange={onChangeContents} defaultValue={data?.fetchBoard.contents} />
				<S.Error>{contentsError}</S.Error>
			</S.InputWrapper>
			<S.InputWrapper>
				<S.Label>주소</S.Label>
				<S.ZipcodeWrapper>
					<S.Zipcode placeholder='07250' />
					<S.SearchButton>우편번호 검색</S.SearchButton>
				</S.ZipcodeWrapper>
				<S.Address />
				<S.Address />
			</S.InputWrapper>
			<S.InputWrapper>
				<S.Label>유튜브</S.Label>
				<S.Youtube placeholder='링크를 복사해주세요.' />
			</S.InputWrapper>
			<S.ImageWrapper>
				<S.Label>사진첨부</S.Label>
				<S.UploadButton>+</S.UploadButton>
				<S.UploadButton>+</S.UploadButton>
				<S.UploadButton>+</S.UploadButton>
			</S.ImageWrapper>
			<S.OptionWrapper>
				<S.Label>메인설정</S.Label>
				<S.RadioButton type='radio' id='youtube' name='radio-button' />
				<S.RadioLabel htmlFor='youtube'>유튜브</S.RadioLabel>
				<S.RadioButton type='radio' id='image' name='radio-button' />
				<S.RadioLabel htmlFor='image'>사진</S.RadioLabel>
			</S.OptionWrapper>
			<S.ButtonWrapper>
				<S.SubmitButton onClick={onClickMoveToBack}>뒤로가기</S.SubmitButton>
				{isEdit ? (
					<S.SubmitButton onClick={onClickUpdate}>수정하기</S.SubmitButton>
				) : (
					<S.SubmitButton onClick={onClickSubmit} style={isAllFilled ? { backgroundColor: 'yellow' } : { backgroundColor: 'gray' }}>
						등록하기
					</S.SubmitButton>
				)}
			</S.ButtonWrapper>
		</S.Wrapper>
	);
}
