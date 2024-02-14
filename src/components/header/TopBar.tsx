import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import type { IconType } from 'react-icons'
import { RiShoppingBasketFill } from 'react-icons/ri'
import { GoPersonFill } from 'react-icons/go'

interface TopbarItemProps {
  label: string
  url: string
  Icon?: IconType
}

const TopbarItem = ({ label, url, Icon }: TopbarItemProps) => (
  <li className="mx-1 pb-px md:mr-2.5 lg:[&:nth-of-type(3)]:mr-10 lg:[&:nth-of-type(5)]:mr-10 items-centers flex">
    <Link
      href={url}
      className="flex items-center transition-colors hover:text-white"
    >
      {Icon && <Icon className="mx-1 text-lg"></Icon>}
      <span>{label}</span>
    </Link>
  </li>
)

export const TopBar = () => {
  const { t } = useTranslation('header')

  const topbarItems: TopbarItemProps[] = [
    { label: 'Sign In | Create Account', url: '/signin', Icon: GoPersonFill },
    { label: '', url: '/', Icon: RiShoppingBasketFill },
  ]

  return (
    <div className="bg-[#414141] text-[10px] text-gray-300 md:text-xs ">
      <div className="mx-auto flex flex-col items-center px-4 py-1 md:flex-row md:py-2.5 max-w-7xl">
        <p className="pb-2 md:pb-0">{t('topbar.discount')}</p>
        <ul className="flex flex-wrap justify-center md:ml-auto">
          {topbarItems.map((item) => (
            <TopbarItem key={item.label} {...item} />
          ))}
        </ul>
      </div>
    </div>
  )
}
