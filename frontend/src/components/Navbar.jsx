
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Brand Logo */}
        <Link to={"/"} className="navbar-brand" >
          <strong>E-Shop</strong>
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                 Home
              </Link>
               
            
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/createpage"}>
                Create Product
              </Link>
            </li>
            
        
         </ul>
          {/* Search Bar and Cart */}
          <form className="d-flex ms-lg-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search products"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
          <a className="btn btn-primary ms-3" href="/cart">
            🛒 Cart
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
