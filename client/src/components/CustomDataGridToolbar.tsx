import { Dispatch, SetStateAction } from 'react'

import FlexBetween from './FlexBetween'

import { Search } from '@mui/icons-material'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from '@mui/x-data-grid'

interface IProps {
  searchInput: string
  setSearchInput: Dispatch<SetStateAction<string>>
  setSearch: Dispatch<SetStateAction<string>>
}

const CustomDataGridToolbar = ({
  searchInput,
  setSearch,
  setSearchInput,
}: IProps) => {
  return (
    <GridToolbarContainer>
      <FlexBetween width="100%">
        <FlexBetween>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
        </FlexBetween>
        <TextField
          variant="standard"
          label="Search..."
          sx={{ mb: '0.5rem', width: '15rem' }}
          onChange={e => setSearchInput(e.target.value)}
          value={searchInput}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setSearch(searchInput)
                    setSearchInput('')
                  }}
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FlexBetween>
    </GridToolbarContainer>
  )
}

export default CustomDataGridToolbar
