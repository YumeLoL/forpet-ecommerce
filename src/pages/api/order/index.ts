import { extend } from 'cypress/types/lodash'
import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

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
