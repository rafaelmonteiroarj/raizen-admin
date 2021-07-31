import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Circle = styled.div`
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  margin: 0.1rem;
  background-color: var(--background-2);
  animation: scale 0.5s linear 0s infinite alternate;

  &.one {
    animation-delay: 0s;
  }

  &.two {
    animation-delay: 0.2s;
  }

  &.three {
    animation-delay: 0.4s;
  }
`;
