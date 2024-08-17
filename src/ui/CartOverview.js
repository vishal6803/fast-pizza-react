import { Box, Button, Typography } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import React from 'react'

function CartOverview() {
  return (
  <Box 
  sx={{position:"fixed",bottom:"0",left:"0",display:"flex",background:"black",color:"white",width:"98%",alignItems:"center",padding:"20px",justifyContent:"space-between"}}
  >
   <Typography>
    MY WEBSITE
   </Typography>
   <Button sx={{marginRight:"10px"}}>GO TO CART  <ArrowRightAltIcon /></Button>
  </Box>
  )
}

export default CartOverview
