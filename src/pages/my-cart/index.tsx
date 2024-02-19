import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useState, useEffect, ReactElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { Minus, Plus, X } from 'lucide-react'
// import { loadStripe } from '@stripe/stripe-js'
import { SelectorStateProps, ProductProps } from '@/redux/types'
import Link from 'next/link'
import type { NextPageWithLayout } from '../_app'
import { PrimaryLayout } from '@/layouts'

// const promisePayment = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
// )

const MyCart: NextPageWithLayout = () => {
  const [totalAmt, setTotalAmt] = useState(0)
  const [rowPrice, setRowPrice] = useState(0)

  const { productsData } = useSelector(
    (state: SelectorStateProps | any) => state.combine.cart,
  )

  const dispatch = useDispatch()
  const router = useRouter()
  const { data: session } = useSession()

  console.log(session)

  useEffect(() => {
    //   let amt = 0;
    //   let rowAmt = 0;
    //   productsData.map((item: ProductProps) => {
    //     amt += item.price * item.quantity;
    //     return;
    //   });
    //   productsData.map((item: ProductProps) => {
    //     rowAmt += item?.previousPrice * item?.quantity;
    //   });
    //   setTotalAmt(amt);
    //   setRowPrice(rowAmt);
  }, [])

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
                    <th scope="col" className="px-6 py-3">
                      Saving
                    </th>
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
                          <X
                            // onClick={() => {
                            //   dispatch(removeFromCart(item?._id)),
                            //     toast.success(
                            //       `${item.title} is removed from Wishlist!`,
                            //     )
                            // }}
                            className="w-4 h-4 hover:text-red-600 cursor-pointer duration-200"
                          />
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
                        <td className="px-6 py-4 flex items-center gap-4">
                          <span className="border border-zinc-300 p-1 rounded-md hover:border-zinc-800 cursor-pointer duration-200 inline-flex items-center justify-center">
                            <Minus
                              // onClick={() =>
                              //   item?.quantity > 1
                              //     ? dispatch(decreaseCount(item._id)) &&
                              //       toast.success(
                              //         'Quantity decreased Successfully!',
                              //       )
                              //     : toast.error('Can not delete less than 1')
                              // }
                              className="w-4 h-4"
                            />
                          </span>
                          <span className="font-semibold">
                            {item?.quantity}
                          </span>
                          <span className="border border-zinc-300 p-1 rounded-md hover:border-zinc-800 cursor-pointer duration-200 inline-flex items-center justify-center">
                            <Plus
                              // onClick={() => {
                              //   dispatch(increaseCount(item)),
                              //     toast.success(`${item?.title} quantity added`)
                              // }}
                              className="w-4 h-4"
                            />
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          {item?.price * item?.quantity}
                        </td>
                        <td className="px-6 py-4">
                          <p className="bg-zinc-900 w-20 text-sm font-semibold text-center text-white py-1 rounded-md">
                            {/* {calculateDiscount(item.previousPrice,item.price)} */}
                            % save
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  )
                })}
              </table>
            </div>
            <button
              // onClick={handleReset}
              className="bg-zinc-950 text-zinc-200 w-36 py-3 mt-5 rounded-md uppercase text-xs font-semibold hover:bg-red-700 hover:text-white duration-200"
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
                Price <span>{rowPrice}</span>
              </p>
              <p className="flex items-center justify-between">
                Discount <span>{rowPrice - totalAmt}</span>
              </p>
              <p className="flex items-center justify-between">
                Total Price <span>{totalAmt}</span>
              </p>
              <button
                //   onClick={handleCheckout}
                className="bg-zinc-800 text-zinc-200 my-2 py-2 uppercase text-center rounded-md font-semibold hover:bg-black hover:text-white duration-200"
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
