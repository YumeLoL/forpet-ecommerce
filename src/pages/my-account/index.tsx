import { PrimaryLayout } from '@/layouts'
import { useSession } from 'next-auth/react'
import React, { ReactElement, useState } from 'react'
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemSuffix,
  Chip,
} from '@material-tailwind/react'
import AccountDetails from '@/components/MyAccount/AccountDetails'
import Address from '@/components/MyAccount/Address'
import Orders from './Orders'
import CustomList from '@/components/ui/CustomList'

function MyAccount() {
  const { data: session, status } = useSession()
  const [isMenu, setIsMenu] = useState('account')

  if (status === 'loading') {
    return (
      <div className="flex w-full h-[40rem] justify-center align-middle items-center">
        <div
          className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    )
  }

  if (status === 'unauthenticated' || !session) {
    return <div>unauthenticated, please login now</div>
  }

  const randerMenuContent = () => {
    switch (isMenu) {
      case 'account':
        return (
          session && <AccountDetails setIsMenu={setIsMenu} session={session} />
        )
      case 'address':
        return session && <Address session={session} />
      case 'orders':
        return <Orders />
      case 'wishlist':
        return <div>WishList</div>
      case 'settings':
        return <div>Settings</div>
    }
  }

  const SideBarMenu = [
    {
      id: 'account',
      placeholder: 'Account',
    },
    {
      id: 'address',
      placeholder: 'Address',
    },
    {
      id: 'orders',
      placeholder: 'Orders',
    },
    {
      id: 'wishlist',
      placeholder: 'WishList',
    },
    {
      id: 'settings',
      placeholder: 'Settings',
    },
  ]

  return (
    <div className="w-full px-0 md:px-20 py-8">
      <h1 className="text-xl text-green-800 font-bold mb-4 mx-4">
        Welcome back, {session?.user?.name}
      </h1>
      <div className="flex flex-col md:flex-row w-full ">
        <div className="">
          <div className="min-w-[200px] flex md:flex-col flex-row gap-1 mx-4">
            {SideBarMenu.map((item) => {
              return (
                <CustomList
                  key={item.id}
                  id={item.id}
                  placeholder={item.placeholder}
                  isMenu={isMenu}
                  setIsMenu={setIsMenu}
                />
              )
            })}
          </div>
        </div>

        <div className="w-full p-4">{randerMenuContent()}</div>
      </div>
    </div>
  )
}

MyAccount.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout
      seo={{
        title: 'My Account | ForPETS Store',
        description: 'My Account | ForPETS Store',
        // canonical: 'https://karashop.vercel.app/products',
      }}
    >
      {page}
    </PrimaryLayout>
  )
}

export default MyAccount
