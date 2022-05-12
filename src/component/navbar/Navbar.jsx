import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo"> LuxStaybooking</span>
            <div className="navItems">
                <button className="narButton">Register</button>
                <button className="narButton">Login</button>

            </div>
        </div>
    </div>
  )
}

export default Navbar