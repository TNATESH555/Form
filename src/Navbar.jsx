import React from 'react'
import { AppBar,Toolbar, Typography } from '@mui/material'


function NavBar() {
  return (
    <AppBar position='sticky' className='navbar'>
<Toolbar>
    <Typography variant='h5' component='p'>React Authentication</Typography>
</Toolbar>
    </AppBar>
    
  )
}

export default NavBar