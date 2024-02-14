import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import React from 'react'
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
} from 'react-icons/bs'
import { IconType } from 'react-icons/lib'
import Logo from '../ui/Logo'

const socialMedias: [IconType, string][] = [
  [BsInstagram, 'https://instagram.com'],
  [BsTwitter, 'https://twitter.com'],
  [BsFacebook, 'https://facebook.com'],
  [BsLinkedin, 'https://linkedin.com'],
]

export const Footer = () => {
  const { t } = useTranslation('footer')

  const footerLinks = [
    {
      label: t('company'),
      links: [
        ['About Us', '/'],
        ['Community', '/'],
        ['Media', '/'],
        ['Careers', '/'],
        ['Terms of use', '/'],
      ],
    },
    {
      label: t('support'),
      links: [
        ['Product Recalls', '/'],
        ['Best Price Guarantee', '/'],
        ['Shipping', '/'],
        ['Returns', '/'],
        ['FAQ', '/'],
      ],
    },
    {
      label: t('contact'),
      links: [
        ['WhatsApp', '/whatsapp'],
        ['24/7 Service', '/24-service'],
      ],
    },
  ]

  return (
    <footer className="mb-16 bg-white md:mb-0">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:flex-1">
            <Logo theme="green" />
            <div>
              <p className="text-xs font-normal text-neutral-500 md:text-sm mt-4">
                For PETS is your partner in creating healthier, happier lives
                for your pet. Stocking the largest range of pet products- with
                everything from dog food to lizard beds
              </p>
            </div>

            <div className="my-5 flex justify-center md:justify-start">
              {socialMedias.map(([Icon, href]) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  className="mr-2 rounded-lg bg-neutral-200 p-2 text-neutral-600 transition hover:bg-neutral-300 hover:text-neutral-700"
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-5 flex justify-between md:mt-0 md:flex-[2] md:justify-around">
            {footerLinks.map(({ label, links }) => (
              <div key={label} className="flex flex-col">
                <strong className="mb-5 text-sm font-bold text-neutral-600 md:text-base">
                  {label}
                </strong>
                <ul className="flex flex-col gap-2 text-xs font-normal text-neutral-500 md:text-sm">
                  {links.map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      className="transition hover:text-neutral-700"
                    >
                      {label}
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-neutral-100">
        <div className="mx-auto max-w-7xl px-2 py-3">
          <div className="flex flex-col items-center justify-between gap-3 text-xs font-medium text-neutral-700 md:flex-row">
            <p>Copyright 2024 FOR PETS</p>
            <Link href="https://github.com/YumeLoL" target="_blank">
              <BsGithub size="1.25rem" />
            </Link>
            <p>
              {`${t('createdBy')} `}
              <strong>
                <Link href="https://github.com/YumeLoL" target="_blank">
                  YumeLi
                </Link>
              </strong>
              {'. '}
              {t('reserved')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
