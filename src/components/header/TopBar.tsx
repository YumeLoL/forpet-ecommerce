import Link from 'next/link'
import { RiShoppingBasketFill } from 'react-icons/ri'
import { FiHeart } from 'react-icons/fi'
import { GoPersonFill } from 'react-icons/go'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { SelectorStateProps } from '@/redux/types'

export const TopBar = () => {
  const { data: session } = useSession()

  const { favoritesData } = useSelector(
    (state: SelectorStateProps | any) => state.combine.favorites,
  )
  const { productsData } = useSelector(
    (state: SelectorStateProps | any) => state.combine.cart,
  )

  return (
    <div className="bg-[#414141] text-[10px] text-gray-300 md:text-xs ">
      <div className="mx-auto flex flex-col items-center px-4 py-1 md:flex-row md:py-1.5 max-w-7xl">
        <p className="pb-2 md:pb-0">Get 25% discount on a first purchase.</p>

        <ul className="flex flex-wrap gap-3 justify-center md:ml-auto">
          {session && (
            <div
              className="flex items-center cursor-pointer"
              onClick={() => signOut()}
            >
              <div className="hidden rounded-full border border-solid border-violet-700 p-[2px] md:block">
                {session.user?.image && (
                  <Image
                    src={session.user.image}
                    alt="user profile image"
                    width={20}
                    height={20}
                    className="overflow-hidden rounded-full"
                    quality={100}
                  />
                )}
              </div>
              <span className="ml-1 hover:text-white">
                Hi, {session.user?.name}
              </span>
            </div>
          )}

          {!session && (
            <li className="pb-px items-centers flex">
              <Link
                href={'/signin'}
                className="flex items-center transition-colors hover:text-white"
              >
                <GoPersonFill />
                <span>Sign In</span>
              </Link>
            </li>
          )}

          <li className="pb-px items-centers flex">
            <Link
              href={'/'}
              className="flex items-center transition-colors hover:text-white"
            >
              <RiShoppingBasketFill size={18} />
              {productsData ? productsData.length : 0}
            </Link>
          </li>

          <li className="pb-px items-centers flex">
            <Link
              href={'/'}
              className="flex items-center transition-colors hover:text-white"
            >
              <FiHeart size={18} />
              {favoritesData ? favoritesData.length : 0}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
