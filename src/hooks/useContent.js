import { useCallback, useEffect, useState } from 'react'
import { fetchFeaturesContent, fetchHeroContent } from '../services/api.js'

export function useHeroContent() {
  const [data, setData] = useState(null)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const load = useCallback(async () => {
    try {
      setStatus('loading')
      setError(null)
      const result = await fetchHeroContent()
      setData(result)
      setStatus('success')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
      setStatus('error')
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  return { data, status, error, retry: load }
}

export function useFeaturesContent() {
  const [data, setData] = useState(null)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const load = useCallback(async () => {
    try {
      setStatus('loading')
      setError(null)
      const result = await fetchFeaturesContent()
      setData(result)
      setStatus('success')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
      setStatus('error')
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  return { data, status, error, retry: load }
}

