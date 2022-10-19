import Cookie from 'universal-cookie'
import { useRouter } from 'next/router';
import Layout from 'components/Layout';

const cookie = new Cookie();

const Top = () => {
  const router = useRouter();
  const logout = () => {
    cookie.remove('access_token');
    router.push('/');
  };


  return (
    <Layout title="Top page">
    <svg 
      onClick={logout}
      xmlns="http://www.w3.org/2000/svg" 
      fill="none"
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor" 
      className="w-6 mt-10 cursor-pointer h-6"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" 
      />
    </svg>
    </Layout>
  )
}

export default Top
