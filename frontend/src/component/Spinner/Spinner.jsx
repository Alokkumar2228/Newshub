import React, { Component } from 'react'
import assets from '../../assets/asset'


export default class Spinner extends Component {
  render() {
    return (
      <div className="img-container" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <img src={assets.spinner} alt="" style={{ height: '50px', width: '50px'}} />
      </div>
    )
  }
}


// Note :  
// WHAT THIS MEANS  

// this.state.loading && <Spinner/>

// this means agar loading true hai tab spinner ko dikhao 
// warna mat dikhao