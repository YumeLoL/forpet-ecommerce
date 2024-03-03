import React from 'react'
import {
  Chip,
  ListItem as CustomList,
  ListItemSuffix,
} from '@material-tailwind/react'

type Props = {
  id: string
  placeholder: string
  isMenu: string
  setIsMenu: any
}
export default function CustomListItem({
  id,
  placeholder,
  isMenu,
  setIsMenu,
}: Props) {
  return (
    <CustomList
      id={id}
      placeholder={placeholder}
      onClick={(e: any) => {
        setIsMenu(e.target.id)
      }}
      style={{
        backgroundColor: isMenu === id ? '#2E7D32' : '#E9EBEF',
        color: isMenu === id ? 'white' : 'black',
      }}
      className={
        'text-[12px] sm:text-sm md:text-[16px] flex justify-center px-1 sm:p-2'
      }
      selected={isMenu === id}
    >
      {placeholder}
      {id === 'orders' && (
        <div className="ml-1 sm:ml-2 flex justify-center items-center text-yellow-800 bg-yellow-100 rounded-full w-4 h-4 sm:w-6 sm:h-6 ">
          5
        </div>
      )}
    </CustomList>
  )
}
