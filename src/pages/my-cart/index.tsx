import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useState, useEffect, ReactElement } from 'react'
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

const MyCart: NextPageWithLayout = () => {
  const [totalAmt, setTotalAmt] = useState(0)
  const [rowPrice, setRowPrice] = useState(0)

  const { productsData } = useSelector(
    (state: SelectorStateProps | any) => state.combine.cart,
  )

  const dispatch = useDispatch()
  const router = useRouter()
  const { data: session } = useSession()
  const { data: addresses } = api.address.all.useQuery({
    userId: session?.user?.id as string,
  })

  const promisePayment = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
  )
  const handleCheckout = async () => {
    const stripe = await promisePayment
    const response = await fetch('http://localhost:3000/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        purchases: productsData,
        email: session?.user?.email,
      }),
    })

    const data = await response.json()

    if (response.ok) {
      stripe?.redirectToCheckout({ sessionId: data.id })
      router.push('/success')
    } else {
      throw new Error('Faild to complate payment process')
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
                    <tbody key={item?.id} className=" min-w-[300px]">
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
                  {productsData.reduce(
                    (a: number, b: ProductProps) => a + b.price * b.quantity,
                    0,
                  )}
                </span>
              </p>
              <button
                onClick={handleCheckout}
                className="bg-zinc-800 text-zinc-200 my-2 py-2 uppercase text-center rounded-md font-semibold bg-black text-white duration-200"
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

      <div className="w-full mt-8">
        <h1 className="text-xl font-semibold mb-4">Shipping Address</h1>
        {addresses &&
          addresses.length > 0 &&
          addresses?.map((address) => {
            return (
              <>
                <div className="w-full" key={address.id}>
                  <p>
                    {address.address}, {address.city}, {address.state}.{' '}
                    {address.country}. {address.zipCode}{' '}
                  </p>
                </div>
                <hr className="my-4 border-gray-300 w-full" />
              </>
            )
          })}

        {!addresses ||
          (addresses.length === 0 && (
            <div>
              <p className="text-sm text-gray-500 mb-4">No shipping address</p>
              <Button
                className="w-fit"
                onClick={() => {}}
                size="sm"
                color="green"
                placeholder={undefined}
              >
                Add Address
              </Button>
            </div>
          ))}
      </div>
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
