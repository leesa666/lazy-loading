import { useEffect, useRef, useState } from "react"

const App = () => {
  const box = useRef(null)
  const [isShow, setIsShow] = useState(false)
  // useEffect(() => {
  //   document.addEventListener('scroll', () => {
  //     const top = box.current.offsetTop
  //     const res = top - window.scrollY <= document.documentElement.clientHeight
  //     console.log(res)
  //     setIsShow(() => {
  //       return res
  //     })
  //   })
  // }, [])
  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     const { top, bottom } = box.current.getBoundingClientRect()
  //     const res = top >= 0 && bottom <= document.documentElement.clientHeight
  //     setIsShow(() => {
  //       return res
  //     })
  //     console.log(res)
  //   })
  // }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entry) => {
      entry.forEach(item => {
        if (item.intersectionRatio > 0 && item.intersectionRatio <= 1) {
          setIsShow(() => {
            return true
          })
        } else {
          setIsShow(() => {
            return false
          })
        }
      })
    })
    observer.observe(box.current)
  }, [])

  return (
    <div style={{ marginTop: '1000px', backgroundColor: 'orange' }} ref={box}>
      {isShow ? 111 : ''}
    </div>
  )
}
export default App