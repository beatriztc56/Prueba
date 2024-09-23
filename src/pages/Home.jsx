import {  Link, Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import { Box, Button } from '@mui/material'

const Home = () => {

    return (
    <>
      <Header />
      <Box sx={{ marginTop: '80px', textAlign: 'center' }}>
        <Button component={Link} to="/series" variant="contained" sx={{ marginRight: 2 }}>
          Series
        </Button>
        <Button component={Link} to="/movies" variant="contained">
          Movies
        </Button>
      </Box>
        <Outlet />
      <Footer />
    </>
    )
  }
  
  export default Home