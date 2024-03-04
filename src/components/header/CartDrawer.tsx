import React, { useState } from 'react'

import { RiShoppingBasketFill } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import { SelectorStateProps } from '@/redux/types'

import CustomDrawer from './CustomDrawer'

function CartDrawer() {
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
    <div className="relative">
      <button
        className="h-full flex gap-1 justify-center align-middle items-center"
        onClick={openDrawerRight}
      >
        <RiShoppingBasketFill size={20} />
        <span>{productsData ? productsData.length : 0}</span>
      </button>

      <CustomDrawer openRight={openRight} closeDrawerRight={closeDrawerRight} />
    </div>
  )
}

export default CartDrawer
