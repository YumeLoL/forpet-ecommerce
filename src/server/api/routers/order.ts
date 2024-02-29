import { z } from 'zod'
import { DeliveryStatus, OrderStatus, Prisma } from '@prisma/client'
import { publicProcedure, createTRPCRouter } from '../trpc'
import Stripe from 'stripe'
import { loadStripe } from '@stripe/stripe-js'

export const defaultOrderSelect = Prisma.validator<Prisma.OrderSelect>()({
  id: true,
  userId: true,
  addressId: true,
  orderStatus: true,
  paymentStatus: true,
  paymentIntent: true,
  deliveryStatus: true,
  items: true,
  paymentAmount: true,
  createdAt: true,
  updatedAt: true,
})

export const orderRouter = createTRPCRouter({
  all: publicProcedure
    .input(
      z.object({
        userId: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const { userId } = input

      return await ctx.prisma.order.findMany({
        where: {
          userId,
        },
        orderBy: { id: 'desc' },
        select: defaultOrderSelect,
      })
    }),
  create: publicProcedure
    .input(
      z.object({
        userId: z.string(),
        addressId: z.string(),
        purchase: z.array(z.any()),
        paymentAmount: z.number(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { userId, addressId, purchase, paymentAmount } = input

      await ctx.prisma.order.create({
        data: {
          user: {
            connect: { id: userId },
          },
          addressId,
          orderStatus: OrderStatus.OPEN,
          paymentStatus: 'PENDING',
          paymentIntent: 'xxxxxxxxllll',
          deliveryStatus: DeliveryStatus.QUEUED,
          items: ['xx'],
          paymentAmount,
        },
      })
    }),
})
