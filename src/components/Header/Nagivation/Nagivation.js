import { Link, NavLink } from 'react-router-dom';

const Navigation = ({loggedIn}) => {
  return (
    <nav>
      {loggedIn ? (
        <>
        <div>
          <ul>
            <li><NavLink to="/all-schools">All Schools</NavLink></li>
            <li><NavLink to="/toners">Toners</NavLink></li>
          </ul>
        </div>
        <button type="button">Log out</button>
        </>
      ) : (
        <ul>
          <li><NavLink to="/signup">Register</NavLink></li>
          <li><NavLink to="/signin">Log in</NavLink></li>
        </ul>
      )}
    </nav>
  )
};

export default Navigation;