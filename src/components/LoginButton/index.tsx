import { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  disabled?: boolean;
} & ButtonTypes;

const LoginButton = ({ children, disabled = false, ...props }: ButtonProps) => {
  return (
    <>
      <S.Wrapper disabled={disabled} {...props}>
        {children}
      </S.Wrapper>
    </>
  );
};

export default LoginButton;
