import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios';
import ListOfUsers from './Components/ListOfUsers';
import Details from './Components/Details';
import {Routes, Route} from 'react-router-dom'
function App() {
  const [users, setUsers] = useState([])
  
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .catch(err=>console.log(err))
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <ListOfUsers users = {users}/>}></Route>
      <Route path='/Details/:id' element={<Details users={users}/>} ></Route>
      </Routes>
      
    </div>
  );
}

export default App;