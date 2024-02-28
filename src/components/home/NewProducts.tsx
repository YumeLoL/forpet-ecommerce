import { Product } from '@/types'
import { ProductItem, Skeleton } from '../product/ProductItem'

type Props = {
  newCat: Product[] | undefined
  newDog: Product[] | undefined
  isCatLoading: boolean
  isDogLoading: boolean
}

export const NewProducts = ({
  newCat,
  newDog,
  isCatLoading,
  isDogLoading,
}: Props) => {
  return (
    <div className="bg-white">
      <div className="mx-auto flex flex-col items-center px-4 py-10 md:container">
        <span className="mb-4 text-sm font-bold uppercase text-violet-700">
          Sales
        </span>
        <h2 className="mb-6 text-center text-3xl font-bold text-black md:text-4xl">
          New Coming Products
        </h2>

        <div className="grid w-full max-w-[1150px] gap-3 sm:grid-cols-4">
          {isCatLoading &&
            Array(8)
              .fill('')
              .map((_, index) => <Skeleton key={index} />)}
          {newCat &&
            newCat.map((product, index) => (
              <ProductItem {...product} key={index} />
            ))}
        </div>

        <div className="grid w-full max-w-[1150px] gap-3 sm:grid-cols-4">
          {isDogLoading &&
            Array(8)
              .fill('')
              .map((_, index) => <Skeleton key={index} />)}
          {newDog &&
            newDog.map((product, index) => (
              <ProductItem {...product} key={index} />
            ))}
        </div>
      </div>
    </div>
  )
}
