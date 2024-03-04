import { PrimaryLayout } from '@/layouts/PrimaryLayout'
import { clearCart } from '@/redux/slices'
import { api } from '@/utils/api'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import router from 'next/router'
import React, { ReactElement, useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function SuccessPage() {
  const { data: user, status } = useSession()
  const { session_id } = router.query
  const dispatch = useDispatch()
  const {
    data: payment,
    isSuccess,
    isError,
    isLoading,
  } = api.checkout.getPurchaseDetails.useQuery({
    session_id: session_id as string,
  })
  const { mutate: updateOrder } = api.order.update.useMutation({
    onSettled: () => {
      dispatch(clearCart())
    },
  })

  useEffect(() => {
    console.log(payment)

    if (payment) {
      updateOrder({
        sessionId: payment.id,
        paymentIntent: payment.payment_intent as string,
        paymentStatus: payment.payment_status,
      })
    }
  }, [payment])

  return (
    <div className="w-full h-[40rem] flex flex-col gap-4 justify-center items-center">
      {isSuccess && (
        <>
          <h2>Your payment has been successfully processed</h2>{' '}
          <p>Thank you for shopping with us</p>
          <Link href="/my-account" className="text-blue-800 font-bold">
            Track your orders
          </Link>
        </>
      )}
      {isLoading && <h2>Please wait...</h2>}
      {isError && <h2>Something went wrong, please try again</h2>}
    </div>
  )
}

SuccessPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout
      seo={{
        title: 'Payment Success',
        description: 'Payment Success',
      }}
    >
      {page}
    </PrimaryLayout>
  )
}
