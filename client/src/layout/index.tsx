import { useState } from 'react'
import { useSelector } from 'react-redux'

import { Box, useMediaQuery } from '@mui/material'
import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useGetUserQuery } from '../store/api'
import { AppState } from '../store'

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const isNotMobile = useMediaQuery('(min-width: 600px)')
  const { userId } = useSelector((state: AppState) => state.global)
  const { data: user } = useGetUserQuery(userId)

  return (
    <Box display={isNotMobile ? 'flex' : 'block'} width="100%" height="100%">
      <Sidebar
        user={user}
        isNotMobile={isNotMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar user={user} setIsSidebarOpen={setIsSidebarOpen} />
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout
