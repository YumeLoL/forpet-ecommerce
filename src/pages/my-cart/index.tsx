import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useState, ReactElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { Minus, Plus, Trash2, X } from 'lucide-react'
import { loadStripe } from '@stripe/stripe-js'
import { SelectorStateProps, ProductProps } from '@/redux/types'
import Link from 'next/link'
import type { NextPageWithLayout } from '../_app'
import { PrimaryLayout } from '@/layouts'
import {
  clearCart,
  decreaseCount,
  increaseCount,
  removeFromCart,
} from '@/redux/slices'
import { api } from '@/utils/api'
import { Button } from '@material-tailwind/react'

const promisePayment = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
)
const MyCart: NextPageWithLayout = () => {
  const { productsData } = useSelector(
    (state: SelectorStateProps | any) => state.combine.cart,
  )
  const dispatch = useDispatch()
  const router = useRouter()

  const { data: session, status } = useSession()
  if (status === 'unauthenticated') {
    router.push('/signin')
  }
  const { data: addresses } = api.address.all.useQuery({
    userId: session?.user?.id as string,
  })
  const { mutate: createOrder } = api.order.create.useMutation({
    onSuccess: async (data) => {
      console.log('ckeck create order data', data)
      const stripe = await promisePayment
      stripe?.redirectToCheckout({
        sessionId: data.sessionId,
      })
    },
  })
  const { mutate: stripeCheckout } =
    api.checkout.createCheckoutSession.useMutation({
      onSuccess: async (data) => {
        console.log('create checkout session', data)
        createOrder({
          sessionId: data.session.id,
          userId: session?.user?.id as string,
          address: selectedAddress as string,
          paymentAmount: data.session.amount_total as number,
          paymentStatus: data.session.payment_status as string,
          paymentIntent: '',
          items: JSON.stringify(productsData),
        })
      },
    })

  const defaultAddress =
    addresses && addresses.find((address) => address.isDefault)
  const addressDetail =
    defaultAddress &&
    `${defaultAddress.address}, ${defaultAddress.city}, ${defaultAddress.state}, ${defaultAddress.country}. ${defaultAddress.zipCode}`
  const [selectedAddress, setSelectedAddress] = useState<string>(
    addressDetail || '',
  )

  const handleCheckout = () => {
    if (selectedAddress === undefined) {
      alert('Please select address')
    }
    if (
      session &&
      session.user &&
      productsData &&
      selectedAddress !== undefined
    ) {
      stripeCheckout({
        purchases: productsData,
        email: session.user.email as string,
        userId: session.user.id,
        address: selectedAddress as string,
      })
    } else {
      console.error('Missing session, user, productsData, or addressId')
    }
  }

  return (
    <div className=" p-4 lg:p-6 w-full min-h-screen bg-gray-100">
      {productsData.length > 0 ? (
        <div className="mt-5 flex w-full flex-col lg:flex-row gap-8">
          <div className="relative w-full lg:w-2/3 bg-white h-fit overflow-x-auto rounded-lg">
            {productsData.map((item: ProductProps) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row justify-center w-full h-full border-b-[1px] border-b-zinc-300  flex-wrap items-center"
                >
                  <div className="sm:w-3/5 w-full px-6 py-4 h-fit justify-center align-middle flex items-center gap-3">
                    <Image
                      src={item?.image}
                      alt="proudct image"
                      width={500}
                      height={500}
                      className="w-20 h-20 object-contain"
                    />
                    <div className="h-full w-full">
                      <p className="text-base font-medium text-black">
                        {item?.brand.toUpperCase()} {item?.name}
                      </p>
                      <p className="text-sm font-normal text-gray-600">
                        {item?.size?.size}, ${item?.price}
                      </p>
                    </div>
                  </div>
                  <div className="sm:w-2/5  w-full px-6 py-4 ">
                    <div className="flex justify-between items-center gap-3">
                      <div className="border border-gray-300 p-1 rounded-md">
                        <span
                          onClick={() =>
                            item?.quantity > 1 && dispatch(decreaseCount(item))
                          }
                          className="bg-gray-200 p-2 rounded-md cursor-pointer duration-200 inline-flex items-center justify-center"
                        >
                          <Minus className="w-4 h-4" />
                        </span>
                        <span className="font-semibold mx-4">
                          {item?.quantity}
                        </span>
                        <span
                          onClick={() => {
                            dispatch(increaseCount(item))
                          }}
                          className="bg-gray-200 p-2 rounded-md cursor-pointer duration-200 inline-flex items-center justify-center"
                        >
                          <Plus className="w-4 h-4" />
                        </span>
                      </div>

                      <p className=""> ${item?.price * item?.quantity}</p>

                      <Trash2
                        onClick={() => dispatch(removeFromCart(item))}
                        className="w-4 h-4 hover:text-red-600 cursor-pointer duration-200"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className=" bg-white rounded-lg w-full lg:w-1/3 p-4 flex flex-col gap-1">
            <p className="border-b-[1px] border-b-designColor py-1 text-lg font-bold">
              Summary
            </p>
            <p className="flex items-center justify-between ">
              Items <span>{productsData.length}</span>
            </p>
            <p className="flex items-center justify-between">
              Total
              <span>
                {' '}
                $
                {productsData
                  .reduce(
                    (a: number, b: ProductProps) => a + b.price * b.quantity,
                    0,
                  )
                  .toFixed(2)}
              </span>
            </p>

            <div className="flex items-center justify-between border-b-[1px] border-b-designColor py-1 mt-4">
              <p className="font-bold">Shipping Address</p>
              <p
                className="w-fit text-yellow-900 text-sm cursor-pointer"
                onClick={() => router.push('/my-account')}
              >
                Edit
              </p>
            </div>

            {addresses && addresses.length > 0 && (
              <>
                <form className="w-full mx-auto">
                  <select
                    onChange={(e) => {
                      const selectedValue = e.target.value
                      setSelectedAddress(selectedValue)
                    }}
                    id="underline_select"
                    className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                    defaultValue={selectedAddress}
                  >
                    {addresses.map((address) => {
                      return (
                        <option
                          key={address.id}
                          value={`${address.address}, ${address.city}, ${address.state}, ${address.country}. ${address.zipCode}`}
                          // selected={address.isDefault}
                        >
                          {`${address.address}, ${address.city}, ${address.state}, ${address.country}. ${address.zipCode}`}
                        </option>
                      )
                    })}
                  </select>
                </form>
              </>
            )}

            {!addresses ||
              (addresses.length === 0 && (
                <div>
                  <p className="text-sm text-gray-500 mb-4">
                    No shipping address
                  </p>
                  <Button
                    className="w-fit"
                    onClick={() => router.push('/my-account')}
                    size="sm"
                    color="green"
                    placeholder={undefined}
                  >
                    Add Address
                  </Button>
                </div>
              ))}
            <button
              onClick={handleCheckout}
              className="bg-zinc-800 text-zinc-200 my-8 py-2  text-center rounded-md font-semibold bg-yellow-600 hover:bg-yellow-200 text-black duration-200"
            >
              Pay with Credit Card
            </button>
          </div>
        </div>
      ) : (
        <div className="py-10 flex flex-col gap-1 items-center justify-center">
          <p className="text-lg font-bold">Your Cart is Empty</p>
          <Link
            href={'/'}
            className="text-sm uppercase font-semibold underline underline-offset-2 hover:text-designColor duration-200 cursor-pointer"
          >
            Go back to Shopping
          </Link>
        </div>
      )}
    </div>
  )
}

MyCart.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout
      seo={{
        title: 'Checkout | ForPETS Store',
        description: 'Checkout',
        // canonical: 'https://karashop.vercel.app/products',
      }}
    >
      {page}
    </PrimaryLayout>
  )
}

export default MyCart
