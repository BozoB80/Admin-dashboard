import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'

const Button = ({ icon, bgColor, bgHoverColor, color, size, text, borderRadius, width }) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius}}
      className={`text-${size} w-${width} p-3 hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  )
}

export default Button