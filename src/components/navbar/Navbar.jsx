import React, {useState} from 'react';
import './navbar.css';  
import { Typography, Stack, Button } from '@mui/material';


const Navbar = () => {

  const [menu, setMenu] = useState(false);

  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center' 
    >
        <Typography 
          variant='body' 
          color="#FFFCF6"
          fontSize='16px'
          >
          BankHotel
        </Typography>
        <Button
          className={menu ? 'button active' : 'button'}
          sx={{display: 'flex', flexDirection: 'column'}}
          onClick={() => setMenu(!menu)}
        >
          <span className={menu ? 'hamburger-span active' : 'hamburger-span'}></span>
          <span className={menu ? 'hamburger-span active' : 'hamburger-span'} ></span>
        </Button>
    </Stack>
  )
}

export default Navbar