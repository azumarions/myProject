import type { NextPage } from 'next'
import Link from 'next/link'
import { Box } from '@mui/system'
import Cookie from 'universal-cookie'

const About: NextPage = () => {

  const cookie = new Cookie();

  const getProf = async () => {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_RESTAPI_URL}/api/profile`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${cookie.get("access_token")}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 401) {
          throw 'JWT Token not valid';
        } else if (res.ok) {
          return res.json();
        }
      });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Box>  
    <h1>
        about
    </h1>
    <div>
        <h1>
            <Link href='/signin'>
                <a>Sigin</a>
            </Link>
        </h1>
    </div>
    </Box>
  )
}

export default About
