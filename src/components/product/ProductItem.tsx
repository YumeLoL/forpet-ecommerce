import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { BsStarFill } from 'react-icons/bs'
import { Product } from '@/types'
import { Button } from '@material-tailwind/react'
import UnitButton from '../ui/UnitButton'
import { RiShoppingBasketFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToCart,
  decreaseCount,
  increaseCount,
  removeFromCart,
} from '@/redux/slices'
import { SelectorStateProps, ProductProps } from '@/redux/types'

const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/70 before:to-transparent`

export const Skeleton = () => {
  return (
    <div className="rounded-2xl bg-white p-2">
      <div className={`h-[350px] rounded-2xl bg-neutral-200 ${shimmer}`} />
      <div className="my-3 space-y-3 px-1">
        <div className="flex gap-2">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className={`h-[40px] w-[40px] rounded-full bg-neutral-200 ${shimmer}`}
              ></div>
            ))}
        </div>
        <div className={`h-4 w-full rounded-lg bg-neutral-200 ${shimmer}`} />
        <div className={`h-4 w-1/2 rounded-lg bg-neutral-200 ${shimmer}`} />
        <div className="flex justify-between">
          <div className={`h-4 w-1/3 rounded-lg bg-neutral-200 ${shimmer}`} />
          <div className={`h-4 w-1/3 rounded-lg bg-neutral-200 ${shimmer}`} />
        </div>
      </div>
    </div>
  )
}

type PriceProps = {
  id: number
  price: number
  unit: string
  quantity: number
}

export const ProductItem = (product: Product) => {
  const dispatch = useDispatch()
  const { productsData } = useSelector(
    (state: SelectorStateProps | any) => state.combine.cart,
  )
  const itemInCart = productsData.find(
    (item: ProductProps) => item.id === product.id,
  )

  const { id, name, merchant, prices, rate, images, collection, slug } = product
  const [currentImage, setCurrentImage] = useState(images[0].imageURL)
  const [selectedUnit, setSelectedUnit] = useState<PriceProps>(prices[0])
  const [count, setCount] = useState(itemInCart ? itemInCart.quantity : 0)

  const productLink = `/product/${id}/${slug}`

  return (
    <div className="group rounded-2xl bg-white p-2">
      <div className="relative h-[280px] max-w-[230px]  overflow-hidden rounded-2xl transition">
        <Link href={productLink} className="relative block h-full w-full">
          {images.map(({ imageURL, imageBlur }) => (
            <Image
              key={imageURL}
              src={imageURL}
              alt={`${name} image`}
              className={clsx('absolute h-full w-full duration-700 ', {
                'opacity-100': currentImage === imageURL,
                'opacity-0': currentImage !== imageURL,
              })}
              width={230}
              height={280}
              placeholder="blur"
              blurDataURL={imageBlur}
            />
          ))}
        </Link>
      </div>
      <div className="mb-1 mt-2 space-y-4 px-1">
        <div className="flex gap-2">
          {images.map(({ imageURL, imageBlur }, index) => (
            <button
              key={index}
              className="h-[40px] w-[40px] overflow-hidden rounded-full"
              onClick={() => setCurrentImage(imageURL)}
            >
              <Image
                src={imageURL}
                alt={`${name} image ${index + 1}`}
                className="object-cover"
                width={40}
                height={40}
                placeholder="blur"
                blurDataURL={imageBlur}
              />
            </button>
          ))}
        </div>
        <div>
          <h2 className="text-base font-medium">
            <strong>{merchant?.brandName.toUpperCase()}</strong> {name}
          </h2>
          <h3 className="text-xs font-normal capitalize text-neutral-400">
            {collection.name}
          </h3>
        </div>
        <div className="flex flex-col items-left justify-between gap-2">
          <div className="flex flex-wrap gap-1">
            {prices.map((price, index) => {
              return (
                <div key={index}>
                  <UnitButton
                    id={price.id}
                    quantity={price.quantity}
                    unit={price.unit}
                    price={price.price}
                    setSelectedUnit={setSelectedUnit}
                    selectedUnit={selectedUnit}
                  />
                </div>
              )
            })}
          </div>

          <div className="flex justify-between">
            <h3 className="text-lg font-semibold text-black">
              ${selectedUnit.price}
            </h3>
            <div className="flex items-center justify-center text-xs font-medium text-neutral-500">
              <BsStarFill size="11px" className="mr-1 text-yellow-400" />
              <h4>{rate} (69 Reviews)</h4>
            </div>
          </div>

          {itemInCart?.quantity > 0 ? (
            <div className="h-9 relative flex w-full max-w-[24rem]">
              <button
                className="!absolute left-0 top-0 rounded-lg font-medium text-white bg-green-500 w-9 border border-solid border-green-500 h-full"
                onClick={() => {
                  if (count > 1) {
                    dispatch(decreaseCount(product))
                    setCount(count - 1)
                  } else {
                    dispatch(removeFromCart(product.id))
                    setCount(0)
                  }
                }}
              >
                -
              </button>
              <p className="flex h-9 w-full justify-center items-center text-center rounded-md border border-solid border-gray-300 bg-neutral-500 p-2.5 text-gray-900 placeholder-gray-500 outline-none focus:border-gray-300">
                {count}
              </p>
              <button
                className="!absolute right-0 top-0 rounded-lg font-medium text-white bg-green-500 w-9 border border-solid border-green-500 h-full"
                onClick={() => {
                  dispatch(increaseCount(product))
                  setCount(count + 1)
                }}
              >
                +
              </button>
            </div>
          ) : (
            <Button
              variant="gradient"
              size={'sm'}
              color={'green'}
              className="flex justify-center items-center gap-3"
              placeholder={undefined}
              onClick={() => {
                const shoppedProduct = {
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
                dispatch(addToCart(shoppedProduct))
                setCount(1)
              }}
            >
              <RiShoppingBasketFill size={20} />
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
