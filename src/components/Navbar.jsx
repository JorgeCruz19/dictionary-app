import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext/ThemeContext'
import { FontContext } from '../context/FontContext/FontContext'
import Logo from '../assets/images/logo.svg'

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { toggleFont } = useContext(FontContext)

  return (
    <nav className='navbar'>
      <img src={Logo} className='navbar-logo' alt='Logo' />
      <div className='navbar-settings'>
        <select
          className='select-font__theme'
          onChange={(e) => {
            toggleFont(e.target.value)
          }}
        >
          <option value='serif'>Serif</option>
          <option value='sans serif'>Sans Serif</option>
          <option value='monospace'>Monospace</option>
        </select>
        <hr className='vertical-divider' />
        <div className='toggle-switch'>
          <label className='toggle-switch__label'>
            <input type='checkbox' className='toggle-switch__checkbox' id='checkbox' checked={theme === 'dark' && true} onChange={toggleTheme} />
            <span className='toggle-switch__circle' />
          </label>
          <svg className='moon' width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M1 10.449C0.998458 12.8283 1.80169 15.1383 3.27914 17.0033C4.75659 18.8683 6.82139 20.1788 9.13799 20.7218C11.4545 21.2647 13.8866 21.0082 16.039 19.994C18.1912 18.9797 19.9373 17.2673 20.9931 15.1352C11.5442 15.1352 6.85799 10.4479 6.85799 1C5.09842 1.87311 3.61767 3.22033 2.58266 4.88981C1.54765 6.5593 0.999502 8.48469 1 10.449Z'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
