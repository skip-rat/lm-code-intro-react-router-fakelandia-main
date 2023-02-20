import { NavLink } from "react-router-dom";
import './navbar.css';

const Navbar : React.FC = () =>  (
  <nav className="navigation">
    <NavLink to='/' style={({ isActive }) => ({            
          color: isActive ? '#fff' : '#545e6f',
          background: isActive ? '#7600dc' : '#f0f0f0',
        })}
        >
            Home
    </NavLink>
    <NavLink to='/confession'style={({ isActive }) => ({            
          color: isActive ? '#fff' : '#545e6f',
          background: isActive ? '#7600dc' : '#f0f0f0',
        })}
        >
            Confession
    </NavLink>
    <NavLink to='/misdemeanours'style={({ isActive }) => ({            
          color: isActive ? '#fff' : '#545e6f',
          background: isActive ? '#7600dc' : '#f0f0f0',
        })}
        >
            Misdemeanours
    </NavLink>        
  </nav>
);

export default Navbar;