import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { NavBarLists } from '../constants/navBarLists';
import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material"
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Tooltip from '@mui/material/Tooltip';
import { Notifications } from "@mui/icons-material";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import { makeStyles } from '@material-ui/core';
import { useNavigate, useHistory, useLocation } from "react-router-dom";
const drawerWidth = 240
const useStyles = makeStyles((theme) => {
    return{
        page:{
            width:"100%",
            background:"#f9f9f9",
            padding: theme.spacing(3)
        },
        drawer:{
            width:drawerWidth
        },
        drawerPaper:{
            width:drawerWidth
        },
        root:{
            display:"flex"
        },
        active:{
            backgroundColor:"#f4f4f4",
            color:"#862020"
        },
        title:{
            padding: theme.spacing(2)
        },
        appBar:{
            width : `calc(100% - ${drawerWidth}px)`
        },
        toolbar:theme.mixins.toolbar,
        date:{
            flexGrow:1
        },
        avatar:{
            marginLeft:10
        }
    }
})

const UserBox = styled(Box)(({theme}) => ({
  display:"flex",
  gap:"10px",
  alignItems:'center'
}))
const Icons = styled(Box)(({theme}) => ({
  display:"flex",
  gap:"20px",
  alignItems:'center'
}))
export default function NavBar() {
  const location = useLocation()
  const navigate = useNavigate()
    const parsedTitle = location.pathname.replace(/\W/g, ' ')
  const [open, setOpen] = useState(false)
  const classes = useStyles()
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Icons>
                    <Tooltip title="Notification">
                        <Badge badgeContent={4} color="error">
                            <Notifications  />
                        </Badge>
                    </Tooltip>
                    
                    <UserBox onClick={(e) => setOpen(true)}>
                        <Avatar sx={{width:30, height:30}} src={require("./dougy.jpg")} />
                        
                    </UserBox>
            </Icons>
          </Typography>
          <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                >
                  <Typography p={3} color='#9c9797' variant="span">Douglas</Typography>
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {NavBarLists.slice(0, 7).map((item) => (
              <Button key={item.id} sx={{ color: '#fff' }} onClick={() => navigate(item.route)} >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}