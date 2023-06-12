import { Link } from "react-router-dom";
import Routes from './routes/Index.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'


export default function App() {

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
          <div className="container">
            <Link to="/" className="navbar-brand">< FontAwesomeIcon icon={faHome} /> Home</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/posts" className="nav-link active" aria-current="page">Post</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link active" aria-current="page">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link active" aria-current="page">Contact</Link>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0" role="search">
                <li>
                <Link to="/logout" className="btn btn-primary"> LogOut < FontAwesomeIcon icon={faRightFromBracket} /></Link>
                </li>
          
                  
                
                
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <Routes />

    </>
  )
  
}