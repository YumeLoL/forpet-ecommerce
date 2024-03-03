'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Transition } from '@headlessui/react'
import { Search } from './Search'
import { TopBar } from './TopBar'
import { MegaMenu } from './MegaMenu'
import { Collections } from '@/types'
import { BottomNavigation } from '@/components'
import Logo from '../ui/Logo'

export interface NavLink {
  name: 'sale' | 'cat' | 'dog' | 'brand' | 'blog' | 'contacts'
  href: string
  collapsible?: boolean
}

export const navLinks: NavLink[] = [
  { name: 'sale', href: '/' },
  { name: 'cat', href: '/products/cat', collapsible: true },
  { name: 'dog', href: '/products/dog', collapsible: true },
  { name: 'brand', href: '/brand' },
  { name: 'blog', href: '/blog' },
  { name: 'contacts', href: '/contacts' },
]

export const Header = ({ collections }: { collections: Collections }) => {
  const [hoveredNavLink, setHoveredNavLink] = useState<NavLink | null>()

  const handleShowMenu = (navLink: NavLink) => setHoveredNavLink(navLink)
  const handleCloseMenu = () => setHoveredNavLink(null)

  return (
    <header>
      <TopBar />
      <div className="relative ">
        <div className=" bg-green-300 w-full">
          <div className="mx-auto py-2 flex h-full items-center justify-between px-4 max-w-7xl">
            <div className="mr-5 flex shrink-0 items-center gap-4 w-fit">
              <Logo theme="white" />
              <Search onSearch={(value) => console.log(value)} />
            </div>

            <div className="mr-5 hidden md:flex flex-col text-sm text-white shrink-0 items-right gap-1 items-end align-baseline ">
              <p>Save 30% on your first Auto Delivery</p>
              <Link href="/" className="text-xs decoration-underline">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-green-800">
          <div className="mx-auto flex h-full items-center justify-between px-4 max-w-7xl">
            <ul className="ml-auto hidden h-full sm:flex ">
              {navLinks.map((item, index) => (
                <li
                  className={`py-2 font-medium transition-colors text-green-700 ${
                    hoveredNavLink === item
                      ? 'bg-white text-green-700'
                      : 'text-white'
                  } ${index === 0 && 'bg-yellow-600 text-green-700'}`}
                  key={index}
                  onMouseEnter={() => handleShowMenu(item)}
                  onMouseLeave={handleCloseMenu}
                >
                  <p
                    className="flex h-full items-center px-5 cursor-pointer"
                    onClick={handleCloseMenu}
                  >
                    {item.name.toUpperCase()}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Transition show={Boolean(hoveredNavLink?.collapsible)}>
          {hoveredNavLink && (
            <MegaMenu
              type={hoveredNavLink.name === 'cat' ? 'CAT' : 'DOG'}
              collections={collections}
              onShowMenu={() => handleShowMenu(hoveredNavLink)}
              onCloseMenu={handleCloseMenu}
            />
          )}
        </Transition>
      </div>
      <BottomNavigation navLinks={navLinks} collections={collections} />
    </header>
  )
}
