import { api } from '@/utils/api'
import React, { useState } from 'react'
import { Session } from 'next-auth/core/types'
import { Button } from '@material-tailwind/react'
import { Address } from '@prisma/client'
import { useRouter } from 'next/navigation'

type Props = {
  session: Session
}

export default function Address({ session }: Props) {
  const navigate = useRouter()
  const userId = session?.user?.id
  if (!userId || userId === undefined || null) {
    navigate.push('/signin')
  }

  const { data: addresses } = api.address.all.useQuery({
    userId: session?.user?.id as string,
  })
  const [address, setAddress] = useState({
    id: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    isDefault: true,
    userId: session?.user?.id as string,
  })

  const trpc = api.useUtils()
  const { mutate: createNew } = api.address.create.useMutation({
    onSettled: async () => {
      await trpc.address.all.invalidate()
    },
  })
  const { mutate: del } = api.address.delete.useMutation({
    onSettled: async () => {
      await trpc.address.all.invalidate()
    },
  })

  const onSubmit = (e: any) => {
    e.preventDefault()

    createNew(address)
    setAddress({
      id: '',
      address: '',
      city: '',
      state: '',
      country: '',
      zipCode: '',
      isDefault: true,
      userId: session?.user?.id as string,
    })
  }

  return (
    <div className="w-full">
      <h1 className="text-xl font-semibold">Address</h1>
      <hr className="my-4 border-gray-300 w-full" />

      {addresses &&
        addresses.length > 0 &&
        addresses?.map((address) => {
          return (
            <>
              <div className="w-full flex justify-between" key={address.id}>
                <p>
                  {address.address}, {address.city}, {address.state}.{' '}
                  {address.country} {address.zipCode}{' '}
                </p>

                <div className="flex gap-3">
                  <p
                    className="ml-auto text-sm text-red-800 cursor-pointer font-bold"
                    onClick={() =>
                      del({
                        id: address.id,
                      })
                    }
                  >
                    Delete
                  </p>
                </div>
              </div>
              <hr className="my-4 border-gray-300 w-full" />
            </>
          )
        })}

      <form onSubmit={onSubmit} className="w-full my-8">
        <div className="flex flex-col mb-4 gap-2">
          <p className="font-bold">Shipping address:</p>
          <input
            required
            type="text"
            className="w-full max-w-[40rem] rounded-md"
            placeholder="e.g. Level 1, 200 George Street"
            value={address.address}
            onChange={(e) =>
              setAddress((prev) => ({ ...prev, address: e.target.value }))
            }
          />
        </div>
        <div className="flex flex-col mb-4 gap-2">
          <p className="font-bold">City:</p>
          <input
            required
            type="text"
            className="w-full max-w-[40rem] rounded-md"
            placeholder="e.g. Melbourne"
            value={address.city}
            onChange={(e) =>
              setAddress((prev) => ({ ...prev, city: e.target.value }))
            }
          />
        </div>

        <div className="flex flex-col mb-4 gap-2">
          <p className="font-bold">State:</p>
          <input
            required
            type="text"
            className="w-full max-w-[40rem] rounded-md"
            placeholder="e.g. VIC"
            value={address.state}
            onChange={(e) =>
              setAddress((prev) => ({ ...prev, state: e.target.value }))
            }
          />
        </div>

        <div className="flex flex-col mb-4 gap-2">
          <p className="font-bold">Country:</p>
          <input
            required
            type="text"
            className="w-full max-w-[40rem] rounded-md"
            placeholder="e.g. Australia"
            value={address.country}
            onChange={(e) =>
              setAddress((prev) => ({ ...prev, country: e.target.value }))
            }
          />
        </div>

        <div className="flex flex-col mb-4 gap-2">
          <p className="font-bold">zipCode:</p>
          <input
            required
            type="text"
            className="w-full max-w-[40rem] rounded-md"
            placeholder="e.g. 0000"
            value={address.zipCode}
            onChange={(e) =>
              setAddress((prev) => ({ ...prev, zipCode: e.target.value }))
            }
          />
        </div>

        <Button type="submit" color={'green'} size="sm" placeholder={undefined}>
          Add a New Address
        </Button>
      </form>
    </div>
  )
}
