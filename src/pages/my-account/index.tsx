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
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react'
import AccountDetails from '@/components/MyAccount/AccountDetails'
import Address from '@/components/MyAccount/Address'

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
        return session && <AccountDetails session={session} />
      case 'address':
        return session && <Address session={session} />
      case 'orders':
        return <div>Orders</div>
      case 'wishlist':
        return <div>WishList</div>
      case 'settings':
        return <div>Settings</div>
    }
  }

  return (
    <div className="flex flex-col md:flex-row w-full px-2 md:px-20 py-8">
      <Card
        placeholder={undefined}
        className="hidden md:block min-h-[40rem] w-full max-w-[20rem] p-4 border border-gray-200 shadow-none"
      >
        <div className="mb-2 p-4">
          <Typography placeholder={undefined} variant="h5" color="blue-gray">
            Account
          </Typography>
        </div>
        <List placeholder={undefined} className="text-black">
          <ListItem
            id="account"
            placeholder={undefined}
            onClick={(e: any) => {
              setIsMenu(e.target.id)
            }}
            selected={isMenu === 'account'}
          >
            Account Details
          </ListItem>
          <ListItem
            id="address"
            placeholder={undefined}
            onClick={(e: any) => {
              setIsMenu(e.target.id)
            }}
            selected={isMenu === 'address'}
          >
            Address
          </ListItem>
          <ListItem
            id="orders"
            onClick={(e: any) => {
              setIsMenu(e.target.id)
            }}
            placeholder={undefined}
            selected={isMenu === 'orders'}
          >
            Orders
            <ListItemSuffix placeholder={undefined}>
              <Chip
                value="14"
                size="sm"
                variant="ghost"
                color="blue-gray"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
          <ListItem
            id="wishlist"
            onClick={(e: any) => {
              setIsMenu(e.target.id)
            }}
            placeholder={undefined}
            selected={isMenu === 'wishlist'}
          >
            WishList
          </ListItem>
          <ListItem
            id="settings"
            onClick={(e: any) => {
              setIsMenu(e.target.id)
            }}
            placeholder={undefined}
            selected={isMenu === 'settings'}
          >
            Settings
          </ListItem>
        </List>
      </Card>

      <div className="block md:hidden w-full ">
        <Tabs value="html" className="w-full">
          <TabsHeader placeholder={undefined}>
            <Tab
              key={'account'}
              value={'account'}
              onClick={() => {
                setIsMenu('account')
              }}
              className="text-sm"
              placeholder={undefined}
            >
              Account
            </Tab>
            <Tab
              key={'address'}
              value={'address'}
              onClick={() => {
                setIsMenu('address')
              }}
              className="text-sm"
              placeholder={undefined}
            >
              Address
            </Tab>
            <Tab
              key={'orders'}
              value={'orders'}
              onClick={() => {
                setIsMenu('orders')
              }}
              className="text-sm"
              placeholder={undefined}
            >
              Orders
            </Tab>
            <Tab
              key={'wishlist'}
              value={'wishlist'}
              onClick={() => {
                setIsMenu('wishlist')
              }}
              className="text-sm"
              placeholder={undefined}
            >
              Wishlist
            </Tab>
            <Tab
              key={'settings'}
              value={'settings'}
              onClick={() => {
                setIsMenu('settings')
              }}
              className="text-sm"
              placeholder={undefined}
            >
              Settings
            </Tab>
          </TabsHeader>
        </Tabs>
      </div>

      <div className="w-full p-4">{randerMenuContent()}</div>
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
