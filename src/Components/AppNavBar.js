import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar} from 'react-bootstrap'

 const avatar = { 
     backgroundColor : "#2277cb" ,
     padding : "1rem" ,
     width : "100%" ,
     textAlign : "center" ,
     fontSize : "30px" ,
 }

const AppNavBar = () => {
  return (
       <div style ={avatar}>
        <Navbar  bg="light">
         <Link to="/" style={{color : "green" , fontFamily : "fantasy"}}> Contact App  </Link>
        </Navbar>
        </div>

  )
}

export default AppNavBar
