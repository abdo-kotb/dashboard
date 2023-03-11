import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import {
  Box,
  Divider,
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
import User from '../types/User'

interface IProps {
  isNotMobile: boolean
  drawerWidth: string
  isSidebarOpen: boolean
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
  user: User | undefined
}

const Sidebar = ({
  drawerWidth,
  isNotMobile,
  isSidebarOpen,
  setIsSidebarOpen,
  user,
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
          <Box width="100%" height="100%">
            <Box m="1.5rem 1rem 2rem 2rem">
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
            <List
              sx={{
                height: 'calc(100% - 180px)',
                overflow: 'auto',
              }}
            >
              {navItems.map(({ text, icon }) => {
                if (!icon)
                  return (
                    <Typography key={text} sx={{ m: '2.25rem 0 1rem 3rem' }}>
                      {text}
                    </Typography>
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
          <Box
            position="absolute"
            pb="2rem"
            width="100%"
            bottom={0}
            bgcolor={theme.palette.background.alt}
          >
            {user && (
              <>
                <Divider />
                <FlexBetween
                  textTransform="none"
                  gap="1rem"
                  m="1.5rem 2rem 0 3rem"
                >
                  <Box
                    component="img"
                    alt="profile"
                    src={profileImage}
                    height="40px"
                    width="40px"
                    borderRadius="50%"
                    sx={{ objectFit: 'cover' }}
                  />
                  <Box textAlign="left">
                    <Typography
                      fontWeight="bold"
                      fontSize="0.9rem"
                      color={theme.palette.secondary[100]}
                    >
                      {user.name}
                    </Typography>
                    <Typography
                      fontSize="0.8rem"
                      color={theme.palette.secondary[200]}
                    >
                      {user.occupation}
                    </Typography>
                  </Box>
                  <SettingsOutlined
                    sx={{
                      color: theme.palette.secondary[300],
                      fontSize: '25px',
                    }}
                  />
                </FlexBetween>
              </>
            )}
          </Box>
        </Drawer>
      )}
    </Box>
  )
}

export default Sidebar
