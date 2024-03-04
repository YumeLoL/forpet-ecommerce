import React from 'react'
import { Button, Chip, Typography } from '@material-tailwind/react'
import { Order } from '@prisma/client'

const TABLE_HEAD = ['Date', 'Delivery', 'Item', 'Price', '']

export default function Orders({ allOrders }: { allOrders: Order[] }) {
  return (
    <div className="h-full w-full rounded-md">
      <table className="hidden lg:table w-full table-auto text-left rounded-lg overflow-hidden">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50  p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="w-fit font-normal leading-none opacity-70"
                  placeholder={head}
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allOrders &&
            allOrders.length > 0 &&
            allOrders.map(
              ({
                createdAt,
                deliveryStatus,
                items,
                paymentAmount,
                paymentStatus,
                id,
              }) => {
                const classes = 'max-w-[260px] p-4 border-b border-blue-gray-50'

                return (
                  <tr key={id}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal w-fit text-sm"
                        placeholder={createdAt}
                      >
                        {createdAt.getFullYear() +
                          '-' +
                          createdAt.getMonth() +
                          '-' +
                          createdAt.getDate()}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <span
                        className={`w-fit text-sm capitalize ${
                          deliveryStatus === 'QUEUED'
                            ? 'text-amber-700'
                            : deliveryStatus === 'PREPARED'
                              ? 'text-purple-700'
                              : deliveryStatus === 'SHIPPING'
                                ? 'text-indigo-700'
                                : 'text-green-700'
                        }`}
                      >
                        {deliveryStatus.toLocaleLowerCase()}
                      </span>
                    </td>
                    <td className={classes}>
                      {JSON.parse(items).map((item: any) => {
                        return (
                          <Typography
                            key={item.id}
                            variant="small"
                            color="blue-gray"
                            className="font-normal w-fit text-sm"
                            placeholder={items.length}
                          >
                            {item.quantity} x {item.brand.toUpperCase()}{' '}
                            {item.name} {item.size.size}
                          </Typography>
                        )
                      })}
                    </td>
                    <td className={classes}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium cursor-auto w-fit text-sm"
                        placeholder={paymentAmount}
                      >
                        ${(paymentAmount / 100).toFixed(2)}
                      </Typography>
                      <span
                        className={`w-fit text-sm capitalize ${paymentStatus === 'unpaid' ? 'text-red-500' : 'text-teal-500'}`}
                      >
                        {paymentStatus}
                      </span>
                    </td>
                    <td className={classes}>
                      <button
                        onClick={() => alert('under development...')}
                        className="bg-zinc-800 text-zinc-200 my-8 py-1 px-1 text-[12px] text-center rounded-md font-semibold bg-yellow-600 hover:bg-yellow-400 text-black duration-200"
                      >
                        Reorder
                      </button>
                    </td>
                  </tr>
                )
              },
            )}
        </tbody>
      </table>

      <div className="lg:hidden w-full text-left ">
        <div className="border-b border-blue-gray-100 bg-blue-gray-50 overflow-hidden p-4 rounded-t-lg ">
          <p className="text-gray-700 text-sm font-normal leading-none opacity-70">
            Order History
          </p>
        </div>
        {allOrders &&
          allOrders.length > 0 &&
          allOrders.map(
            ({
              createdAt,
              deliveryStatus,
              items,
              paymentAmount,
              paymentStatus,
              id,
            }) => {
              return (
                <div key={id} className="w-full border-b border-blue-gray-50">
                  <div className={'w-full flex justify-between p-4'}>
                    <div>
                      <p className="w-fit text-sm font-bold mb-1">Date</p>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal w-fit text-sm"
                        placeholder={createdAt}
                      >
                        {createdAt.getFullYear() +
                          '-' +
                          createdAt.getMonth() +
                          '-' +
                          createdAt.getDate()}
                      </Typography>
                    </div>

                    <div className="mb-1">
                      <p className="w-fit text-sm font-bold">Delivery</p>
                      <p
                        className={`w-fit text-sm capitalize ${
                          deliveryStatus === 'QUEUED'
                            ? 'text-amber-700'
                            : deliveryStatus === 'PREPARED'
                              ? 'text-purple-700'
                              : deliveryStatus === 'SHIPPING'
                                ? 'text-indigo-700'
                                : 'text-green-700'
                        }`}
                      >
                        {deliveryStatus.toLocaleLowerCase()}
                      </p>
                    </div>
                  </div>

                  <div className={'w-full p-4'}>
                    <div className="mb-1">
                      <p className="w-fit text-sm font-bold">Item</p>
                      {JSON.parse(items).map((item: any) => {
                        return (
                          <Typography
                            key={item.id}
                            variant="small"
                            color="blue-gray"
                            className="font-normal w-fit text-sm"
                            placeholder={items.length}
                          >
                            {item.quantity} x {item.brand.toUpperCase()}{' '}
                            {item.name} {item.size.size}
                          </Typography>
                        )
                      })}
                    </div>
                  </div>

                  <div className={'w-full flex justify-between p-4'}>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium cursor-auto w-fit text-sm"
                      placeholder={paymentAmount}
                    >
                      ${paymentAmount.toFixed(2)}
                    </Typography>
                    <span
                      className={`w-fit text-sm capitalize ${paymentStatus === 'unpaid' ? 'text-red-500' : 'text-teal-500'}`}
                    >
                      {paymentStatus}
                    </span>
                  </div>

                  <div className={'w-full flex justify-between p-4'}>
                    <button
                      onClick={() => alert('under development...')}
                      className="w-full py-1 px-1 text-[12px] text-center rounded-md font-semibold bg-yellow-600 hover:bg-yellow-400 text-black duration-200"
                    >
                      Reorder
                    </button>
                  </div>
                </div>
              )
            },
          )}
      </div>
    </div>
  )
}
