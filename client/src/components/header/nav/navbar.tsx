import { NavLink } from "react-router-dom";
import './navbar.css';

const Navbar : React.FC = () =>  (
  <nav className="navigation">
    <NavLink className="navigation__link"
             to='/' 
             style={({ isActive }) => ({            
                color: isActive ? '#fff' : '#545e6f',
                // background: isActive ? '#7600dc' : '#3474e6',
        })}
        >
            Home
    </NavLink>
    <NavLink className="navigation__link"
             to='/misdemeanours'
             style={({ isActive }) => ({            
                color: isActive ? '#fff' : '#545e6f',
                // background: isActive ? '#7600dc' : '#3474e6',
        })}    
        >
            Misdemeanours            
    </NavLink>
    <NavLink className="navigation__link"
             to='/confession'
             style={({ isActive }) => ({            
              color: isActive ? '#fff' : '#545e6f',
              // background: isActive ? '#7600dc' : '#3474e6',
        })}
        >
            Confess To Us
    </NavLink>        
  </nav>
);

export default Navbar;