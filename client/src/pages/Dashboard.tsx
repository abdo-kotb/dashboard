import { Helmet } from 'react-helmet'

import { useGetDashboardQuery } from '../store/api'

import { transactionsColumns as dashboardColumns } from '../components/tableColumns'

import FlexBetween from '../components/FlexBetween'
import Header from '../components/Header'
import StatBox from '../components/StatBox'
import OverviewChart from '../components/OverviewChart'

import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

import {
  DownloadOutlined,
  Email,
  PersonAdd,
  PointOfSale,
  Traffic,
} from '@mui/icons-material'
import BreakdownChart from '../components/BreakdownChart'

const Dashboard = () => {
  const theme = useTheme()
  const isNotMediumScreen = useMediaQuery('(min-width: 1200px)')
  const { data, isLoading } = useGetDashboardQuery()

  return (
    <Box m="1.5rem 2.5rem">
      <Helmet>
        <title>Daily | Dashboard</title>
      </Helmet>

      <FlexBetween>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              bgcolor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px',
            }}
          >
            <DownloadOutlined sx={{ mr: '10px' }} />
            Download Reports
          </Button>
        </Box>
      </FlexBetween>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          '& > div': {
            gridColumn: isNotMediumScreen ? undefined : 'span 12',
          },
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="Total Customers"
          value={data?.totalCustomers}
          increase="+14%"
          description="Since last month"
          icon={
            <Email
              sx={{ color: theme.palette.secondary[300], fontSize: '26px' }}
            />
          }
        />
        <StatBox
          title="Sales Today"
          value={data?.todayStats.totalSales}
          increase="+21%"
          description="Since yesterday"
          icon={
            <PointOfSale
              sx={{ color: theme.palette.secondary[300], fontSize: '26px' }}
            />
          }
        />

        <Box
          gridColumn="span 8"
          gridRow="span 2"
          bgcolor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
        >
          <OverviewChart view="Sales" isDashboard />
        </Box>

        <StatBox
          title="Monthly Sales"
          value={data?.curMonthStats.totalSales}
          increase="+5%"
          description="Since last month"
          icon={
            <PersonAdd
              sx={{ color: theme.palette.secondary[300], fontSize: '26px' }}
            />
          }
        />
        <StatBox
          title="Yearly Sales"
          value={data?.yearlySalesTotal}
          increase="+43%"
          description="Since last year"
          icon={
            <Traffic
              sx={{ color: theme.palette.secondary[300], fontSize: '26px' }}
            />
          }
        />

        {/* Row 2 */}
        <Box
          mb="1.5rem"
          gridColumn="span 8"
          gridRow="span 3"
          sx={{
            '& .MuiDataGrid-root': {
              border: 'none',
              borderRadius: '5rem',
            },
            '& .MuiDataGrid-cell': {
              borderBottom: 'none',
            },
            '& .MuiDataGrid-columnHeaders': {
              bgcolor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderBottom: 'none',
            },
            '& .MuiDataGrid-virtualScroller': {
              bgcolor: theme.palette.background.alt,
            },
            '& .MuiDataGrid-footerContainer': {
              bgcolor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderTop: 'none',
            },
            '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
              color: `${theme.palette.secondary[200]} !important`,
            },
          }}
        >
          <DataGrid
            loading={isLoading || !data}
            getRowId={row => row._id}
            rows={data?.transactions ?? []}
            columns={dashboardColumns}
          />
        </Box>
        <Box
          mb="1.5rem"
          gridColumn="span 4"
          gridRow="span 3"
          bgcolor={theme.palette.background.alt}
          p="1.5rem"
          borderRadius="0.55rem"
        >
          <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
            Sales by Category
          </Typography>
          <BreakdownChart isDashboard />
          <Typography
            px="0.6rem"
            fontSize="0.8rem"
            sx={{ color: theme.palette.secondary[200] }}
          >
            Breakdown of real states and information via category for revenue
            made for this year and total sales
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard
