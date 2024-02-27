import { ProductCategory } from './ProductCategory'
import { ProductPrice } from './ProductPrice'
import { ProductRate } from './ProductRate'

export const Navigation = () => {
  return (
    <div className="flex flex-col gap-2 rounded-lg p-2">
      <ProductCategory />
      <div className={'h-[1px] bg-gray-300 w-full my-4'} />
      <ProductRate />
      <div className={'h-[1px] bg-gray-300 w-full my-4'} />
      <ProductPrice />
    </div>
  )
}
