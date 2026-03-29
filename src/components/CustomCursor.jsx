import React, { useState, useEffect } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 250 }
  const springX = useSpring(cursorX, springConfig)
  const springY = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseOver = (e) => {
      const target = e.target.closest('button, a, .clickable')
      if (target) setIsHovered(true)
      else setIsHovered(false)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [cursorX, cursorY, isVisible])

  if (!isVisible) return null

  return (
    <motion.div
      style={{
        translateX: springX,
        translateY: springY,
        left: -12,
        top: -12,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: isClicking ? 0.8 : isHovered ? 2 : 1,
        opacity: 1
      }}
      className="fixed pointer-events-none z-[10000] mix-blend-difference"
    >
      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
        <motion.div 
          animate={{ scale: isHovered ? 0 : 1 }}
          className="w-1 h-1 bg-black rounded-full"
        />
      </div>
    </motion.div>
  )
}

export default CustomCursor
