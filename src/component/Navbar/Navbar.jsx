import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import assets from '../../assets/asset';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {

const [inputValue,setInputValue] = useState("");

const navigate = useNavigate();


const handleInputChange= (event) =>{
    setInputValue(event.target.value);
  }

const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submit action (refresh)
    console.log(inputValue) ;

    let query= inputValue;

    if(query === "Business"|| query === "business"){
      navigate('./business')
    }else if(query === "Entertainment"||query === "entertainment"){
      navigate('./entertainment')
    }else if(query === "General"||query === "general"){
      navigate('./general')
    }else if(query === "Science"||query === "science"){
      navigate('./science')
    }else if(query === "Sports"||query === "sports"){
      navigate('./sports')
    }else if(query === "Technology"||query === "technology"){
      navigate('./technology')
    }else if(query === "Health"||query === "health"){
      navigate('./health')
    }


  }




  return (
    <div>
    <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
<div className="container-fluid">
<a className="navbar-brand" href="/"><img src={assets.logo} alt="" style={{width:'100px', height:'50px'}} /></a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
      <NavLink  className="nav-link " aria-current="page" to="/" >Home</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link " aria-current="page" to="/business">Business</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link " aria-current="page" to="/entertainment">Entertainment</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link " aria-current="page" to="/general">General</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link " aria-current="page" to="/science">Science</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link " aria-current="page" to="/sports">Sports</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link " aria-current="page" to="/technology">Technology</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link " aria-current="page" to="/health">Health</NavLink>
    </li>

    </ul>
   
    <form className="d-flex" onSubmit={handleSubmit}>
      <input className="form-control me-2" type="search" placeholder="Search News" aria-label="Search" value={inputValue} onChange={handleInputChange} />
      <button className="btn btn-outline-success"  type="submit" >Search</button>
    </form>

    
</div>
</div>
</nav>
    
  </div>
  )
}

export default Navbar



//you can ony use useNavigate() hooks in functional based component



// import React, { Component } from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
// import assets from '../../assets/asset';
// import { NavLink } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';

// class Navbar extends Component {

 
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputValue:"",
//     };
//   }

//   handleInputChange= (event) =>{
//     this.setState({inputValue:event.target.value});
//   }

//   handleSubmit = (event) => {
//     event.preventDefault(); // Prevents the default form submit action (refresh)
//     console.log(this.state.inputValue); 

//     let query= this.state.inputValue;

//     if(query === "business"){
//       navigate('./navigate')
//     }if(query === "entertainment"){
//       navigate('./entertainment')
//     }if(query === "general"){
//       navigate('./general')
//     }if(query === "science"){
//       navigate('./science')
//     }if(query === "sports"){
//       navigate('./sports')
//     }if(query === "technology"){
//       navigate('./technology')
//     }if(query === "health"){
//       navigate('./health')
//     }


//   }



//   render() {
//     return (
//       <div>
//         <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="/"><img src={assets.logo} alt="" style={{width:'100px', height:'50px'}} /></a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <NavLink  className="nav-link " aria-current="page" to="/" >Home</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link " aria-current="page" to="/business">Business</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link " aria-current="page" to="/entertainment">Entertainment</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link " aria-current="page" to="/general">General</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link " aria-current="page" to="/science">Science</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link " aria-current="page" to="/sports">Sports</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link " aria-current="page" to="/technology">Technology</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link " aria-current="page" to="/health">Health</NavLink>
//         </li>
  
//         </ul>
       
//         <form className="d-flex" onSubmit={this.handleSubmit}>
//           <input className="form-control me-2" type="search" placeholder="Search News" aria-label="Search" value={this.state.inputValue} onChange={this.handleInputChange} />
//           <button className="btn btn-outline-success"  type="submit" >Search</button>
//         </form>

        
//     </div>
//   </div>
// </nav>
        
//       </div>
//     )
//   }

  
// }

// export default withRouter(Navbar);







//NOTE :- how you can get the value from input box


// import React, { useState } from 'react';

// function MyComponent() {
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (event) => {
//     // event.target refers to the input element
//     // event.target.value refers to the current value of the input field
//     setInputValue(event.target.value);
//   };

//   return (
//     <div>
//       <label>
//         Enter something:
//         <input type="text" value={inputValue} onChange={handleInputChange} />
//       </label>
//       <p>The current value is: {inputValue}</p>
//     </div>
//   );
// }

// export default MyComponent;


// Breakdown (of event.target.value):
// event: This is the event object that gets passed to the event handler when an event 
// occurs (e.g., onChange, onClick, etc.). It contains information about the event, 
// such as the type of event, the element that triggered the event, and other relevant data.

// target: The target property of the event object refers to the DOM element that the event
//  was triggered on. For example, if the user types into an <input> field,
//  event.target will refer to that <input> element.

// value: The value property of the target refers to the current value of the input element.
//  For an <input> element, it would be the text that the user has typed into the field. 
//  For a <select> element, it would be the selected option.