
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// components/withAuth.tsx


const withAuth = (WrappedComponent: React.FC) => {
  const AuthHOC: React.FC = (props) => {
    const router = useRouter();

    useEffect(() => {
      const isAuthenticated = sessionStorage.getItem('authenticated');
      if (!isAuthenticated) {
        router.push('/login');
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return AuthHOC;
};

export default withAuth;
