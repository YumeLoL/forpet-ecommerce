import { ProductCategory } from './ProductCategory'
import { ProductPrice } from './ProductPrice'
import { ProductRate } from './ProductRate'

export const Navigation = () => {
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-white p-2">
      <ProductCategory />
      <ProductRate />
      <ProductPrice />
    </div>
  )
}
