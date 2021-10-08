import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';

const UserList = () => {
const [user, setUser] = useState([]) 
const [id, setId] = useState(1)
  useEffect(()=>{
axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>{console.log(res)
setUser(res.data)})
 
 .catch(err=>{console.log(err)})
  },[id])

    return (
        <div style={{marginLeft:"500px" ,marginTop:"100px",border:"3px solid  grey", width:"500px",borderRadius:"20px",backgroundColor:"bisque"}}>

            <input style={{marginLeft:"50px",marginTop:"20px",borderRadius:"5px"}} type="text" value={id} onChange={e=>setId(e.target.value)} />
           
            <ul style={{marginLeft:"30px"}}>
            <li>id : {user.id}</li> 

                <li  >name : {user.name}</li>
                <li>username : {user.username}</li>
                  <li> phone : {user.phone}</li> 
                  <li> website: {user.website}</li> 

                </ul>
            {/* <ul>
                {
                    user.map(el=><li key={el.id}>
                        {el.name}</li>
                        )
                }
            </ul> */}
        </div>
    )
}

export default UserList
