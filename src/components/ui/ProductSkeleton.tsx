import React from 'react'

// const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/70 before:to-transparent`

export default function ProductSkeleton() {
  return (
    <div className="h-[470px]  w-full flex flex-col justify-between group rounded-lg border border-gray-100 p-2 animate-pulse">
      <div className="w-full flex flex-col gap-1 justify-between">
        <div className="flex self-center w-full h-[230px] max-w-[230px] overflow-hidden transition bg-gray-100 rounded-lg"></div>
        <div className="flex gap-2">
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="h-[40px] w-[40px] overflow-hidden rounded-full bg-gray-100"
              ></div>
            ))}
        </div>

        <div className="h-[40px] bg-gray-100 rounded"></div>
        <div className="h-[40px] bg-gray-100 rounded"></div>
      </div>

      <div className="flex flex-col items-left justify-between gap-2">
        <div className="w-full flex items-center justify-between gap-2 rounded">
          <div className="mr-1 bg-gray-100 rounded-full w-full h-4"></div>
          <div className="bg-gray-100 rounded-full w-full h-4"></div>
        </div>
        <div className="h-9 relative flex w-full max-w-[24rem]">
          <div className="absolute left-0 top-0 rounded-lg font-medium text-white w-9 h-full bg-gray-100"></div>
          <div className="flex h-9 w-full justify-center items-center text-center rounded-md border border-solid border-gray-100 bg-neutral-500 p-2.5 text-gray-900 placeholder-gray-500 outline-none focus:border-gray-100 bg-gray-100"></div>
          <div className="absolute right-0 top-0 rounded-lg font-medium text-white w-9  h-full bg-gray-100"></div>
        </div>
      </div>
    </div>
  )
}
