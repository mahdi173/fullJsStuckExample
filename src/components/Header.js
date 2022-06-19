import {useContext } from 'react'; 
import AuthContext from '../contexts/AuthContext';
import {useNavigate } from 'react-router-dom';

function Header () {


        const navigate = useNavigate();  
        const {user, logout}= useContext(AuthContext);
        const handleLogout =() =>  {logout();};
        const handleLogin=()=> {
            navigate('/auth/LogIn');
        };
        const handleRegistre=()=> {
            navigate('/auth/SignUp');
        };

        return (

<header id="header" className="header fixed-top">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt="" />
        <span>FlexStart</span>
      </a>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" >Home</a></li>
          <li><a className="nav-link scrollto" >About</a></li>
          {user ? 
            (
              <ul>
              <li><a className="nav-link scrollto" >Profil</a></li>
              <li><a className="nav-link scrollto" onClick={handleLogout}>LogOut</a></li>
              </ul>
            )
             :
             (
                <ul>
              <li><a className="nav-link scrollto"  onClick={handleRegistre}>SignUp</a></li>
              <li><a className="nav-link scrollto" onClick={handleLogin}>LogIn</a></li>
               </ul>

             )
           }          
          <li className="dropdown"><a ><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a >Drop Down 1</a></li>
              <li className="dropdown"><a ><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a >Deep Drop Down 1</a></li>
                  <li><a>Deep Drop Down 2</a></li>
                  <li><a >Deep Drop Down 3</a></li>
                  <li><a >Deep Drop Down 4</a></li>
                  <li><a >Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a >Drop Down 2</a></li>
              <li><a>Drop Down 3</a></li>
              <li><a >Drop Down 4</a></li>
            </ul>
          </li>
          <li><a className="nav-link scrollto" >Contact</a></li>
          <li><a className="getstarted scrollto" >Get Started</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
)

    }

export default Header;