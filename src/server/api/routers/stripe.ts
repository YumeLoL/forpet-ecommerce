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
            name: z.string(),
            description: z.string(),
            image: z.string(),
          }),
        ),
        email: z.string(),
        userId: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { purchases, email, userId } = input

      const orders = purchases.map((purchase) => ({
        quantity: purchase.quantity,
        price_data: {
          currency: 'usd',
          unit_amount: purchase.price * 100,
          product_data: {
            name: purchase.name,
            description: purchase.description,
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
        metadata: { userId, email },
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

      return stripe.checkout.sessions.retrieve(session_id, {
        expand: ['line_items'],
      })
    }),
})
