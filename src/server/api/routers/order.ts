import { z } from 'zod'
import { DeliveryStatus, OrderStatus, Prisma } from '@prisma/client'
import { publicProcedure, createTRPCRouter } from '../trpc'
import Stripe from 'stripe'

export const defaultOrderSelect = Prisma.validator<Prisma.OrderSelect>()({
  id: true,
  sessionId: true,
  userId: true,
  address: true,
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
        orderBy: { updatedAt: 'desc' },
        select: defaultOrderSelect,
      })
    }),
  create: publicProcedure
    .input(
      z.object({
        sessionId: z.string(),
        userId: z.string(),
        address: z.string(),
        paymentAmount: z.number(),
        paymentStatus: z.string(),
        paymentIntent: z.string(),
        items: z.string(),
        orderStatus: z.nativeEnum(OrderStatus).optional(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const {
        sessionId,
        userId,
        address,
        paymentAmount,
        paymentStatus,
        paymentIntent,
        items,
      } = input

      return await ctx.prisma.order.create({
        data: {
          user: {
            connect: { id: userId },
          },
          address,
          sessionId,
          orderStatus: OrderStatus.OPEN,
          deliveryStatus: DeliveryStatus.QUEUED,
          paymentAmount,
          paymentStatus,
          paymentIntent,
          items,
        },
      })
    }),

  update: publicProcedure
    .input(
      z.object({
        id: z.string().optional(),
        userId: z.string().optional(),
        sessionId: z.string(),
        orderStatus: z.nativeEnum(OrderStatus).optional(),
        deliveryStatus: z.nativeEnum(DeliveryStatus).optional(),
        paymentAmount: z.number().optional(),
        paymentStatus: z.string().optional(),
        paymentIntent: z.string().optional(),
        items: z.string().optional(),
        address: z.string().optional(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const {
        id,
        userId,
        sessionId,
        orderStatus,
        deliveryStatus,
        paymentAmount,
        paymentStatus,
        paymentIntent,
        items,
        address,
      } = input

      // Check if the order with the specified session ID exists
      const existingOrder = await ctx.prisma.order.findFirst({
        where: { sessionId },
      })

      if (!existingOrder) {
        throw new Error(`Order with sessionId ${sessionId} not found.`)
      }

      return await ctx.prisma.order.update({
        where: {
          id: existingOrder.id,
        },
        data: {
          sessionId,
          orderStatus,
          deliveryStatus,
          paymentAmount,
          paymentStatus,
          paymentIntent,
          items,
          address,
        },
      })
    }),
})
