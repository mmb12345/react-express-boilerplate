import React, { useEffect } from 'react'
import proxify from './utils/proxify'

export default () => {
  useEffect(() => {
    (async () => {
      const data = await fetch(proxify('/hello')).then(res => res.json())

      console.log(data)
    })()
  }, [])

  return (
    <div>
      <img src='/sad.png' />
    </div>
  )
}