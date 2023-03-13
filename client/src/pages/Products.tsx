import Header from '../components/Header'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Rating,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useGetProductsQuery } from '../store/api'
import type Product from '../types/Product'
import { useState } from 'react'

const Product = ({ product }: { product: Product }) => {
  const theme = useTheme()
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card
      sx={{
        backgroundImage: 'none',
        backgroundColor: theme.palette.background.alt,
        borderRadius: '0.55rem',
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {product.category}
        </Typography>
        <Typography variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography sx={{ mb: '1.5rem' }} color={theme.palette.secondary[400]}>
          ${Number(product.price).toFixed(2)}
        </Typography>
        <Rating value={product.rating} readOnly />

        <Typography variant="body2">{product.description}</Typography>
      </CardContent>

      <CardActions>
        <Button
          variant="contained"
          size="small"
          onClick={() => setIsExpanded(state => !state)}
        >
          See More
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{
          color: theme.palette.neutral[300],
        }}
      >
        <CardContent>
          <Typography>ID: {product._id}</Typography>
          <Typography>Supply Left: {product.supply}</Typography>
          <Typography>
            Yearly Sales This Year: {product.stats?.yearlySalesTotal}
          </Typography>
          <Typography>
            Yearly Units Sold This Year: {product.stats?.yearlyTotalSoldUnits}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

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
