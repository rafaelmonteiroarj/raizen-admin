import styled from 'styled-components';

import media from 'styles/media';

export const ForgotPassword = styled.div`
  text-align: right;
  color: var(--color-12);
  transition: 0.3s;
  cursor: pointer;
  margin-top: -1rem;
  padding-bottom: 1rem;

  &:hover {
    color: var(--color-13);
  }

  ${media.lessThan('md')`
    font-size: 0.9rem;
  `}

  ${media.lessThan('sm')`
    font-size: 0.8rem;
  `}
`;

export const Logo = styled.img`
  width: 300px;
`;

export const Title = styled.h2`
  font-size: 1rem;
  padding-bottom: 1rem;
  font-weight: bolder;
  text-transform: uppercase;

  ${media.lessThan('md')`
    font-size: 1rem;
  `}

  ${media.lessThan('sm')`
    font-size: 0.8rem;
  `}
`;
