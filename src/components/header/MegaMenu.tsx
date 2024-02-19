import Image from 'next/image'
import Link from 'next/link'
import { capitalizeFirstLetter } from '@/utils'
import { Collections } from '@/types'
import { CollectionType } from '@prisma/client'

interface Props {
  type: CollectionType
  collections: Collections
  onShowMenu: () => void
  onCloseMenu: () => void
}

const newItems = [
  { label: 'New Arrivals', href: '/' },
  { label: 'Best Sellers', href: '/' },
  { label: 'Free Delivery', href: '/' },
]

const trendingItems = [
  { label: 'Members Exclusives', href: '/' },
  { label: 'Release Dates', href: '/' },
  { label: 'Best Options:2 for $39 or 3 for $49', href: '/' },
]

export const MegaMenu = ({
  type,
  collections,
  onShowMenu,
  onCloseMenu,
}: Props) => {
  const typeInLowerCase = type.toString().toLowerCase()

  return (
    <div
      onMouseEnter={onShowMenu}
      onMouseLeave={onCloseMenu}
      className="absolute z-[500] w-full border-t border-solid border-neutral-200 bg-white shadow-md shadow-neutral-300"
    >
      <div className="mx-auto flex max-w-7xl">
        <div className="flex flex-1">
          <div className="ml-4 py-8">
            <Link
              href="/"
              onClick={onCloseMenu}
              className="text-sm font-bold uppercase leading-4 tracking-widest text-neutral-800 hover:underline"
            >
              New & Promotions
            </Link>
            <ul className="pt-2">
              {newItems.map(({ label, href }, index) => (
                <li key={index}>
                  <Link
                    href={href}
                    className="mb-1.5 text-xs font-normal text-neutral-700 hover:underline"
                    onClick={onCloseMenu}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mb-2 pt-3">
              {trendingItems.map(({ label, href }, index) => (
                <li key={index}>
                  <Link
                    href={href}
                    className="mb-1.5 text-xs font-normal text-neutral-700 hover:underline"
                    onClick={onCloseMenu}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/" onClick={onCloseMenu}>
              <Image
                priority
                src="/assets/offer.webp"
                alt="offer"
                width={150}
                height={100}
                quality={100}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col flex-[3] border-l border-solid shadow-neutral-300">
          <p className="ml-4 pt-8 text-sm font-bold uppercase leading-4 tracking-widest text-neutral-800">
            {/* {capitalizeFirstLetter(typeInLowerCase)} */}
            Shop by Category
          </p>

          <div className="flex">
            {collections &&
              collections.map((collection) => (
                <div
                  key={collection.id}
                  className="ml-4 w-full max-w-[150px] py-8"
                >
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    {collection.name}
                  </p>

                  <ul className="pt-2">
                    {collection.children
                      .filter((subCollection) =>
                        subCollection.types.includes(type),
                      )
                      .map((subCollection) => (
                        <li key={subCollection.id}>
                          <Link
                            href={`/products/${typeInLowerCase}/${collection.slug}?cate=${subCollection.slug}`}
                            className="mb-1.5 text-xs font-normal text-neutral-700 hover:underline"
                            onClick={onCloseMenu}
                          >
                            {subCollection.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="border-t border-solid shadow-neutral-300">
        <div className="mx-auto flex max-w-7xl">
          <div className="flex flex-1 items-center">
            <Link
              href="/"
              className="ml-4 w-full max-w-[150px] py-3 text-xs font-bold text-neutral-800 hover:underline"
              onClick={onCloseMenu}
            >
              Sale
            </Link>
          </div>
          <div className="flex flex-[3] items-center">
            {collections &&
              collections.map((collection, index) => (
                <Link
                  key={index}
                  href={`/products/${typeInLowerCase}/${collection.slug}`}
                  className="ml-4 w-full max-w-[150px] py-3 text-xs font-bold text-neutral-800 hover:underline"
                  onClick={onCloseMenu}
                >
                  {`All ${capitalizeFirstLetter(
                    typeInLowerCase,
                  )}'s ${capitalizeFirstLetter(collection.name)}`}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
