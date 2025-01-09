import { NavLink } from 'react-router'
import '../../App.css'
import './header.css'

export function Header () {
  const isNavLinkActive = ({ isActive }) => {
    return `nav-link-item ${isActive ? 'active' : ''}`
  }

  return (
    <section>
      <nav>
        <ul className='ul-links'>
          <li>
            <NavLink
              to='/' className={isNavLinkActive}
            > Home
            </NavLink>
          </li>

          <li>
            <NavLink to='/about' className={isNavLinkActive}> About </NavLink>
          </li>

        </ul>
      </nav>

    </section>
  )
}
