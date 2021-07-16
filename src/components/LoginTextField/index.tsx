import { InputHTMLAttributes, ReactNode, useState } from 'react';

import * as S from './styles';

export type TextFieldProps = {
  onInputChange?: (value: string) => void;
  title: string;
  icon: ReactNode;
  focus?: boolean;
  name: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const LoginTextField = ({
  icon,
  name,
  disabled = false,
  error,
  onInputChange,
  ...props
}: Omit<TextFieldProps, 'focus'>) => {
  const [state, setstate] = useState<
    Pick<TextFieldProps, 'focus' | 'disabled' | 'value'>
  >({
    focus: false,
    disabled: false,
    value: ''
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setstate({ ...state, value: newValue });

    !!onInputChange && onInputChange(newValue);
  };

  const addcl = () => setstate({ ...state, focus: true });

  const remcl = () => {
    if (state.value === '') setstate({ ...state, focus: false });
  };

  const { value, focus } = state;

  return (
    <>
      <S.InputWrapper focus={value ? true : focus}>
        <S.InputAddonWrapper>
          <S.Icon focus={value ? true : focus}>{icon}</S.Icon>
        </S.InputAddonWrapper>
        <S.FieldWrapper>
          <S.Title focus={value ? true : focus}>{props.title}</S.Title>
          <S.Input
            name={name}
            type="text"
            value={value}
            disabled={disabled}
            onChange={onChange}
            onBlur={remcl}
            onFocus={addcl}
            {...props}
          />
        </S.FieldWrapper>
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </>
  );
};

export default LoginTextField;
