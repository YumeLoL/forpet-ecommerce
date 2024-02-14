import { useQuery } from '@/hooks'
import React, { useCallback, useEffect, useState, useRef } from 'react'

interface MultiRangeSliderProps {
  min: number
  max: number
}

const MultiRangeSlider: React.FC<MultiRangeSliderProps> = ({ min, max }) => {
  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)
  const minValRef = useRef<HTMLInputElement>(null)
  const maxValRef = useRef<HTMLInputElement>(null)
  const range = useRef<HTMLDivElement>(null)
  const { addQuery: addGte, removeQuery: removeGte } = useQuery({
    shallow: true,
    scroll: true,
  })
  const { addQuery: addLte, removeQuery: removeLte } = useQuery({
    shallow: true,
    scroll: true,
  })

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  )

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal)
      const maxPercent = getPercent(+maxValRef.current.value)

      if (range.current) {
        range.current.style.left = `${minPercent}%`
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [minVal, getPercent])

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value)
      const maxPercent = getPercent(maxVal)

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [maxVal, getPercent])

  useEffect(() => {
    removeGte('gte')
    removeLte('lte')
  }, [])

  return (
    <div className="flex items-center justify-center pb-12">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxVal - 1)
          setMinVal(value)
          event.target.value = value.toString()
          addGte('gte', value)
        }}
        className="thumb z-30"
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + 1)
          setMaxVal(value)
          event.target.value = value.toString()
          addLte('lte', value)
        }}
        className="thumb z-40"
      />

      <div className="relative w-full mx-2">
        <div className="absolute rounded-sm h-1 w-full bg-blue-gray-200 z-10" />
        <div
          ref={range}
          className="absolute rounded-sm h-1 bg-primary-light z-20"
        />
        <div className="text-black mt-5 text-xs absolute left-2 ">{minVal}</div>
        <div className="text-black mt-5 text-xs absolute right-2">{maxVal}</div>
      </div>
    </div>
  )
}

export default MultiRangeSlider
