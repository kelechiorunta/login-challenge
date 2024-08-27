// pages/protected.js
import { getSession } from 'next-auth/react';

export default function ProtectedPage() {
  return <h1>This is a protected page</h1>;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
