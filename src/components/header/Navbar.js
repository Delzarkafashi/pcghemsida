import { Link, resolvePath, useMatch, useResolvedPath } from "react-router-dom"
import SearchBar from './SearchBar';
import "./header.css"

export default function Navbar() {
  return(
    
    
    
    <nav className="nav">
    <div className="user-actions">
      <Link to="/login">Logga in</Link>
      <Link to="/signup">Registrera</Link>
      <Link to="/cart">Korg</Link>
      </div>
      <div className="SN">
      <div className="searchBar">
        <SearchBar />
      </div>
        {/* <Link to="/" className="site-title">
        Performance Coach Gear
        </Link> */}
        <ul className="nav-bar">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/product">Product</CustomLink>
        <CustomLink to="/coaching">Coaching</CustomLink>
        <CustomLink to="/customerservice">Customer service</CustomLink>
        </ul>
      </div>
        
    </nav>
    
  )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActiv = useMatch({ path: resolvedPath.pathname, end: true })

    return (
    <li className={isActiv ? "active" : ""}>
        <Link to={to} {...props}>
            {children}
            </Link>
        </li>
    )
}