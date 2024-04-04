import { useState }from 'react'
import axios from "axios"
import { Button, Space,Input } from 'antd';



const Register = () => {
    const [userName,setUserName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [age,setAge]=useState(0)
    const [phoneNumber,setPhoneNumber]=useState("")

    const chUserName =(e)=>{
        setUserName(e.target.value)
    }

    const chEmail =(e)=>{
        setEmail(e.target.value)
    }
    

    const chPassword =(e)=>{
        setPassword(e.target.value)
    }
    

    const chAge =(e)=>{
        setAge(e.target.value)
    }
    

    const chPhoneNumber =(e)=>{
        setPhoneNumber(e.target.value)
    }
    
    const sendReq=()=>{
        axios
        .post("http://localhost:5000/user/register",{userName,email,password,age,phoneNumber})
        .then((result)=>{
            console.log(result);








        }).catch((err)=>{
            console.log(err);







        })
    }







  return (
    <div>
         
        <Input placeholder="User Name" onChange={chUserName} />
        <Input placeholder="Age" onChange={chAge}/>
        <Input placeholder="Phone Number"onChange={chPhoneNumber} />
        <Input placeholder="Email"onChange={chEmail} />
        <Input type='password' placeholder="Password"onChange={chPassword} />
        <Button type="primary" onClick={sendReq}>Register</Button>
        
    </div>
  )
}

export default Register