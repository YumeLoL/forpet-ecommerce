import { z } from 'zod'
import { publicProcedure, createTRPCRouter } from '../trpc'
import Stripe from 'stripe'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export const checkoutRouter = createTRPCRouter({
  createCheckoutSession: publicProcedure
    .input(
      z.object({
        purchases: z.array(
          z.object({
            quantity: z.number(),
            price: z.number(),
            size: z.object({ size: z.string() }),
            name: z.string(),
            brand: z.string(),
            image: z.string(),
          }),
        ),
        email: z.string(),
        userId: z.string(),
        address: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { purchases, email, userId, address } = input

      console.log('purchases', purchases)

      const orders = purchases.map((purchase) => ({
        quantity: purchase.quantity,
        price_data: {
          currency: 'aud',
          unit_amount: Math.round(purchase.price * 100),
          product_data: {
            name: purchase.brand + ' ' + purchase.name,
            description: purchase.size.size,
            images: [`${publicRuntimeConfig.basePath}${purchase.image}`],
          },
        },
      }))

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: orders,
        mode: 'payment',
        success_url: `${process.env.NEXTAUTH_URL}success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXTAUTH_URL}/my-cart`,
        metadata: {
          userId,
          email,
          address,
        },
      })

      return { session }
    }),
  getPurchaseDetails: publicProcedure
    .input(
      z.object({
        session_id: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const { session_id } = input

      return stripe.checkout.sessions.retrieve(session_id)
    }),
})
