import React from 'react'
import Header from '../components/Header';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Products = ({ data }) => {

  return (
    <div>
      <Header />
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "90vh" }}>
        <Box sx={{ width: "20%", height: "70%", display: "flex", flexDirection: "column", justifyContent: "space-evenly", background: "#000" }}>
          <Link to="/electronic" style={{ textDecoration: "none", textAlign: "center" }}>
            <Button variant="text" sx={{ color: "white" }}>Electronics</Button>
          </Link>
          <Link to="/jewelery" style={{ textDecoration: "none", textAlign: "center" }}>
            <Button variant="text" sx={{ color: "white" }}>Jewelerys</Button>
          </Link>
          <Link to="/mens" style={{ textDecoration: "none", textAlign: "center" }}>
            <Button variant="text" sx={{ color: "white" }}>Men'sClothing</Button>
          </Link>
          <Link to="/womens" style={{ textDecoration: "none", textAlign: "center" }}>
            <Button variant="text" sx={{ color: "white" }}>Women'sClothing</Button>
          </Link>
        </Box>
        <Box sx={{ border: "1px solid black", width: "65%", height: "70%", display:"flex", flexDirection:"column",}}>
          {
            data.map((ele, idx) => {
              return (
                <ul key={idx}>
                  <li>{ele.title}</li>
                </ul>
              )
            })
          }
        </Box>
      </Box>
    </div>
  )
}

export default Products;