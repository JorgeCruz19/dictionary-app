import { useState, useEffect } from 'react'
import { FontContext } from './FontContext'

export const FontContextWrapper = ({ children }) => {
  const [font, setFont] = useState('')

  const toggleFont = (font) => {
    setFont(font)
  }

  useEffect(() => {
    if (font === 'sans serif') {
      document.body.classList.remove('font-serif')
      document.body.classList.remove('font-monospace')
      document.body.classList.add('font-sans-serif')
    } else if (font === 'monospace') {
      document.body.classList.remove('font-serif')
      document.body.classList.remove('font-sans-serif')
      document.body.classList.add('font-monospace')
    } else {
      document.body.classList.remove('font-sans-serif')
      document.body.classList.remove('font-monospace')
      document.body.classList.add('font-serif')
    }
  }, [font])

  return <FontContext.Provider value={{ font, toggleFont }}>{children}</FontContext.Provider>
}
