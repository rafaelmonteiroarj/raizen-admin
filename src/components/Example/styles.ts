import styled from 'styled-components';

export type StyleColors = {
  backgroundColor: string;
  color: string;
};

export const Wrapper = styled.main<StyleColors>`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
  opacity: 0.4;
  transition: opacity 0.15s ease-in-out;

  :hover {
    opacity: 1;
  }
`;
