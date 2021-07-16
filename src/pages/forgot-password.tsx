import FormForgotPassword from 'components/FormForgotPassword';
import Auth from 'templates/Auth';

export default function ForgotPassword() {
  return (
    <Auth>
      <FormForgotPassword title="Recuperação de Senha" />
    </Auth>
  );
}
