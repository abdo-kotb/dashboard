import FlexBetween from './FlexBetween'

import { Box, Typography, useTheme } from '@mui/material'

interface IProps {
  title: string
  value: number | undefined
  increase: string
  description: string
  icon: JSX.Element
}

const StatBox = ({ title, value, increase, description, icon }: IProps) => {
  const theme = useTheme()

  return (
    <Box
      gridColumn="span 2"
      gridRow="span 1"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p="1.25rem 1rem"
      flex="1 1 100%"
      bgcolor={theme.palette.background.alt}
    >
      <FlexBetween>
        <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
          {title}
        </Typography>
        {icon}
      </FlexBetween>

      <Typography
        variant="h3"
        fontWeight="600"
        sx={{ color: theme.palette.secondary[200] }}
      >
        {value}
      </Typography>

      <FlexBetween gap="1rem">
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: theme.palette.secondary.light }}
        >
          {increase}
        </Typography>

        <Typography>{description}</Typography>
      </FlexBetween>
    </Box>
  )
}

export default StatBox
