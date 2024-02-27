import { useState } from 'react'

function useFakeLoading() {
  const [isLoading, setIsLoading] = useState(false)

  // Simulate loading when adding a product
  const updateProduct = () => {
    setIsLoading(true)
    // Simulate an asynchronous operation (e.g., adding a product)
    setTimeout(() => {
      setIsLoading(false) // Turn off loading after a delay (simulating async operation completion)
    }, 2000) // Adjust the delay as needed
  }

  return {
    isLoading,
    updateProduct,
  }
}

export default useFakeLoading
