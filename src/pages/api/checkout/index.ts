import { ProductProps } from '@/redux/types'
import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import getConfig from 'next/config'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const { publicRuntimeConfig } = getConfig()

export async function createCheckoutSession(
  request: NextApiRequest,
  response: NextApiResponse,
) {
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

      return response.status(200).json({
        session,
      })
    } catch (error: any) {
      console.error(error)
    }
  }
}

export async function getSession(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST' && req.body && req.body.session_id) {
    const { session_id } = req.body

    try {
      const session = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ['line_items'],
      })
      res.status(200).json({ session })
    } catch (error) {
      console.error('Error storing payment information:', error)
      res.status(500).json({ error: 'Failed to store payment information' })
    }
  } else {
    res
      .status(400)
      .json({ error: 'Invalid request method or missing session ID' })
  }
}
