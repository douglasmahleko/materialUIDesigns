import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import NavBar from './components/navBar/navaBar';
import SideBar from './components/navBar/sideBar';
import ShowCarsAndAccountas from './components/CarAndAccounts/showCarsAndAccountas';
import AddCarAndAccounts from './components/CarAndAccounts/addCarAndAccounts';
import ShowCars from './components/cars/showCars';
import BasicCard from './components/constants/basicCard';
import Grid from '@mui/material/Grid';
import { useLocation } from 'react-router-dom';

function App({children}) {
  const [title, setTitle] = useState(null)
  return (
    <Grid container>
      <Box item >
        <NavBar />
        <SideBar />
      </Box>
      <Box sx={{marginLeft:"20%"}}>
        <div >
          {children}
        </div>
      </Box>
    </Grid>
  );
}

export default App;
