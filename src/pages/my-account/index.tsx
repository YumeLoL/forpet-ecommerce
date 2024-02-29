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
  Tab,
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
        return (
          session && <AccountDetails setIsMenu={setIsMenu} session={session} />
        )
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
    <div className="flex flex-col md:flex-row w-full px-0 md:px-20 py-8">
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

      <div className="flex md:hidden w-full order border-gray-200 bg-gray-400 text-sm h-8">
        <ListItem
          id="account"
          placeholder={undefined}
          onClick={(e: any) => {
            setIsMenu(e.target.id)
          }}
          selected={isMenu === 'account'}
          className={`w-full flex justify-center rounded-none`}
        >
          Account
        </ListItem>
        <ListItem
          id="address"
          placeholder={undefined}
          onClick={(e: any) => {
            setIsMenu(e.target.id)
          }}
          selected={isMenu === 'address'}
          className={`w-full flex justify-center rounded-none`}
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
          className={`w-full flex justify-center rounded-none`}
        >
          Orders
        </ListItem>
        <ListItem
          id="wishlist"
          onClick={(e: any) => {
            setIsMenu(e.target.id)
          }}
          placeholder={undefined}
          selected={isMenu === 'wishlist'}
          className={`w-full flex justify-center rounded-none`}
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
          className={`w-full flex justify-center rounded-none`}
        >
          Settings
        </ListItem>
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
