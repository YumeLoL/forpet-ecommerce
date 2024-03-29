import { Product } from '@/types'
import { ProductItem } from '../product/ProductItem'
import React, { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, ChevronsRight } from 'lucide-react'
import Link from 'next/link'
import useShowCount from '@/hooks/useShowCount'
import ProductSkeleton from '../ui/ProductSkeleton'

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
  const [currentCatIndex, setCurrentCatIndex] = useState(0)
  const [currentDogIndex, setCurrentDogIndex] = useState(0)
  const showCount = useShowCount({
    mobileCount: 1,
    tabletCount: 2,
    smDesktopCount: 3,
    desktopCount: 4,
  })

  const moveCarousel = (direction: any) => {
    if (!newCat) return
    if (direction === 'left') {
      setCurrentCatIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : Math.max(newCat.length - showCount, 0),
      )
    } else if (direction === 'right') {
      setCurrentCatIndex((prevIndex) =>
        prevIndex < Math.max(newCat.length - showCount, 0) ? prevIndex + 1 : 0,
      )
    }
  }

  const moveDogCarousel = (direction: any) => {
    if (!newDog) return
    if (direction === 'left') {
      setCurrentDogIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : Math.max(newDog.length - showCount, 0),
      )
    } else if (direction === 'right') {
      setCurrentDogIndex((prevIndex) =>
        prevIndex < Math.max(newDog.length - showCount, 0) ? prevIndex + 1 : 0,
      )
    }
  }

  return (
    <div className="bg-white">
      <div className="mx-auto flex flex-col items-center px-4 py-10 md:container">
        <span className="mb-4 text-sm font-bold uppercase text-violet-700">
          Sales
        </span>
        <h2 className="mb-6 text-center text-3xl font-bold text-black md:text-4xl">
          New Coming Products
        </h2>

        <div className="mb-6 w-full ">
          <Link
            className="flex items-center justify-end px-12 mb-6 w-full font-bold text-primary-darker "
            href="/products/cat?page=1"
          >
            <ChevronsRight fontWeight={'bold'} />
            <p className="text-sm md:text-md "> View All Cat&apos;s Products</p>
          </Link>

          <div className="w-full flex justify-center">
            <button onClick={() => moveCarousel('left')} className="mr-2">
              <ChevronLeftIcon className="h-8 w-8 text-gray-700" />
            </button>

            <div className="w-full flex justify-around overflow-hidden">
              {isCatLoading &&
                [...Array(4)]
                  .slice(currentCatIndex, currentCatIndex + showCount)
                  .map((_, index) => (
                    <div className="max-w-[230px] w-full" key={index}>
                      <ProductSkeleton />
                    </div>
                  ))}
              {newCat &&
                newCat
                  .slice(currentCatIndex, currentCatIndex + showCount)
                  .map((product, index) => (
                    <div
                      key={product.id + index}
                      className="w-full max-w-[230px]"
                    >
                      <ProductItem {...product} />
                    </div>
                  ))}
            </div>

            <button onClick={() => moveCarousel('right')} className="ml-2">
              <ChevronRightIcon className="h-8 w-8 text-gray-700" />
            </button>
          </div>
        </div>

        <hr className="mb-6 w-full border-t border-white my-16" />

        <div className="mb-6 w-full ">
          <Link
            className="flex items-center justify-end px-12 mb-6 w-full font-bold text-primary-darker "
            href="/products/dog?page=1"
          >
            <ChevronsRight fontWeight={'bold'} />
            <p className="text-sm md:text-md "> View All Dog&apos;s Products</p>
          </Link>

          <div className="w-full flex justify-center">
            <button onClick={() => moveDogCarousel('left')} className="mr-2">
              <ChevronLeftIcon className="h-8 w-8 text-gray-700" />
            </button>

            <div className="w-full flex justify-around overflow-hidden">
              {isDogLoading &&
                [...Array(4)]
                  .slice(currentCatIndex, currentCatIndex + showCount)
                  .map((_, index) => (
                    <div className="max-w-[230px] w-full" key={index}>
                      <ProductSkeleton />
                    </div>
                  ))}
              {newDog &&
                newDog
                  .slice(currentDogIndex, currentDogIndex + showCount)
                  .map((product, index) => (
                    <div
                      key={product.id + index}
                      className="w-full max-w-[230px]"
                    >
                      <ProductItem {...product} />
                    </div>
                  ))}
            </div>

            <button onClick={() => moveDogCarousel('right')} className="ml-2">
              <ChevronRightIcon className="h-8 w-8 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
