import React ,{useState} from 'react';
import Button from './Button'
import Input from './Input';

function Login() {

    let [username,setUsername] = useState("");
    let [password,setPassword] = useState("");

  return (
    <div>
        <Input onChange = {(e)=>setUsername(e.target.value)} type="text" style={{height:"30px",width:"400px",borderRadius:"10px",border:"none",outline:"1px solid blue",fontSize:"20px",margin:"10px",padding:"5px"}} value={username}></Input>
        <Input onChange = {(e)=>setPassword(e.target.value)} type="password" style={{height:"30px",width:"400px",borderRadius:"10px",border:"none",outline:"1px solid blue",fontSize:"20px",margin:"10px",padding:"5px"}} value={password}></Input>
        <Button style={{width:"200px",color:"white",backgroundColor:"blue",height:"50px",border:"none",borderRadius:"5px",margin:"10px"}}>Login</Button>
        
    </div>
  )
}

export default Login