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
    <div className=" p-4 lg:p-6">
      <>
        {productsData.length > 0 ? (
          <div className="mt-5 flex flex-col">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left !max-lg:flex ">
                <thead className="text-xs text-gray-500 uppercase bg-zinc-950 max-lg:hidden flex-wrap">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Product Information
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Unit Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      SubTotal
                    </th>
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>
                {productsData.map((item: ProductProps) => {
                  return (
                    <tbody
                      key={item?.id + item.size.id + item.slug}
                      className=" min-w-[300px]"
                    >
                      <tr className="bg-white border-b-[1px] border-b-zinc-300 max-lg:flex flex-wrap items-center">
                        <th
                          scope="row"
                          className="px-6 py-4 flex items-center gap-3"
                        >
                          <Image
                            src={item?.image}
                            alt="proudct image"
                            width={500}
                            height={500}
                            className="w-24 object-contain"
                          />
                          <p className="text-base font-medium text-black">
                            {item?.name}
                          </p>
                        </th>
                        <td className="px-6 py-4">{item?.price}</td>
                        <td className="px-6 py-4">
                          <span className="border border-zinc-300 p-1 rounded-md hover:border-zinc-800 cursor-pointer duration-200 inline-flex items-center justify-center">
                            <Minus
                              onClick={() =>
                                item?.quantity > 1 &&
                                dispatch(decreaseCount(item))
                              }
                              className="w-4 h-4"
                            />
                          </span>
                          <span className="font-semibold mx-4">
                            {item?.quantity}
                          </span>
                          <span className="border border-zinc-300 p-1 rounded-md hover:border-zinc-800 cursor-pointer duration-200 inline-flex items-center justify-center">
                            <Plus
                              onClick={() => {
                                dispatch(increaseCount(item))
                              }}
                              className="w-4 h-4"
                            />
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          {item?.price * item?.quantity}
                        </td>
                        <td className="px-6 py-4">
                          <Trash2
                            onClick={() => dispatch(removeFromCart(item))}
                            className="w-4 h-4 hover:text-red-600 cursor-pointer duration-200"
                          />
                        </td>
                      </tr>
                    </tbody>
                  )
                })}
              </table>
            </div>
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-zinc-950 text-zinc-200 w-36 py-3 mt-5 rounded-md uppercase text-xs font-semibold bg-red-700 text-white duration-200"
            >
              Reset Cart
            </button>

            <div className="mt-4 bg-white max-w-xl p-4 flex flex-col gap-1">
              <p className="border-b-[1px] border-b-designColor py-1">
                Cart Summary
              </p>
              <p className="flex items-center justify-between">
                Total Items <span>{productsData.length}</span>
              </p>
              <p className="flex items-center justify-between">
                Total Price{' '}
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
                <p className="">Shipping Address</p>
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
                className="bg-zinc-800 text-zinc-200 my-8 py-2 uppercase text-center rounded-md font-semibold bg-black text-white duration-200"
              >
                Proceed to Checkout
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
      </>

      <div className="w-full mt-8"></div>
    </div>
  )
}

MyCart.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout
      seo={{
        title: 'Products',
        description: 'Products',
        // canonical: 'https://karashop.vercel.app/products',
      }}
    >
      {page}
    </PrimaryLayout>
  )
}

export default MyCart
