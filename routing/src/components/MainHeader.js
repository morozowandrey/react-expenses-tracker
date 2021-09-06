import { NavLink } from 'react-router-dom'
import classes from './MainHeader.module.css'

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className="">
          <li className="">
            <NavLink
              activeClassName={classes.active}
              to="/welcome"
              className=""
            >
              welcome
            </NavLink>
          </li>
          <li className="">
            <NavLink
              activeClassName={classes.active}
              to="/products"
              className=""
            >
              products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader
