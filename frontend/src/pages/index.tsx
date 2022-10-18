import type { NextPage } from 'next'
import Link from 'next/link'
import { Box } from '@mui/system'

const Home: NextPage = () => {

  return (
    <Box>  
    <h1>
        Home
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

export default Home
