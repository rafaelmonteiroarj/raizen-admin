import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/client';

import FormLoginPassword from 'components/FormLoginPassword';
import Auth from 'templates/Auth';

export default function Home() {
  return (
    <Auth>
      <FormLoginPassword title="Painel Administrativo" />
    </Auth>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: '/home'
      },
      props: {}
    };
  }

  return { props: {} };
}
