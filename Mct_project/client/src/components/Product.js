import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Product = () => {

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "90vh" }}>
      <Box sx={{ width: "90%", height: "80%" ,border: "1px solid red" }}>
        <Box sx={{width: "100%", height:"10%", background:"#90EE90", display:"flex", justifyContent:"center", alignItems:"center" }}>
          <Typography variant='h5' >
            Category
          </Typography>
        </Box>
        <Box sx={{width: "100%", height:"90%", display:"flex", }}>
          <Box sx={{width: "30%", height:"100%", display:'flex', justifyContent: "center", alignItems:"center"}}>
            left
          </Box>
          <Box sx={{width: "70%", height:"100%", display:'flex', justifyContent: "center", alignItems:"center"}}>
           right
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Product;