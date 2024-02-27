import MultiRangeSlider from '../ui/RangeSlider'

export const ProductPrice = () => {
  return (
    <div className="rounded-lg">
      <p className="flex w-full items-center justify-between px-2.5 py-2.5 text-sm font-semibold text-neutral-600 mb-4">
        Price
      </p>

      <MultiRangeSlider min={0} max={150} />
    </div>
  )
}
