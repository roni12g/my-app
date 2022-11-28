import React from 'react';


const navbar=()=> {
return(
<nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
<div className="container">
  <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarCollapse">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a href="/login" className="nav-link">Login</a>
      </li>
      <li className="nav-item">
        <a href="/home" className="nav-link">Home</a>
      </li>
      <li className="nav-item">
        <a href="/about" className="nav-link">About</a>
      </li>
 

   
    </ul>
  </div>

</div>
</nav>

);

}

export default navbar;