import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function Home() {
  return (
<Box sx={{textAlign:"center",marginY:"20px"}}>
  <Typography variant='h4' textAlign="center">
      The best pizza.
      <Typography variant='h4' sx={{color:"#eab308"}}>
  Straight out of the oven, straight to you.</Typography> 
  </Typography>
  <Button variant='contained' sx={{background:"#facc15",borderRadius:"20px",color:"white",padding:"10px 20px",marginY:"20px",}}>
  Continue ordering, fere
  </Button>
</Box>
  )
}
export default Home
