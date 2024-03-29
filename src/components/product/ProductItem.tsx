import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import { BsStarFill } from 'react-icons/bs'
import { Product } from '@/types'
import { Button } from '@material-tailwind/react'
import UnitButton from '../ui/UnitButton'
import { RiShoppingBasketFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, decreaseCount, increaseCount } from '@/redux/slices'
import { SelectorStateProps, ProductProps } from '@/redux/types'
import Link from 'next/link'

type PriceProps = {
  id: string
  price: number
  unit: string
  quantity: number
}

export const ProductItem = (product: Product) => {
  const dispatch = useDispatch()
  const { productsData } = useSelector(
    (state: SelectorStateProps | any) => state.combine.cart,
  )

  const { id, name, merchant, prices, rate, images, collection, slug } = product
  const [currentImage, setCurrentImage] = useState(images[0].imageURL)
  const [selectedUnit, setSelectedUnit] = useState<PriceProps>(prices[0])

  const productLink = `/product/${collection.slug}/${slug}_${id}`

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

  return (
    <div className="h-[470px] flex flex-col justify-between group rounded-lg border border-gray-300 p-2">
      <div className="flex flex-col gap-1 justify-between">
        <div className="flex self-center w-full h-[230px] max-w-[230px] overflow-hidden transition ">
          <Link href={productLink} className="h-full w-full">
            <div className="relative h-full w-full">
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
                  height={230}
                  placeholder="blur"
                  blurDataURL={imageBlur}
                />
              ))}
            </div>
          </Link>
        </div>
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

        <Link href={productLink} className="flex flex-col gap-1">
          <h2 className="text-base font-medium">
            <strong>{merchant?.brandName.toUpperCase()}</strong> {name}
          </h2>
          <h3 className="text-xs font-normal capitalize text-neutral-400">
            {collection.name}
          </h3>
        </Link>
      </div>

      <div className=" flex flex-col items-left justify-between gap-2">
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
              />
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
        {addedProduct?.quantity > 0 &&
          addedProduct.size.id === selectedUnit.id && (
            <div className="h-9 relative flex w-full max-w-[24rem]">
              <button
                className="!absolute left-0 top-0 rounded-lg font-medium text-white bg-green-500 w-9 border border-solid border-green-500 h-full"
                onClick={() => {
                  dispatch(decreaseCount(currentProduct))
                }}
              >
                -
              </button>
              <p className="flex h-9 w-full justify-center items-center text-center rounded-md border border-solid border-gray-300 bg-neutral-500 p-2.5 text-gray-900 placeholder-gray-500 outline-none focus:border-gray-300">
                {addedProduct.quantity ? addedProduct.quantity : 0}
              </p>
              <button
                className="!absolute right-0 top-0 rounded-lg font-medium text-white bg-green-500 w-9 border border-solid border-green-500 h-full"
                onClick={() => {
                  dispatch(increaseCount(currentProduct))
                }}
              >
                +
              </button>
            </div>
          )}

        {!addedProduct && currentProduct.size.id === selectedUnit.id && (
          <Button
            variant="gradient"
            size={'sm'}
            color={'yellow'}
            className="flex justify-center items-center gap-3 hover:shadow-none"
            placeholder={undefined}
            onClick={() => {
              dispatch(addToCart(currentProduct))
            }}
          >
            <RiShoppingBasketFill size={20} />
            Add to Cart
          </Button>
        )}
      </div>
    </div>
  )
}
