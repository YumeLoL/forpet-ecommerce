import { createTRPCRouter } from './trpc'
import { collectionRouter } from './routers/collection'
import { productRouter } from './routers/product'
import { addressRouter } from './routers/address'
import { orderRouter } from './routers/order'
import { checkoutRouter } from './routers/stripe'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  collection: collectionRouter,
  product: productRouter,
  // merchant: merchantRouter,
  address: addressRouter,
  order: orderRouter,
  checkout: checkoutRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
