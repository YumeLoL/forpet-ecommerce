import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Collections } from '@/types'
import { NavLink } from '@/components'
import { CollectionsPage } from './CollectionsPage'
import { useSession } from 'next-auth/react'
import { FaHeart, FaHouseUser } from 'react-icons/fa6'
import { FaShoppingBasket } from 'react-icons/fa'
import { TiThMenu } from 'react-icons/ti'
import CustomDrawer from '../header/CustomDrawer'

interface Props {
  navLinks: NavLink[]
  collections: Collections
}

export const BottomNavigation = ({ navLinks, collections }: Props) => {
  const router = useRouter()
  const { data: session } = useSession()

  const [currentTab, setCurrentTab] = useState('')

  const [openRight, setOpenRight] = useState(false)
  openRight
    ? (document.body.style.overflowY = 'hidden')
    : (document.body.style.overflowY = 'auto')

  const openDrawerRight = () => setOpenRight(true)
  const closeDrawerRight = () => setOpenRight(false)

  // const bottomTabs: BottomTab[] = [
  //   { title: 'Menu', url: '/#menu', Icon: TiThMenu },
  //   { title: 'Cart', url: '/#cart', Icon: FaShoppingBasket },
  //   { title: 'Wishlist', url: '/', Icon: FaHeart },
  //   { title: 'Profile', url: '/my-account', Icon: FaHouseUser },
  // ]

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 h-14 bg-green-300 drop-shadow-[0_-15px_20px_rgba(0,0,0,0.10)] sm:hidden">
        <ul className="flex h-full">
          <li className="flex-1">
            <Link
              href={'/#menu'}
              className={` relative flex h-full w-full flex-col items-center justify-center text-xs font-medium text-neutral-700 hover:text-violet-700 ${
                router.pathname === '/#menu' && 'text-violet-700'
              }`}
              onClick={() => setCurrentTab('/#menu')}
            >
              <TiThMenu size={'1.6rem'} className={`text-white opacity-90`} />
            </Link>
          </li>
          <li className="flex-1">
            <div
              className={` relative cursor-pointer flex h-full w-full flex-col items-center justify-center text-xs font-medium text-neutral-700 hover:text-violet-700 ${
                router.pathname === '/#cart' && 'text-violet-700'
              }`}
              onClick={() => openDrawerRight()}
            >
              <FaShoppingBasket
                size={'1.6rem'}
                className="text-white opacity-90"
              />
            </div>
          </li>
          <li className="flex-1">
            <Link
              href={'/'}
              className={` relative flex h-full w-full flex-col items-center justify-center text-xs font-medium text-neutral-700 hover:text-violet-700 ${
                router.pathname === '/#cart' && 'text-violet-700'
              }`}
              onClick={() => setCurrentTab('/')}
            >
              <FaHeart size={'1.6rem'} className={`text-white opacity-90`} />
            </Link>
          </li>
          <li className="flex-1">
            <Link
              href={'/my-account'}
              className={` flex h-full w-full flex-col items-center justify-center text-xs font-medium text-neutral-700 hover:text-violet-700 ${
                router.pathname === '/my-account' && 'text-violet-700'
              }`}
              onClick={() => setCurrentTab('/my-account')}
            >
              <div className="relative">
                <div
                  className={`absolute bottom-5 left-6 h-2 w-2 rounded-full ${session ? 'bg-green-700' : 'bg-gray-600 opacity-65'}`}
                />
                <FaHouseUser
                  size={'1.6rem'}
                  className={`text-white opacity-90`}
                />
              </div>
            </Link>
          </li>
        </ul>
      </div>
      {currentTab === '/#menu' && (
        <CollectionsPage
          navLinks={navLinks}
          collections={collections}
          onPageClose={() => setCurrentTab('')}
        />
      )}

      <CustomDrawer openRight={openRight} closeDrawerRight={closeDrawerRight} />
    </>
  )
}
