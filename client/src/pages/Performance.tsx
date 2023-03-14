import { useGetPerformanceQuery } from '../store/api'
import { AppState } from '../store'

import { performanceColumns } from '../components/tableColumns'

import Header from '../components/Header'

import { Box, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import CustomColumnMenu from '../components/CustomColumnMenu'
import { useSelector } from 'react-redux'

const Performance = () => {
  const { userId } = useSelector((state: AppState) => state.global)
  const { data, isLoading } = useGetPerformanceQuery(userId)
  const theme = useTheme()

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="PERFORMANCE"
        subtitle="Track your affiliate sales performance here"
      />
      <Box
        mt="3.25rem"
        height="65vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
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
            bgcolor: theme.palette.primary.light,
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
          loading={isLoading}
          getRowId={row => row._id}
          rows={data?.affiliateStats.affiliateSales ?? []}
          columns={performanceColumns}
          slots={{
            columnMenu: CustomColumnMenu,
          }}
        />
      </Box>
    </Box>
  )
}

export default Performance
