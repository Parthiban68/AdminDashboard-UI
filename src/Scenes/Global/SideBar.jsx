import React from 'react'
import { useState } from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
// import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'



const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard")
  return (
   <Box sx={{
    "&.pro-sidebar.inner":{
    background: `${colors.primary[400]} !important`
   },
   "&.pro-icon-wrapper":{
    backgroundColor: "transparent !important"
   },
   "&.pro-inner-item":{
    padding:"5px 35px 5px 20px !important"
   },
   "&.pro-inner-item:hover":{
    color: "#868dfb !important"
   },
   "&.pro-menu-item.active":{
    color:"#6870fa !important"
   }
   }}>
    <Sidebar>
      <Menu>
        <MenuItem>
        </MenuItem>
      </Menu>
    </Sidebar>
   </Box>
  )
}

export default SideBar