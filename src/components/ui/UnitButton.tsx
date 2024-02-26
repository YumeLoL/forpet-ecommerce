import React from 'react'

type Props = {
  id: string
  quantity: number
  unit: string
  price: number
  setSelectedUnit: any
  selectedUnit: any
  size?: 'small' | 'large'
}

function UnitButton({
  id,
  quantity,
  unit,
  price,
  setSelectedUnit,
  selectedUnit,
  size = 'small',
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
        className={`cursor-pointer px-1 py-0.5  text-gray-900 border border-green-200 rounded-md ${size === 'small' ? 'text-xs px-1 py-0.5' : 'text-md px-2 py-1'} ${isSelected ? 'bg-green-50' : ''} `}
      >
        {quantity}x{unit}
      </div>
    </div>
  )
}

export default UnitButton
