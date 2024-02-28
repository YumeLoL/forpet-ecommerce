import { ProductProps } from '@/redux/types'
import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

  if (request.method === 'POST' && request.body) {
    try {
      const { purchases, email } = request.body

      const orders = purchases.map((purchase: ProductProps) => ({
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
        metadata: { email },
      })

      return response.status(200).json({ id: session.id })
    } catch (error: any) {
      console.error(error)
    }
  }
}
