import { z } from 'zod'
import { CollectionType, Prisma } from '@prisma/client'
import { publicProcedure, createTRPCRouter } from '../trpc'
import { defaultCollectionSelect } from './collection'

export const defaultProductSelect = Prisma.validator<Prisma.ProductSelect>()({
  id: true,
  name: true,
  description: true,
  slug: true,
  rate: true,
  images: {
    select: {
      imageURL: true,
      imageBlur: true,
    },
  },
  types: true,
  collection: {
    select: defaultCollectionSelect,
  },
  merchant: {
    select: {
      id: true,
      brandName: true,
      slug: true,
    },
  },
  prices: {
    select: {
      id: true,
      price: true,
      quantity: true,
      unit: true,
    },
  },
})

export const productRouter = createTRPCRouter({
  all: publicProcedure
    .input(
      z.object({
        types: z.nativeEnum(CollectionType).optional(),
        slug: z.string().optional(),
        page: z.number().optional(),
        rate: z.number().optional(),
        gte: z.number().optional(),
        lte: z.number().optional(),
        cate: z.string().array().optional(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const {
        types = 'CAT',
        slug,
        page = 1,
        rate = 0,
        gte = 0,
        lte = 1000000,
        cate = [],
      } = input

      const take = 12
      const skip = take * (page - 1)

      // Get collection IDs from cate array
      let collectionIds: number[] = []
      if (cate.length > 0) {
        const collections = await ctx.prisma.collection.findMany({
          where: { slug: { in: cate } }, // Find top-level collections by slug
          select: { id: true },
        })
        collectionIds = collections.map((collection) => collection.id)
      }

      const where: Prisma.ProductWhereInput = {
        types: { hasSome: [types] },
        published: true,
        rate: rate ? { gte: rate } : undefined,
        // price: { gte, lte },
        collectionId:
          collectionIds.length > 0 ? { in: collectionIds } : undefined,
      }

      if (slug) {
        const isParent = await ctx.prisma.collection.findFirst({
          where: {
            slug,
            parent: {
              is: null,
            },
          },
        })

        where.collection = isParent ? { parentId: isParent.id } : { slug }
      }

      const [products, totalCount] = await ctx.prisma.$transaction([
        ctx.prisma.product.findMany({
          select: defaultProductSelect,
          where,
          orderBy: { id: 'asc' },
          take,
          skip,
        }),
        ctx.prisma.product.count({ where }),
      ])

      return {
        products,
        totalCount,
      }
    }),

  one: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const { id } = input
      return await ctx.prisma.product.findUnique({
        where: { id },
        select: defaultProductSelect,
      })
    }),
})
