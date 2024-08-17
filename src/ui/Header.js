import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';

export default function Header() {
  return (
    <Box>
      <AppBar position="static" sx={{background:"#facc15",width:"100vw"}}>
        <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
          <Typography variant="h6" component="div">
            Fast Pizz
          </Typography>
          <TextField id="outlined-basic" placeholder='search' variant='standard' type='search' />
          <Typography variant='body2' >User Name</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
