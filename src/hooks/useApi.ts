import axios from 'axios'
import { useEffect, useState } from 'react'

export function useApi<T = unknown>(url: string) {
  const [data, setData] = useState<T | []>([])

  useEffect(() => {
    axios.get(url)
    .then(response => response.data.data)
    .then(data => setData(data))
    .catch(error => console.log(error))
  }, [])

  return { data }
}