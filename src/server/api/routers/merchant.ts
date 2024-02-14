import { createTRPCRouter, publicProcedure } from '../trpc'
import { Prisma } from '@prisma/client'
import { z } from 'zod'
import { defaultProductSelect } from './product'

export const defaultMerchantSelect = Prisma.validator<Prisma.MerchantSelect>()({
  id: true,
  name: true,
  email: true,
  phone: true,
  brandName: true,
  slug: true,
  isActive: true,
  status: true,
  products: {
    select: defaultProductSelect,
  },
})

export const merchantRouter = createTRPCRouter({
  all: publicProcedure.query(
    async ({ ctx }) =>
      await ctx.prisma.merchant.findMany({
        select: defaultMerchantSelect,
        orderBy: { id: 'asc' },
      }),
  ),
})
