import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { BsStarFill } from 'react-icons/bs'
import { Product } from '@/types'
import { Button } from '@material-tailwind/react'
import UnitButton from '../ui/UnitButton'

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
  price: number
  unit: string
  quantity: number
}

export const ProductItem = ({
  id,
  name,
  merchant,
  prices,
  rate,
  images,
  collection,
}: Product) => {
  const [currentImage, setCurrentImage] = useState(images[0].imageURL)
  const [selectedUnit, setSelectedUnit] = useState<PriceProps>(prices[0])

  const productLink = `/product/${id}/slug`

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

          <Button
            variant="gradient"
            className="flex items-center gap-3"
            placeholder={undefined}
            onClick={() => console.log('add to cart', selectedUnit)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
