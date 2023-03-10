import { useState, useEffect, useRef } from 'react'
import { ThemeContext } from './ThemeContext'

export const ThemeContextWrapper = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const bodyEl = useRef(document.body)

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
    const prefersLightScheme = window.matchMedia('(prefers-color-scheme: light)')

    if (prefersDarkScheme.matches) {
      setTheme('dark')
    } else if (prefersLightScheme.matches) {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      bodyEl.current.classList.add('dark')
      bodyEl.current.classList.remove('light')
    } else {
      bodyEl.current.classList.add('light')
      bodyEl.current.classList.remove('dark')
    }
  }, [theme])

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
