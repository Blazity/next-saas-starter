import { PropsWithChildren, useEffect, useState } from 'react'

export default function ClientOnly<T>(props: PropsWithChildren<T>) {
  const { children, ...rest } = props
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) return <div {...rest} />
  return <>{props.children}</>
}
