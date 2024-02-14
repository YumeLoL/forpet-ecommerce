import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import promobanner1 from '../../../public/images/home-5.webp'
import promobanner2 from '../../../public/images/home-2.webp'
import promobanner3 from '../../../public/images/home-3.webp'
import promobanner4 from '../../../public/images/home-4.webp'

export const Promotions = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto flex flex-col items-center px-4 py-10 md:container">
        <span className="mb-4 text-sm font-bold uppercase text-violet-700">
          Best Price
        </span>
        <h2 className="mb-6 text-center text-3xl font-bold text-black md:text-4xl">
          Everyday Low Prices
        </h2>

        <div className="grid w-full max-w-[1150px] gap-3 sm:grid-cols-4">
          <Link href="/" className="">
            <Image src={promobanner1} alt="promo banner 1 image" />
          </Link>
          <Link href="/" className="">
            <Image src={promobanner2} alt="promo banner 2 image" />
          </Link>
          <Link href="/" className="">
            <Image src={promobanner3} alt="promo banner 3 image" />
          </Link>
          <Link href="/" className="">
            <Image src={promobanner4} alt="promo banner 4 image" />
          </Link>
        </div>
      </div>
    </div>
  )
}
