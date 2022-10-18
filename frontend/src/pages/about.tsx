import type { NextPage } from 'next'
import Link from 'next/link'
import { Box } from '@mui/system'

const About: NextPage = () => {

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
