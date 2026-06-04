import {useEffect,useState} from "react";
function App(){
 const [users,setUsers]=useState([]);
 useEffect(()=>{fetch("http://localhost:8000/users").then(r=>r.json()).then(setUsers)},[]);
 return <div><h1>User Management</h1>{users.map(u=><p key={u.id}>{u.name}</p>)}</div>;
}
export default App;
