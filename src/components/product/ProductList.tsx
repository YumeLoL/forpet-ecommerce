import { Product } from '@/types'
import { ProductItem, Skeleton } from './ProductItem'

interface Props {
  products: Product[] | undefined
  isLoading: boolean
}

export const ProductsList = ({ products, isLoading }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 w-full">
      {isLoading &&
        Array(12)
          .fill('')
          .map((_, index) => <Skeleton key={index} />)}
      {products &&
        products.map((product) => (
          <div key={product.id} className="w-full ">
            <ProductItem {...product} />
          </div>
        ))}
    </div>
  )
}
