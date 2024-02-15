import React from 'react'
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from '@material-tailwind/react'
import { RiShoppingBasketFill } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import { SelectorStateProps } from '@/redux/types'

function CartDrawer() {
  const { productsData } = useSelector(
    (state: SelectorStateProps | any) => state.combine.cart,
  )
  const [openRight, setOpenRight] = React.useState(false)

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
        className="p-4"
        placeholder={undefined}
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" placeholder={undefined}>
            Material Tailwind
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
        <p color="gray" className="mb-8 pr-4 font-normal">
          Material Tailwind features multiple React and HTML components, all
          written with Tailwind CSS classes and Material Design guidelines.
        </p>
        <div className="flex gap-2">
          <Button size="sm" variant="outlined" placeholder={undefined}>
            Documentation
          </Button>
          <Button size="sm" placeholder={undefined}>
            Get Started
          </Button>
        </div>
      </Drawer>
    </div>
  )
}

export default CartDrawer
