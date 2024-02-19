import React from 'react'

type Props = {
  id: string
  quantity: number
  unit: string
  price: number
  setSelectedUnit: any
  selectedUnit: any
}

function UnitButton({
  id,
  quantity,
  unit,
  price,
  setSelectedUnit,
  selectedUnit,
}: Props) {
  const isSelected =
    selectedUnit &&
    selectedUnit.quantity === quantity &&
    selectedUnit.unit === unit

  return (
    <div>
      <div
        onClick={() => {
          setSelectedUnit({ id, quantity, unit, price })
        }}
        className={`cursor-pointer text-xs font-medium text-gray-900 border border-gray-300 rounded-md px-1 py-0.5 ${isSelected ? 'bg-gray-200' : ''} `}
      >
        {quantity}x{unit}
      </div>
    </div>
  )
}

export default UnitButton
