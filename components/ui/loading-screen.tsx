'use client'

import { useEffect, useState } from 'react'

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(false) // ZMIENIONE z true na false

  useEffect(() => {
    // Nic nie robimy - od razu ukrywamy loading screen
    setIsLoading(false)
  }, [])

  if (!isLoading) return null // ZAWSZE zwraca null - nic nie pokazuje

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div>Loading...</div>
    </div>
  )
}