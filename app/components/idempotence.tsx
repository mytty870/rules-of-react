'use client'

import { useEffect, useState } from "react"


export const Idempotence = () => {
  // これだとレンダーごとに同じ結果が得られない
  const time1 = new Date()

  // レンダーしたとしても同じ結果が得られる
  const [time2, setTime2] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => {
      setTime2(new Date())
    }, 1000)

    return () => clearInterval(id)
  }, [])

  const [count, setCount] = useState(0)


  const handleCountUp = () => {
    setCount(count => count + 1)
  }

  return (
    <>
    <div>time1: {time1.toLocaleString()}</div>
    <div>time2: {time2.toLocaleString()}</div>
    <button onClick={handleCountUp}>Count Up</button>
    <div>{count}</div>
    </>
  )
}
