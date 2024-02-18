import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/navaBar';
import SideBar from './components/navBar/sideBar';
import ShowCarsAndAccountas from './components/CarAndAccounts/showCarsAndAccountas';
import AddCarAndAccounts from './components/CarAndAccounts/addCarAndAccounts';
import ShowCars from './components/cars/showCars';
import AddCar from './components/cars/addCar';
import ShowDriverAndAccounts from "./components/DriverAndAccountant/showDriverAndAccounts"
import ShowEmpsAndCar from "./components/empsAndCars/showEmpsAndCar"
import ShowCarAndDriver from "./components/CarAndDriver/showCarAndDriver"
import ShowDriverAndHR from "./components/DriverAndHR/showDriverAndHR"
import ShowUsers from "./components/users/showUsers"
import AddEmpsAndCars from "./components/empsAndCars/addEmpsAndCar"
import AddDriverAndHR from "./components/DriverAndHR/addDriversAndHR"
import AddCarAndDriver from "./components/CarAndDriver/addcarAndDriver"
import AddDriverAndAccountant from "./components/DriverAndAccountant/addDriverAndAccountant"
import AddUser from "./components/users/addUser"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
            <App>
              <Box>
                <Routes>
                <Route path="/addCar" element = {<AddCar />} />
                <Route path="/addCarAndAccounts" element = {<AddCarAndAccounts />} />
                <Route path="/showCars" element = {<ShowCars />} />
                <Route path="/showCarsAndAccountas" element = {<ShowCarsAndAccountas />} />
                <Route path="/addDriverAndAccountant" element = {<AddDriverAndAccountant />} />
                <Route path="/addUser" element = {<AddUser />} />
                <Route path="/addCarAndDriver" element = {<AddCarAndDriver />} />
                <Route path="/addEmpsAndCars" element = {<AddEmpsAndCars />} />
                <Route path="/addDriverAndHR" element = {<AddDriverAndHR />} />
                <Route path="/showDriverAndAccounts" element = {<ShowDriverAndAccounts  />} />
                <Route path="/showEmpsAndCar" element = {<ShowEmpsAndCar />} />
                <Route path="/showCarAndDriver" element = {<ShowCarAndDriver />} />
                <Route path="/showDriverAndHR" element = {<ShowDriverAndHR />} /> 
                <Route path="/showUsers" element = {<ShowUsers />} /> 
                </Routes>
              </Box>
            </App>
          </BrowserRouter>
  </React.StrictMode>
);

