import * as S from './styles';

type PropsAuth = {
  children: React.ReactNode;
};

const Auth = ({ children }: PropsAuth) => {
  return (
    <>
      <S.Wave src="/img/wave-3.png" />
      <S.Wrapper>
        <S.BannerWrapper>
          <S.Banner src="img/bg.svg" />
        </S.BannerWrapper>
        <S.FormWrapper>{children}</S.FormWrapper>
      </S.Wrapper>
    </>
  );
};

export default Auth;
