import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Navbar extends Component {
    
  render() {

    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top "style={{background:"red"}}>
  <div className="container-fluid">
    <img src='favicon-96x962.png' className="img mx-2" alt='img' style={{borderRadius:"50px",display:"flex",alignItems:"center",height:"50px"}}/>
    <Link className="navbar-brand" to="/"  style={{color:"white",fontSize:"1.5rem" }}>InfoStream</Link>

    <button className="navbar-toggler"  style={{color:"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" style={{color:"white"}}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 " >
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/"  style={{color:"white"}}>Home</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/business"  style={{color:"white"}}>Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment"  style={{color:"white"}}>Entertainment</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/health"  style={{color:"white"}}>Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science"  style={{color:"white"}}>Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports"  style={{color:"white"}}>Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology"  style={{color:"white"}}>Technology</Link>
        </li>
        
       
          
        
        
      </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar;
