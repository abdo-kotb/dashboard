import { useState } from 'react'
import { useSelector } from 'react-redux'

import { Box, useMediaQuery } from '@mui/material'
import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const isNotMobile = useMediaQuery('(min-width: 600px)')

  return (
    <Box display={isNotMobile ? 'flex' : 'block'} width="100%" height="100%">
      <Sidebar
        isNotMobile={isNotMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box>
        <Navbar setIsSidebarOpen={setIsSidebarOpen} />
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout
