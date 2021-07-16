import styled from 'styled-components';
import media from 'styled-media-query';

export const Wave = styled.img`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100%;
  z-index: -1;

  ${media.lessThan('large')`
    display: none;
  `}
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  ${media.lessThan('large')`
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

  ${media.lessThan('large')`
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

    ${media.lessThan('medium')`
      width: 400px;
    `}

    ${media.lessThan('small')`
      width: 250px;
    `}
  }
`;
