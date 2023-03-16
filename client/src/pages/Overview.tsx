import { useState } from 'react'
import { Helmet } from 'react-helmet'

import Header from '../components/Header'
import OverviewChart from '../components/OverviewChart'

import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const Overview = () => {
  const [view, setView] = useState('units')

  return (
    <Box m="1.5rem 2.5rem">
      <Helmet>
        <title>Overview | Dashboard</title>
      </Helmet>

      <Header
        title="OVERVIEW"
        subtitle="Overview of general revenue and profit"
      />
      <Box height="65vh" width="90%">
        <FormControl sx={{ mt: '1rem' }}>
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            label="View"
            onChange={e => setView(e.target.value)}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>

        <OverviewChart view={view} />
      </Box>
    </Box>
  )
}

export default Overview
