import React, { useEffect } from 'react'

export default () => {
  useEffect(() => {
    (async () => {
      const data = await fetch('/api/hello').then(res => res.json())

      console.log(data)
    })()
  }, [])

  return (
    <div>
      wassup
    </div>
  )
}