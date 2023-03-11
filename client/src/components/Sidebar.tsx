import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material'
import FlexBetween from './FlexBetween'
import navItems from './navItems'

import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
} from '@mui/icons-material'

import profileImage from '../assets/profile.jpeg'

interface IProps {
  isNotMobile: boolean
  drawerWidth: string
  isSidebarOpen: boolean
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
}

const Sidebar = ({
  drawerWidth,
  isNotMobile,
  isSidebarOpen,
  setIsSidebarOpen,
}: IProps) => {
  const { pathname } = useLocation()
  const [active, setActive] = useState('')
  const navigate = useNavigate()
  const theme = useTheme()

  useEffect(() => {
    setActive(pathname.substring(1))
  }, [pathname])

  return (
    <Box>
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            '& .MuiDrawer-paper': {
              color: theme.palette.secondary[200],
              bgcolor: theme.palette.background.alt,
              boxSizing: 'border-box',
              borderWidth: isNotMobile ? 0 : '2px',
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    DASHBOARD
                  </Typography>
                </Box>
                {!isNotMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(state => !state)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon)
                  return (
                    <Typography key={text} sx={{ m: '2.25rem 0 1rem 3rem' }} />
                  )

                const lcText = text.toLowerCase()

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      sx={{
                        bgcolor:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : 'transparent',
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                      onClick={() => {
                        navigate(`/${lcText}`)
                        setActive(lcText)
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: '2rem',
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: 'auto' }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                )
              })}
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  )
}

export default Sidebar
