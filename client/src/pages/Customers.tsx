import { Helmet } from 'react-helmet'
import { useGetCustomersQuery } from '../store/api'

import Header from '../components/Header'

import { Box, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

import { usersColumns as customersColumns } from '../components/tableColumns'

const Customers = () => {
  const { data, isLoading } = useGetCustomersQuery()
  const theme = useTheme()

  return (
    <Box m="1.5rem 2.5rem">
      <Helmet>
        <title>Customers | Dashboard</title>
      </Helmet>

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
          columns={customersColumns}
        />
      </Box>
    </Box>
  )
}

export default Customers
