import React, { useState , useEffect } from 'react'
import axios from 'axios' 
import {Spinner} from 'react-bootstrap'

const ProfilDetails = (props) => {
//     console.log(props.match.params.userId)

  const [user , setUser] = useState({});
  const [loading , setLoading] = useState(true);
 
    useEffect(() => {
     axios.get(`https://jsonplaceholder.typicode.com/users/${props.match.params.userId}`)
    .then((res) => {
    setUser(res.data);
    setLoading(false);
  })
}, []);
  
   if (loading) {
       return   ( 
                  <div style={{width : "100" , textAlign : "center" , margin : "auto"}}>
                     <Spinner animation="border" />
                   </div>
        )
   }

    return (
        <div>
            <h1>{user.name}</h1>
            <h1> {user.email} </h1>
            <h1> {user.phone} </h1>
            <h1> {user.address.city} </h1>
            
          
        </div>
    )
}

export default ProfilDetails
