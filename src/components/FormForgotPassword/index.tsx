import { useFormik } from 'formik';
import { useState } from 'react';
import { User } from '@styled-icons/boxicons-solid';
import Link from 'next/link';

import { signForgoutPasswordValidate } from './../../utils/validations';
import LoginTextField from 'components/LoginTextField';
import LoginButton from 'components/LoginButton';
import Spinner from 'components/Spinner';

import * as S from './styles';

type FormProps = {
  title: string;
};

const FormForgotPassword = ({ title }: FormProps) => {
  const [formError, setFormError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const { handleSubmit, errors, touched, setFieldValue } = useFormik({
    initialValues: { email: '' },
    validationSchema: signForgoutPasswordValidate,
    onSubmit: v => {
      setFormError('');
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 3000);

      console.log('values', v);
    }
  });

  const handleInput = (field: string, value: string) => {
    setFieldValue(`${[field]}`, value);
  };

  return (
    <>
      {!!formError && <div>Error Tratar informação ...</div>}
      <form onSubmit={handleSubmit}>
        <S.Logo src="/img/icon-yu.png"></S.Logo>
        <S.Title>{title}</S.Title>
        <LoginTextField
          type="text"
          title="informe um e-mail"
          name="email"
          icon={<User size={18} />}
          error={errors.email && touched.email ? errors.email : ''}
          onInputChange={v => handleInput('email', v)}
        />
        <Link href="/">
          <S.ForgotPassword>Efetuar Login?</S.ForgotPassword>
        </Link>
        <LoginButton type="submit">
          {loading ? <Spinner /> : 'Login'}
        </LoginButton>
      </form>
    </>
  );
};

export default FormForgotPassword;
