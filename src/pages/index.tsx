import FormLoginPassword from 'components/FormLoginPassword';
import Auth from 'templates/Auth';

export default function Home() {
  return (
    <Auth>
      <FormLoginPassword title="Painel Administrativo" />
    </Auth>
  );
}
