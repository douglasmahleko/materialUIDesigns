import React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { navbarStyles } from './styles';
import ListItemButton from '@mui/material/ListItemButton';
import { useNavigate, useHistory, useLocation } from "react-router-dom";
import { NavBarLists } from '../constants/navBarLists';
import { purple } from '@mui/material/colors';
import { useState } from "react";

function SideBar(){
    const navigate = useNavigate()
    const location = useLocation()
    const parsedTitle = location.pathname.replace(/\W/g, ' ')
    return(
        <Drawer
        sx={navbarStyles.drawer}
        variant="permanent"
        anchor="left"
      >
        <Divider />
        <List>
          {NavBarLists.slice(7).map((text, index) => (
            <ListItem key={text.id} >
              <ListItemButton onClick={() => navigate(text.route)} >
                <ListItemIcon sx={navbarStyles.icons}>
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.label} sx={navbarStyles.text } />
                </ListItemButton>
            </ListItem>
          ))}
        </List>
        
      </Drawer>
    )
}export default SideBar