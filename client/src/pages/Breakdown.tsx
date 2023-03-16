import { Helmet } from 'react-helmet'

import { Box } from '@mui/material'

import BreakdownChart from '../components/BreakdownChart'
import Header from '../components/Header'

const Breakdown = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Helmet>
        <title>Breakdown | Dashboard</title>
      </Helmet>

      <Header title="BREAKDOWN" subtitle="Breakdown of sales by category" />
      <BreakdownChart />
    </Box>
  )
}

export default Breakdown
