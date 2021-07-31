import styled from 'styled-components';
import media from 'styles/media';

import { TextFieldProps } from '.';

type InputProps = Pick<TextFieldProps, 'focus'>;

export const InputWrapper = styled.div<InputProps>`
  position: relative;
  display: grid;
  grid-template-columns: 7% 93%;
  margin: 25px 0;
  padding: 5px 0;
  border-bottom: 2px solid var(--color-1);

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -2px;
    width: 0%;
    height: 2px;
    background-color: var(--color-13);
    transition: 0.4s;
  }

  &:before {
    right: 50%;
  }

  &:after {
    left: 50%;
  }

  ${props =>
    props.focus === true &&
    `
    &:before,
    &:after {
      width: 50%;
    }
  `}
`;

export const InputAddonWrapper = styled.div`
  color: var(--color-1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.i<InputProps>`
  transition: 0.3s;

  ${props =>
    props.focus === true &&
    `
    color: var(--color-13);
  `}
`;

export const FieldWrapper = styled.div`
  position: relative;
  height: 45px;
`;

export const Title = styled.h5<InputProps>`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-12);
  font-size: 1.2rem;
  transition: 0.3s;

  ${props =>
    props.focus === true &&
    `
    top: -6px;
    font-size: 1rem;
    color: var(--color-13);
    font-weight: bold;

    ${media.lessThan('md')`
      font-size: 0.8rem;
    `}

    ${media.lessThan('sm')`
      font-size: 0.8rem;
    `}
  `}

  ${media.lessThan('md')`
    font-size: 1rem;
  `}

  ${media.lessThan('sm')`
    font-size: 0.9rem;
  `}
`;

export const Input = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 0.5rem 0.5rem;
  font-size: 1.2rem;
  color: var(--color-15);
`;

export const Error = styled.div`
  text-align: left;
  color: var(--color-26);
  margin-top: -0.7rem;

  ${media.lessThan('md')`
    font-size: 0.9rem;
  `}

  ${media.lessThan('sm')`
    font-size: 0.65rem;
  `}
`;
