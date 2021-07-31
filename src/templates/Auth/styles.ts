import styled from 'styled-components';
import media from 'styles/media';

export const Wave = styled.img`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100%;
  z-index: -1;

  ${media.lessThan(1270)`
    display: none;
  `}
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  ${media.lessThan('xl')`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
  `}
`;

export const BannerWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Banner = styled.img`
  width: 500px;

  ${media.lessThan('xl')`
    display: none;
  `}
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  form {
    width: 500px;

    ${media.lessThan('md')`
      width: 400px;
    `}

    ${media.lessThan('sm')`
      width: 250px;
    `}
  }
`;
