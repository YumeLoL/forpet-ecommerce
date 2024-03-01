import { z } from 'zod'
import { DeliveryStatus, OrderStatus, Prisma } from '@prisma/client'
import { publicProcedure, createTRPCRouter } from '../trpc'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export const defaultOrderSelect = Prisma.validator<Prisma.OrderSelect>()({
  id: true,
  userId: true,
  sessionId: true,
  addressId: true,
  orderStatus: true,
  paymentStatus: true,
  paymentIntent: true,
  deliveryStatus: true,
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
        session_id: z.string(),
        userId: z.string(),
        addressId: z.string(),
        paymentAmount: z.number(),
        paymentStatus: z.string(),
        paymentIntent: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const {
        session_id,
        userId,
        paymentAmount,
        paymentStatus,
        paymentIntent,
      } = input

      await ctx.prisma.order
        .create({
          data: {
            user: {
              connect: { id: userId },
            },
            addressId: 'test',
            sessionId: session_id,
            orderStatus: OrderStatus.OPEN,
            deliveryStatus: DeliveryStatus.QUEUED,
            paymentAmount,
            paymentStatus,
            paymentIntent,
          },
        })
        .then((res) => {
          console.log('success res', res)
        })
        .catch((err) => {
          console.log('err', err)
        })
    }),
})
