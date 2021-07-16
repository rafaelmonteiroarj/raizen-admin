import styled from 'styled-components';
import media from 'styled-media-query';

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
`;

export const Logo = styled.img`
  width: 300px;
`;

export const Title = styled.h2`
  font-size: 1rem;
  padding-bottom: 1rem;
  font-weight: bolder;
  text-transform: uppercase;

  ${media.lessThan('medium')`
    font-size: 1.2rem;
  `}
`;
