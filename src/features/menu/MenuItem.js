import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

function MenuItem({item}) {
  return (
<Paper sx={{display:"flex",marginX:"auto",marginY:"20px",padding:"15px"}}>
    <img src={item.imageUrl} alt='' width="100px"/>
   <Box sx={{marginLeft:"15px"}}>
    <Typography>{item.name}</Typography>
    <Typography>{item.ingredients.join(", ")}</Typography>
    <Box>
    {!item.soldOut ? <p>{item.unitPrice}</p> : <p>Sold Out !</p>}
    </Box>
   </Box>

</Paper>
  )
}

export default MenuItem
