import { useState } from 'react'

import { useGetTransactionsQuery } from '../store/api'

import { transactionsColumns } from '../components/tableColumns'
import Header from '../components/Header'
import CustomDataGridToolbar from '../components/CustomDataGridToolbar'

import { Box, useTheme } from '@mui/material'
import { DataGrid, GridSortItem, GridSortModel } from '@mui/x-data-grid'

const Transactions = () => {
  const theme = useTheme()

  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(20)
  const [sort, setSort] = useState<GridSortItem | {}>({})
  const [search, setSearch] = useState('')
  const [searchInput, setSearchInput] = useState('')

  const { data, isLoading } = useGetTransactionsQuery({
    page,
    pageSize,
    search,
    sort: JSON.stringify(sort),
  })

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="TRANSACTIONS"
        subtitle="List of transactions (server-side data manipulation)"
      />
      <Box
        height="80vh"
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
          loading={isLoading || !data?.transactions}
          getRowId={row => row._id}
          rows={data?.transactions ?? []}
          rowsPerPageOptions={[20, 50, 100]}
          columns={transactionsColumns}
          rowCount={data?.total ?? 0}
          pagination
          page={page}
          pageSize={pageSize}
          paginationMode="server"
          sortingMode="server"
          onPageChange={(newPage: number) => setPage(newPage)}
          onPageSizeChange={(newPageSize: number) => setPageSize(newPageSize)}
          onSortModelChange={newSortModel => setSort(newSortModel[0])}
          components={{ Toolbar: CustomDataGridToolbar }}
          componentsProps={{
            toolbar: { searchInput, setSearchInput, setSearch },
          }}
          {...({ page: page } as any)}
        />
      </Box>
    </Box>
  )
}

export default Transactions
