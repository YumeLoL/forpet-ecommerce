import { PrimaryLayout } from '@/layouts/PrimaryLayout'
import { clearCart } from '@/redux/slices'
import { api } from '@/utils/api'
import { useSession } from 'next-auth/react'
import router from 'next/router'
import React, { ReactElement, useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function SuccessPage() {
  const { data: user, status } = useSession()
  const { session_id } = router.query
  const dispatch = useDispatch()
  const { data: payment } = api.checkout.getPurchaseDetails.useQuery({
    session_id: session_id as string,
  })
  const { mutate: order } = api.order.create.useMutation({
    onSettled: () => {
      dispatch(clearCart())
    },
  })

  useEffect(() => {
    if (payment?.status === 'complete') {
      const userId = payment?.metadata?.userId as string
      order({
        session_id: session_id as string,
        userId,
        addressId: 'ss',
        paymentAmount: payment.amount_total as number,
        paymentIntent: payment.payment_intent as string,
        paymentStatus: payment.payment_status,
      })
    }
  }, [payment])

  return (
    <div className="w-full h-[40rem] flex flex-col gap-4 justify-center items-center">
      <h2>Your payment has been successfully processed</h2>
      <p>Thank you for shopping with us</p>
      <p>{JSON.stringify(payment)}</p>

      <a className="text-blue-800 font-bold">Track your orders</a>
    </div>
  )
}

SuccessPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout
      seo={{
        title: 'Payment Success',
        description: 'Payment Success',
        // canonical: 'https://karashop.vercel.app/products',
      }}
    >
      {page}
    </PrimaryLayout>
  )
}
