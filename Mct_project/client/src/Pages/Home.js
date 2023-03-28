import React from 'react';
import Header from '../components/Header';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Header />
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "90vh", background:"#201415" }}>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width:"70%", }}>
          <Box >
            <Typography component="div" variant="h4" color="white">
              Welcome back to
            </Typography>
          </Box>
          <Box>
            <Typography component="div" variant="h7" color="white" m="1rem 0px">
              Lorem ipsum dolor sit amet. Et totam sint sed obcaecati amet qui soluta provident. Et illo nostrum quo autem obcaecati sit quaerat culpa! Non consequuntur accusamus et omnis deserunt ad autem alias qui incidunt dolorem est nesciunt voluptas. Sed incidunt fugit rem voluptatum nulla est commodi nulla est commodi adipisci accusamus et omnis deserunt adipisci accusamus et omnis deserunt ad autem alias qui incidunt dolorem est nesciunt voluptas. Sed incidunt fugit rem voluptatum nulla est commodi adipisci.
            </Typography>
          </Box>
        </Box>
        <Box>
          <Link to="/product" style={{textDecoration:"none"}}> 
            <Button sx={{ borderColor: "blue", color: "blue" }} variant="outlined">Explore More !!!</Button>
          </Link>
        </Box>
      </Box>
    </div >
  )
}

export default Home;