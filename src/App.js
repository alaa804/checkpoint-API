import React , {useState , useEffect} from 'react' 
import axios from 'axios' 
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom' 
import {Spinner} from 'react-bootstrap'
import './App.css'
import AppNavBar from './Components/AppNavBar'
import ProfilList from './Components/ProfilList'
import ProfilDetails from './Components/ProfilDetails'




function App() {
  const [users , setUsers] = useState([]);
  const [loading , setLoading] =useState(true);

useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    setUsers(res.data);
    setLoading(false)
  })
}, []);

if (loading) {
          gitreturn (
        <div style={{width : "100" , textAlign : "center" , margin : "auto"}}>
           <Spinner animation="border" />
        </div>
      )
}

   return (

       <Router>
        <AppNavBar />
         <Switch>
           <Route exact path = "/">
           < ProfilList users ={users} />
           </Route>
           <Route exact path ="/profil/:userId" component = {ProfilDetails} >
            
           </Route>
        
         </Switch>


       
      </Router>
   )
    
    
}

export default App;
