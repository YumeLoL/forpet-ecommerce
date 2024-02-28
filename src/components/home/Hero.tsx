import Link from 'next/link'
import Image from 'next/image'
import { FiShoppingCart } from 'react-icons/fi'
import { Carousel } from '@material-tailwind/react'

export const Hero = () => {
  return (
    <Carousel placeholder={undefined} className="bg-red-50">
      {[1, 2, 3].map((index) => {
        return (
          <div
            key={index}
            className="mx-auto flex min-h-[50vh] max-w-7xl flex-col px-4 md:flex-row"
          >
            <div className="flex flex-1 flex-col items-center justify-center pt-10 md:items-start md:px-4 md:pt-0">
              <span
                data-aos="fade-down"
                data-aos-delay="200"
                className="mb-2.5 rounded-md bg-pink-100 px-4 py-1 text-sm font-semibold text-violet-600 md:mb-5"
              >
                Sale 40%
              </span>
              <h2
                data-aos="fade-right"
                data-aos-delay="300"
                className="mb-5 text-center text-[1.2rem] sm:text-[2rem] font-bold leading-tight text-black md:text-left md:text-5xl"
              >
                Everyday Great Prices on CAT FOOD
              </h2>
              <h3
                data-aos="fade-right"
                data-aos-delay="400"
                className="font-regular mb-5 text-center text-md sm:text-lg leading-tight text-neutral-700 md:mb-10 md:text-left"
              >
                Best price guarantee. Everyday Great Prices on CAT FOOD
              </h3>
              <Link
                href={'/sale'}
                data-aos="fade-up"
                data-aos-delay="500"
                className="mb-10 md:flex items-center rounded bg-primary-darker hover:bg-cyan-800 px-8 py-2.5 text-base font-normal text-white shadow-sm shadow-zinc-500 hidden"
              >
                <FiShoppingCart />
                <span className="ml-2">Shop Now</span>
              </Link>
            </div>

            <div className="flex flex-1 items-center justify-center md:justify-end my-12">
              <div className="max-w-[250px] md:max-w-[550px]">
                <Image
                  priority
                  src="/images/home-1.webp"
                  alt="hero"
                  quality={100}
                  width={550}
                  height={550}
                  data-aos="fade-up"
                />
              </div>
            </div>
          </div>
        )
      })}
    </Carousel>
  )
}
