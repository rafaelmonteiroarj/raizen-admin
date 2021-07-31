import { useFormik } from 'formik';
import { useState } from 'react';
import { User, LockAlt } from '@styled-icons/boxicons-solid';
import Link from 'next/link';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';

import { signInValidate } from '../../utils/validations';
import LoginTextField from 'components/LoginTextField';
import LoginButton from 'components/LoginButton';
import Spinner from 'components/Spinner';

import * as S from './styles';

type FormProps = {
  title: string;
};

const FormLoginPassword = ({ title }: FormProps) => {
  const [formError, setFormError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const routes = useRouter();
  const { push, query } = routes;

  const { handleSubmit, errors, touched, setFieldValue } = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: signInValidate,
    onSubmit: async values => {
      setFormError('');
      setLoading(true);

      const result = await signIn('credentials', {
        ...values,
        redirect: false,
        callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
      });

      await setTimeout(() => 2000);

      if (result?.url) return push('/home');

      setLoading(false);

      /** verifying if exist error */
      if (result?.error) setFormError(result.error);
    }
  });

  const handleInput = (field: string, value: string) => {
    setFieldValue(`${[field]}`, value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <S.Logo src="/img/icon-yu.png"></S.Logo>
        <S.Title>{title}</S.Title>
        {!!formError && <S.Error>{formError}</S.Error>}
        <LoginTextField
          type="text"
          title="informe um e-mail"
          name="email"
          icon={<User size={18} />}
          error={errors.email && touched.email ? errors.email : ''}
          onInputChange={v => handleInput('email', v)}
        />
        <LoginTextField
          type="password"
          title="informe uma senha"
          name="password"
          icon={<LockAlt size={18} />}
          error={errors.password && touched.password ? errors.password : ''}
          disabled={loading}
          onInputChange={v => handleInput('password', v)}
        />
        <Link href="/forgot-password">
          <S.ForgotPassword>Esqueceu a senha?</S.ForgotPassword>
        </Link>
        <LoginButton type="submit">
          {loading ? <Spinner /> : 'Login'}
        </LoginButton>
      </form>
    </>
  );
};

export default FormLoginPassword;
