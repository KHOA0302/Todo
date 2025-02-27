import { useEffect } from 'react'

function useDebounce(data) {
  const [dataDebounce, setDataDebounce] = useState(data)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDataDebounce(data)
    }, 500)
    return () => clearTimeout(timer)
  }, [data])
  return dataDebounce
}

export default useDebounce
