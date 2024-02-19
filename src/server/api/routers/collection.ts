import { createTRPCRouter, publicProcedure } from '../trpc'
import { CollectionType, Prisma } from '@prisma/client'
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
        type: z.nativeEnum(CollectionType),
      }),
    )
    .query(async ({ input, ctx }) => {
      const { slug, type } = input
      const parentCollection = await ctx.prisma.collection.findFirst({
        where: {
          slug: slug,
        },
      })

      if (!parentCollection) {
        return []
      }

      const cates = await ctx.prisma.collection.findMany({
        select: defaultCollectionSelect,
        where: {
          parentId: parentCollection.id,
        },
      })

      const filteredCollections = cates.filter((collection) =>
        collection.types.includes(type),
      )

      return filteredCollections
    }),
})
