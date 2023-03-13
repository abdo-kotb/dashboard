import { useGetProductsQuery } from '../store/api'

import Header from '../components/Header'
import Product from '../components/Product'

import { Box, useMediaQuery } from '@mui/material'

const Products = () => {
  const { data, isLoading } = useGetProductsQuery()
  const isNotMobile = useMediaQuery('(min-width: 1000px)')

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="PRODUCTS" subtitle="See your list of products..." />
      {data?.length && !isLoading ? (
        <Box
          mt="1.25rem"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="1.25rem"
          columnGap="1.33%"
          sx={{
            '& > div': {
              gridColumn: isNotMobile ? undefined : 'span 4',
            },
          }}
        >
          {data.map(product => (
            <Product product={product} />
          ))}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  )
}

export default Products
