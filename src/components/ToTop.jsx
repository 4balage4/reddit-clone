
import { FaChevronCircleUp } from "react-icons/fa";
import {scrollToTop} from '../utils/toTop'
import {useEffect, useState} from 'react'


function ToTop() {
  const [active, setActive] = useState('hidden')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setActive('')
      } else {
        setActive('hidden')
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (

    <div className={`to-top ${active}`} onClick={scrollToTop}><FaChevronCircleUp /></div>
  )
}

export default ToTop
