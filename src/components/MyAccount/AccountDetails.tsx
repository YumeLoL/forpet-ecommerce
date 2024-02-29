'use client'

import { api } from '@/utils/api'
import { Button, Switch } from '@material-tailwind/react'
import { Session } from 'next-auth/core/types'
import React, { useState } from 'react'

type Props = {
  session: Session
}

export default function AccountDetails({ session }: Props) {
  if (!session.user) return null

  const { data: addresses } = api.address.all.useQuery({
    userId: session.user.id,
  })

  return (
    <div className="w-full">
      <h1 className="text-xl font-semibold">Account Details</h1>
      <hr className="my-4 border-gray-300 w-full" />

      <div className="w-full">
        <div className="mb-4 flex flex-col md:flex-row gap-2">
          <p className="font-bold">Account ID:</p>
          <p>{session?.user?.id}</p>
        </div>

        <div className="mb-4 flex flex-col md:flex-row gap-2">
          <p className="font-bold">Email:</p>
          <p>{session?.user?.email}</p>
        </div>

        <div className="mb-4 flex flex-col md:flex-row gap-2">
          <p className="font-bold">User Name:</p>
          <p>{session?.user?.name}</p>
        </div>
      </div>

      <br />
      <br />

      <h1 className="text-xl font-semibold">Shipping Address</h1>
      <hr className="my-4 border-gray-300 w-full" />

      {addresses &&
        addresses.length > 0 &&
        addresses?.map((address) => {
          return (
            <>
              <div className="w-full" key={address.id}>
                {address.isDefault && (
                  <p className="text-sm text-gray-500">
                    Default Shipping Address
                  </p>
                )}
                <p>
                  {address.address}, {address.city}, {address.state}.{' '}
                  {address.country}. {address.zipCode}{' '}
                </p>
              </div>
              <hr className="my-4 border-gray-300 w-full" />
            </>
          )
        })}

      {!addresses ||
        (addresses.length === 0 && (
          <div>
            <p className="text-sm text-gray-500 mb-4">No shipping address</p>
            <Button
              className="w-fit"
              onClick={() => {}}
              size="sm"
              color="green"
              placeholder={undefined}
            >
              Add Address
            </Button>
          </div>
        ))}
    </div>
  )
}
