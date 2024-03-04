import { Drawer } from '@material-tailwind/react'
import { useState } from 'react'
import { ProductCategory } from './ProductCategory'
import { ProductPrice } from './ProductPrice'
import { ProductRate } from './ProductRate'
import { useMediaQuery } from '@react-hook/media-query'

export const Navigation = ({
  openBottom,
  setOpenBottom,
}: {
  openBottom: boolean
  setOpenBottom: any
}) => {
  const isMobile = useMediaQuery('(max-width: 786px)')

  console.log(openBottom)

  openBottom
    ? (document.body.style.overflowY = 'hidden')
    : (document.body.style.overflowY = 'auto')

  return (
    <>
      {/* {!isMobile ? ( */}
      <div className="hidden md:flex flex-col gap-2 rounded-lg p-2">
        <ProductCategory />
        <div className={'h-[1px] bg-gray-300 w-full my-4'} />
        <ProductRate />
        <div className={'h-[1px] bg-gray-300 w-full my-4'} />
        <ProductPrice />
      </div>
      {/* ) : ( */}
      <>
        <Drawer
          placement="bottom"
          open={openBottom}
          onClose={() => setOpenBottom(false)}
          className={`p-4 w-full h-screen overflow-auto flex md:hidden flex-col justify-between align-middle`}
          placeholder={undefined}
          overlay={true}
          size={550}
        >
          <ProductCategory />
          <div className={'h-[1px] bg-gray-300 w-full my-4'} />
          <ProductRate />
          <div className={'h-[1px] bg-gray-300 w-full my-4'} />
          <ProductPrice />
        </Drawer>
      </>
      {/* )} */}
    </>
  )
}
