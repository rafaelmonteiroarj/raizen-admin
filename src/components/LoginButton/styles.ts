import styled from 'styled-components';

export const Wrapper = styled.button`
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  outline: none;
  border: none;
  background-color: var(--color-13);
  background-size: 200%;
  font-size: 1.2rem;
  color: var(--color);
  text-transform: uppercase;
  margin: 1rem 0;
  cursor: pointer;
  transition: 0.5s;

  &:disabled {
    opacity: 0.65;
  }
`;
