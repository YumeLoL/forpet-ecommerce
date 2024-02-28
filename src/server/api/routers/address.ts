import { createTRPCRouter, publicProcedure } from '../trpc'
import { Prisma } from '@prisma/client'
import { z } from 'zod'

export const defaultAddressSelect = Prisma.validator<Prisma.AddressSelect>()({
  id: true,
  address: true,
  city: true,
  state: true,
  country: true,
  zipCode: true,
  isDefault: true,
  userId: true,
})

export const addressRouter = createTRPCRouter({
  all: publicProcedure
    .input(
      z.object({
        userId: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const { userId } = input

      return await ctx.prisma.address.findMany({
        where: {
          userId,
        },
        select: defaultAddressSelect,
      })
    }),

  create: publicProcedure
    .input(
      z.object({
        address: z.string(),
        city: z.string(),
        state: z.string(),
        country: z.string(),
        zipCode: z.string(),
        isDefault: z.boolean(),
        userId: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { address, city, state, country, zipCode, userId } = input

      const addressExists = await ctx.prisma.address.findFirst({
        where: {
          userId,
        },
      })

      const addressData = await ctx.prisma.address.create({
        data: {
          address,
          city,
          state,
          country,
          zipCode,
          isDefault: addressExists ? false : true,
          userId,
        },
        select: defaultAddressSelect,
      })

      return addressData
    }),
  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        address: z.string().optional(),
        city: z.string().optional(),
        state: z.string().optional(),
        country: z.string().optional(),
        zipCode: z.string().optional(),
        isDefault: z.boolean().optional(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { id, address, city, state, country, zipCode, isDefault } = input

      return await ctx.prisma.address.update({
        select: defaultAddressSelect,
        where: {
          id,
        },
        data: {
          address,
          city,
          state,
          country,
          zipCode,
          isDefault,
        },
      })
    }),
  delete: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { id } = input

      await ctx.prisma.address.delete({
        where: {
          id,
        },
        select: defaultAddressSelect,
      })

      return {
        message: 'Address deleted',
      }
    }),
})
