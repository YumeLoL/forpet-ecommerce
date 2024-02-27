import React, { useState } from 'react'
import Image from 'next/image'
import { Skeleton } from './ProductItem'
import { Product } from '@/types'
import clsx from 'clsx'
import { Rating } from '../ui'
import UnitButton from '../ui/UnitButton'
import { useDispatch, useSelector } from 'react-redux'
import { ProductProps, SelectorStateProps } from '@/redux/types'
import { addToCart, decreaseCount, increaseCount } from '@/redux/slices'
import Button from '@material-tailwind/react/components/Button'
import { RiShoppingBasketFill } from 'react-icons/ri'
import useFakeLoading from '@/hooks/useFakeLoading'
import { CheckCircle2, MoreHorizontal } from 'lucide-react'

interface Props {
  product: Product
  isLoading: boolean
}
type PriceProps = {
  id: string
  price: number
  unit: string
  quantity: number
}
export default function ProductDetailInfo({ product, isLoading }: Props) {
  const {
    id,
    name,
    description,
    slug,
    rate,
    images,
    types,
    collection,
    merchant,
    prices,
  } = product
  const [currentImage, setCurrentImage] = useState(product.images[0].imageURL)
  const [selectedUnit, setSelectedUnit] = useState<PriceProps>(prices[0])
  const { isLoading: loading, updateProduct } = useFakeLoading()
  const dispatch = useDispatch()
  const { productsData } = useSelector(
    (state: SelectorStateProps | any) => state.combine.cart,
  )
  const currentProduct = {
    id: product.id,
    name: product.name,
    slug: product.slug,
    description: product.description,
    image: product.images[0].imageURL,
    type: product.collection.name,
    price: selectedUnit.price,
    size: {
      id: selectedUnit.id,
      size: `${selectedUnit.quantity}x${selectedUnit.unit}`,
    },
    quantity: 1,
    brand: product.merchant?.brandName as string,
    category: product.collection.name,
  }

  const addedProduct = productsData.find(
    (productData: ProductProps) =>
      productData?.size.id === currentProduct.size.id,
  )

  const [count, setCount] = useState(currentProduct.quantity)

  // useEffect(() => {
  //   setCount(currentProduct.quantity)
  // }, [currentProduct.quantity])

  return (
    <div className="flex flex-col gap-32 max-w-screen-xl w-full px-8 my-20">
      <div className="flex flex-col md:flex-row justify-space-between w-full">
        {isLoading &&
          Array(2)
            .fill('')
            .map((_, index) => <Skeleton key={index} />)}

        <div className="w-full h-fit md:w-2/3 flex-col gap-4">
          <div className="flex flex-col items-center h-fit md:h-[500px] w-full transition">
            <div className="relative block h-[280px] md:h-full w-[280px] md:w-[400px]">
              {product &&
                images.map(({ imageURL, imageBlur }) => (
                  <Image
                    key={imageURL}
                    src={imageURL}
                    alt={`${name} image`}
                    className={clsx('absolute h-full w-full duration-700 ', {
                      'opacity-100': currentImage === imageURL,
                      'opacity-0': currentImage !== imageURL,
                    })}
                    width={400}
                    height={400}
                    placeholder="blur"
                    blurDataURL={imageBlur}
                  />
                ))}
            </div>

            <div className="flex gap-2 mt-4">
              {product &&
                images.map(({ imageURL, imageBlur }, index) => (
                  <button
                    key={index}
                    className="h-[40px] md:h-[80px] w-[40px] md:w-[80px] overflow-hidden border border-neutral-200"
                    onClick={() => setCurrentImage(imageURL)}
                  >
                    <Image
                      src={imageURL}
                      alt={`${name} image ${index + 1}`}
                      className="object-cover"
                      width={80}
                      height={80}
                      placeholder="blur"
                      blurDataURL={imageBlur}
                    />
                  </button>
                ))}
            </div>
          </div>
        </div>

        <div className="w-full h-fit md:w-1/3 flex flex-col gap-6 my-8 ">
          <h1 className="text-md font-bold text-green-400 ">
            {merchant?.brandName.toUpperCase()}
          </h1>

          <div>
            <h3 className="text-xs font-normal capitalize text-neutral-400">
              {types} - {collection.name}
            </h3>
            <h1 className="text-xl font-bold">{name}</h1>
          </div>

          <div className="flex gap-2">
            <Rating defaultValue={Number(rate.toString())} size="small" />
            <p className="text-sm text-green-400">34 reviews</p>
          </div>

          <div className="flex flex-wrap gap-1">
            {prices.map((price) => {
              return (
                <UnitButton
                  key={price.id}
                  id={price.id}
                  quantity={price.quantity}
                  unit={price.unit}
                  price={price.price}
                  setSelectedUnit={setSelectedUnit}
                  selectedUnit={selectedUnit}
                  size={'large'}
                />
              )
            })}
          </div>
          <h3 className="text-xl font-semibold text-black">
            ${selectedUnit.price}
          </h3>

          <div className="flex gap-2">
            {addedProduct?.quantity > 0 &&
              addedProduct.size.id === selectedUnit.id && (
                <>
                  <div className="h-9 relative flex w-[70%]">
                    <button
                      className="!absolute left-0 top-0 rounded-lg font-medium text-white bg-green-500 w-9 border border-solid border-green-500 h-full"
                      onClick={() => {
                        dispatch(decreaseCount({ ...currentProduct }))
                        updateProduct()
                      }}
                    >
                      -
                    </button>
                    <p className="flex w-full h-9 justify-center items-center text-center rounded-md border border-solid border-gray-300 bg-neutral-500 p-2.5 text-gray-900 placeholder-gray-500 outline-none focus:border-gray-300">
                      {addedProduct?.quantity || count}
                    </p>
                    <button
                      className="!absolute right-0 top-0 rounded-lg font-medium text-white bg-green-500 w-9 border border-solid border-green-500 h-full"
                      onClick={() => {
                        dispatch(increaseCount(currentProduct))
                        updateProduct()
                      }}
                    >
                      +
                    </button>
                  </div>

                  {loading ? (
                    <div className="flex gap-2 justify-center items-center text-sm text-gray-500">
                      <p>Updating</p>
                      <MoreHorizontal size={20} />
                    </div>
                  ) : (
                    <div className="flex gap-2 justify-center items-center text-sm text-gray-500">
                      <CheckCircle2 size={20} />
                      <p>In Cart</p>
                    </div>
                  )}
                </>
              )}

            {!addedProduct && currentProduct.size.id === selectedUnit.id && (
              <Button
                variant="gradient"
                size={'sm'}
                color={'orange'}
                className="flex w-[80%] justify-center items-center gap-3"
                placeholder={undefined}
                onClick={() => {
                  dispatch(addToCart(currentProduct))
                  updateProduct()
                }}
                disabled={addedProduct ? true : false}
                loading={loading}
              >
                <div className={'flex gap-2 justify-center items-center'}>
                  <RiShoppingBasketFill size={20} />
                  <p>Add to cart</p>
                </div>
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="border border-neutral-200 rounded-lg p-4 ">
        <h1 className="text-xl font-bold text-green-400 mb-8">
          Product Information
        </h1>

        <p className="text-xl font-bold mb-4">
          {merchant?.brandName.toUpperCase()} {name}
        </p>
        <p>{description}</p>
      </div>
    </div>
  )
}
