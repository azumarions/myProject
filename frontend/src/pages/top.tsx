import Cookie from "universal-cookie";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Link from "next/link";

const cookie = new Cookie();

export default function MainPage() {
  const router = useRouter();
  const logout = () => {
    cookie.remove("access_token");
    router.push("/");
  };
  return (
    <Layout title="Main page">
      <div className="mb-10">
        <Link href="/profile">
          <a className="bg-indigo-500 mr-8  hover:bg-indigo-600 text-white px-4 py-12 rounded">
            Visit Blog by SSG + ISR
          </a>
        </Link>
        <Link href="/task-page">
          <a className="bg-gray-500 ml-8 hover:bg-gray-600 text-white px-4 py-12 rounded">
            Visit Task by ISR + CSR
          </a>
        </Link>
      </div>

      <svg
        onClick={logout}
        className="mt-10 cursor-pointer w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
    </Layout>
  );
}


// import Cookie from 'universal-cookie'
// import { useRouter } from 'next/router';
// import Layout from 'components/Layout';
// import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import { Container } from '@mui/material';

// const cookie = new Cookie();

// const Top = () => {
//   const router = useRouter();
//   const logout = () => {
//     cookie.remove("access_token");
//     router.push("/");
//   };

//   const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(4),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

//   return (
//     <Layout title="Top">
//    <Box sx={{ flexGrow: 1 }}>
//     <Grid container spacing={1}>
//     <Grid item sm={5} direction="row">
//     <ImageList sx={{ width: 500, height: 700 }}>
//       <ImageListItem key="Subheader" cols={2}>
//       </ImageListItem>
//       {itemData2.map((item) => (
//         <ImageListItem key={item.img}>
//           <img
//             src={`${item.img}?w=248&fit=crop&auto=format`}
//             srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//             alt={item.title}
//             loading="lazy"
//           />
//           <ImageListItemBar
//             title={item.title}
//             subtitle={item.author}
//             actionIcon={
//               <IconButton
//                 sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
//                 aria-label={`info about ${item.title}`}
//               >
//                 <InfoIcon />
//               </IconButton>
//             }
//           />
//         </ImageListItem>
//       ))}
//     </ImageList>
//     <svg
//         onClick={logout}
//         className="mt-10 cursor-pointer w-6 h-6"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//         />
//       </svg>
//       </Grid>
//       </Grid>
//     </Box>
//     </Layout>
//   )
// }

// export default Top


// const itemData2 = [
//     {
//       img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//       title: 'Breakfast',
//       author: '@bkristastucchio',
//       rows: 2,
//       cols: 2,
//       featured: true,
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//       title: 'Burger',
//       author: '@rollelflex_graphy726',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//       title: 'Camera',
//       author: '@helloimnik',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//       title: 'Coffee',
//       author: '@nolanissac',
//       cols: 2,
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//       title: 'Hats',
//       author: '@hjrc33',
//       cols: 2,
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//       title: 'Honey',
//       author: '@arwinneil',
//       rows: 2,
//       cols: 2,
//       featured: true,
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//       title: 'Basketball',
//       author: '@tjdragotta',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//       title: 'Fern',
//       author: '@katie_wasserman',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//       title: 'Mushrooms',
//       author: '@silverdalex',
//       rows: 2,
//       cols: 2,
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//       title: 'Tomato basil',
//       author: '@shelleypauls',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//       title: 'Sea star',
//       author: '@peterlaster',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//       title: 'Bike',
//       author: '@southside_customs',
//       cols: 2,
//     },
//   ];