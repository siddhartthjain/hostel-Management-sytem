import React from 'react'
import Container from '@mui/material/Container'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const Navbar = () => {
  return (
    <>
    
        <AppBar sx={{mr:1, ml:1}} position="fixed" color="inherit">
          <Toolbar>
            <Typography variant="h6">
              Hostel Management 
            </Typography>
          </Toolbar>
        </AppBar>
      
    
    </>

  )
}

export default Navbar