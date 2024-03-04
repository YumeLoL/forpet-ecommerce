import { PrimaryLayout } from '@/layouts'
import { useSession } from 'next-auth/react'
import React, { ReactElement, useState } from 'react'
import AccountDetails from '@/components/MyAccount/AccountDetails'
import Address from '@/components/MyAccount/Address'
import Orders from '../../components/MyAccount/Orders'
import CustomList from '@/components/ui/CustomList'
import { useRouter } from 'next/router'
import { api } from '@/utils/api'
import Setting from '@/components/MyAccount/Setting'

function MyAccount() {
  const navigate = useRouter()
  const { data: session, status } = useSession()
  const [isMenu, setIsMenu] = useState('account')
  const { data: allOrders } = api.order.all.useQuery({
    userId: session?.user?.id as string,
  })

  if (status === 'unauthenticated') {
    navigate.push('/signin')
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
        return (
          allOrders && allOrders.length > 0 && <Orders allOrders={allOrders} />
        )
      case 'wishlist':
        return <div>WishList</div>
      case 'settings':
        return <Setting />
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
      <div className="flex flex-col md:flex-row w-full">
        <div className="min-w-[200px] flex md:flex-col flex-row gap-1 m-4">
          {SideBarMenu.map((item) => {
            return (
              <CustomList
                key={item.id}
                id={item.id}
                placeholder={item.placeholder}
                isMenu={isMenu}
                setIsMenu={setIsMenu}
                account={allOrders?.length || 0}
              />
            )
          })}
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
        title: 'My Account',
        description: 'My Account | ForPETS Store',
        // canonical: 'https://karashop.vercel.app/products',
      }}
    >
      {page}
    </PrimaryLayout>
  )
}

export default MyAccount
