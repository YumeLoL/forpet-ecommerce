import { Product } from '@/types'
import { ProductItem } from '../product/ProductItem'
import React, { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, ChevronsRight } from 'lucide-react'
import Link from 'next/link'
import useShowCount from '@/hooks/useShowCount'

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
  const [currentIndex, setCurrentIndex] = useState(0)
  const showCount = useShowCount({
    mobileCount: 1,
    tabletCount: 2,
    smDesktopCount: 3,
    desktopCount: 4,
  })

  const moveCarousel = (direction: any) => {
    if (!newCat) return
    if (direction === 'left') {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : Math.max(newCat.length - showCount, 0),
      )
    } else if (direction === 'right') {
      setCurrentIndex((prevIndex) =>
        prevIndex < Math.max(newCat.length - showCount, 0) ? prevIndex + 1 : 0,
      )
    }
  }

  const moveDogCarousel = (direction: any) => {
    if (!newDog) return
    if (direction === 'left') {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : Math.max(newDog.length - showCount, 0),
      )
    } else if (direction === 'right') {
      setCurrentIndex((prevIndex) =>
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
            <p className="text-md md:text-xl "> View All Cat&apos;s Products</p>
          </Link>

          <div className="w-full flex justify-center">
            <button onClick={() => moveCarousel('left')} className="mr-2">
              <ChevronLeftIcon className="h-8 w-8 text-gray-700" />
            </button>

            <div className="w-full flex justify-around overflow-hidden">
              {newCat &&
                newCat
                  .slice(currentIndex, currentIndex + showCount)
                  .map((product, index) => (
                    <div key={product.id} className="w-full max-w-[280px]">
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
            <p className="text-md md:text-xl "> View All Dog&apos;s Products</p>
          </Link>

          <div className="w-full flex justify-center">
            <button onClick={() => moveDogCarousel('left')} className="mr-2">
              <ChevronLeftIcon className="h-8 w-8 text-gray-700" />
            </button>

            <div className="w-full flex justify-around overflow-hidden">
              {newDog &&
                newDog
                  .slice(currentIndex, currentIndex + showCount)
                  .map((product) => (
                    <div key={product.id} className="w-full max-w-[230px]">
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
