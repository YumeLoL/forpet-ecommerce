import { createTRPCRouter, publicProcedure } from '../trpc'
import { Prisma } from '@prisma/client'
import { z } from 'zod'

export const defaultCollectionSelect =
  Prisma.validator<Prisma.CollectionSelect>()({
    id: true,
    name: true,
    slug: true,
    types: true,
    children: {
      select: {
        id: true,
        name: true,
        slug: true,
        types: true,
      },
    },
  })

export const collectionRouter = createTRPCRouter({
  all: publicProcedure.query(
    async ({ ctx }) =>
      await ctx.prisma.collection.findMany({
        select: defaultCollectionSelect,
        where: {
          parent: null,
        },
        orderBy: { id: 'asc' },
      }),
  ),
  getAllBySlug: publicProcedure
    .input(
      z.object({
        slug: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const { slug } = input
      const parentCollection = await ctx.prisma.collection.findFirst({
        where: {
          slug: slug,
        },
      })

      if (!parentCollection) {
        return []
      }

      return await ctx.prisma.collection.findMany({
        select: defaultCollectionSelect,
        where: {
          parentId: parentCollection.id,
        },
      })
    }),
})
