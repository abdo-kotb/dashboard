import { Helmet } from 'react-helmet'
import { useGetAdminsQuery } from '../store/api'

import { usersColumns as adminsColumns } from '../components/tableColumns'

import Header from '../components/Header'

import { Box, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import CustomColumnMenu from '../components/CustomColumnMenu'

const Admins = () => {
  const { data, isLoading } = useGetAdminsQuery()
  const theme = useTheme()

  return (
    <>
      <Box m="1.5rem 2.5rem">
        <Helmet>
          <title>Admins | Dashboard</title>
        </Helmet>
        <Header title="ADMINS" subtitle="Managing admins and list of admins" />
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
            columns={adminsColumns}
            slots={{
              columnMenu: CustomColumnMenu,
            }}
          />
        </Box>
      </Box>
    </>
  )
}

export default Admins
