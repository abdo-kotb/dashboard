import { useGetCustomersQuery } from '../store/api'

import Header from '../components/Header'

import { Box, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

import columns from '../components/customersTableColumns'

const Customers = () => {
  const { data, isLoading } = useGetCustomersQuery()
  const theme = useTheme()

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="CUSTOMERS"
        subtitle="List of Customers (client-side data manipulation)"
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
          rows={data?.length ? data : []}
          columns={columns}
        />
      </Box>
    </Box>
  )
}

export default Customers
