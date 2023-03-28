import React from 'react'
import Header from '../components/Header';

import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Jewelery = ({data}) => {

  return (
    <div>
      <Header />
      {
        data.slice(3,4).map((ele, idx) => {
          return (
            <Box key={idx} sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "90vh" }}>
              <Box sx={{ width: "90%", height: "80%", boxShadow:"0 0 8px 2px #888" }}>
                <Box sx={{ width: "100%", height: "10%", background: "#90EE90", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Typography variant='h5' >
                    {ele.category} category
                  </Typography>
                </Box>
                <Box sx={{ width: "100%", height: "90%", display: "flex", }}>
                  <Box sx={{ width: "30%", height: "100%", display: 'flex', justifyContent: "center", alignItems: "center" }}>
                    <img src={ele.image} alt="Loading..." height="300px" width="300px"/>
                  </Box>
                  <Box sx={{ width: "70%", height: "100%", display:"flex", flexDirection:"column", justifyContent: "space-evenly"}}>
                    <Box>
                      <Typography variant='h5'>Product Name</Typography>
                      <Typography>{ele.title}</Typography>
                    </Box>
                    <Box>
                      <Typography variant='h5'>Product Price</Typography>
                      <Typography>$ {ele.price}</Typography>
                    </Box>
                    <Box>
                      <Typography variant='h5'>Product Description</Typography>
                      <Typography>{ele.description}</Typography>
                    </Box>
                    <Box>
                      <Typography variant='h5'>Product Rating</Typography>
                      <Typography>{ele.rating.rate}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          )
        })
      }
    </div>
  )
}

export default Jewelery;