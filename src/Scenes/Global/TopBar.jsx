import { Box, IconButton, InputBase, useTheme } from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext, tokens } from '../../theme'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinesIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import SearchIcon from '@mui/icons-material/Search'
import React from 'react'


const TopBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext)
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
        <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
            <InputBase sx={{ml:2, flex:1}} placeholder='Search'/>
            <IconButton type='button' sx={{p:1}}>
                <SearchIcon/>
            </IconButton>
        </Box>
    </Box>
  )
}

export default TopBar