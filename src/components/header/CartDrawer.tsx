import React, { useEffect, useState } from 'react'
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from '@material-tailwind/react'
import { RiShoppingBasketFill, RiDeleteBinLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { ProductProps, SelectorStateProps } from '@/redux/types'
import Image from 'next/image'
import { removeFromCart } from '@/redux/slices'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

function CartDrawer() {
  const { data: session, status } = useSession()

  const router = useRouter()
  const dispatch = useDispatch()
  const [openRight, setOpenRight] = useState(false)
  const { productsData } = useSelector(
    (state: SelectorStateProps | any) => state.combine.cart,
  )

  openRight
    ? (document.body.style.overflowY = 'hidden')
    : (document.body.style.overflowY = 'auto')

  const openDrawerRight = () => setOpenRight(true)
  const closeDrawerRight = () => setOpenRight(false)

  return (
    <div>
      <button
        className="h-full flex gap-1 justify-center align-middle items-center"
        onClick={openDrawerRight}
      >
        <RiShoppingBasketFill size={18} />
        {productsData ? productsData.length : 0}
      </button>

      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4 h-screen w-full flex flex-col justify-between align-middle"
        placeholder={undefined}
        overlay={false}
        style={{ overflowY: 'hidden' }}
      >
        <div className="flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" placeholder={undefined}>
            Shopping Cart
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
            placeholder={undefined}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>

        <div className="">
          {productsData.length ? (
            <div className="flex flex-col px-4 h-[75vh] overflow-y-auto">
              {productsData.map((product: ProductProps, index: number) => {
                return (
                  <div key={index} className={'flex flex-col text-black gap-3'}>
                    <div className="flex w-full justify-between">
                      <div>
                        <Image
                          src={`${
                            product.image
                              ? product.image
                              : '/images/placeholder-image.png'
                          }`}
                          alt={`${product.name} image`}
                          className={'object-cover'}
                          width={80}
                          height={80}
                        />
                        <h2 className="text-sm">{product.name}</h2>
                      </div>

                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          dispatch(removeFromCart(product))
                        }}
                      >
                        <RiDeleteBinLine size={16} color={'gray'} />
                      </div>
                    </div>

                    <div className="flex w-full justify-between">
                      <p className="">{product.size.size}</p>
                      <div className="flex gap-4">
                        <p className="text-gray-500">
                          qty:
                          <span className="text-black">{product.quantity}</span>
                        </p>
                        <p className="text-gray-500">x</p>
                        <p className="">{`$${product.price}`}</p>
                      </div>
                    </div>

                    <div className="flex w-full justify-between">
                      <p className="text-gray-500">Subtotal</p>
                      <p className="">{`$${product.price * product.quantity}`}</p>
                    </div>
                    <hr className="my-3" />
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="text-gray-500 flex flex-col items-center">
              <RiShoppingBasketFill size={60} />
              <p className="text-lg">Your shopping cart is empty</p>
            </div>
          )}
        </div>

        {productsData.length > 0 ? (
          <div className="">
            <div className="text-black flex justify-between">
              <p className="text-sm">Total</p>
              <div className="flex gap-4">
                <p>items: {productsData.length}</p>
                <p className="">
                  $
                  {productsData
                    .reduce(
                      (a: number, b: ProductProps) => a + b.price * b.quantity,
                      0,
                    )
                    .toFixed(2)}
                </p>
              </div>
            </div>

            <div className="flex gap-2 mt-2">
              <Button
                onClick={closeDrawerRight}
                size="sm"
                variant="outlined"
                placeholder={undefined}
              >
                Keep Shopping
              </Button>
              <Button
                onClick={() => {
                  if (status === 'authenticated' && session) {
                    router.push('/my-cart')
                  } else {
                    router.push('/signin')
                  }
                }}
                size="sm"
                placeholder={undefined}
              >
                Place Order
              </Button>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </Drawer>
    </div>
  )
}

export default CartDrawer
