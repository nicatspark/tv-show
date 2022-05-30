import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import TinyGesture from 'tinygesture'

export function useNavigateOnRightSwipe() {
  const navigate = useNavigate()
  const gesture = useRef<TinyGesture>()

  useEffect(() => {
    if (!!gesture.current) return
    gesture.current = new TinyGesture(document.body)
    gesture.current.on('swiperight', () => {
      if (gesture.current?.swipedHorizontal) navigate('/')
    })
  }, [])
}
