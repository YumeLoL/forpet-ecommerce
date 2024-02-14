import { useRouter } from 'next/router'
import MultiRangeSlider from '../ui/RangeSlider'

export const ProductPrice = () => {
  const router = useRouter()

  const { gte, lte } = router.query
  console.log(gte, lte)

  return (
    <div className="rounded-lg bg-neutral-100 ">
      <p className="flex w-full items-center justify-between px-2.5 py-2.5 text-sm font-semibold text-neutral-600 mb-4">
        Price
      </p>

      <MultiRangeSlider min={Number(gte) && 0} max={Number(lte) && 150} />
    </div>
  )
}

