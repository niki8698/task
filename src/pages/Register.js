
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { CREATE_EMPLOYEE } from '../endpoints'
import { apiPost } from '../fetcher'
import Layout from './Layout'

const Register = () => {
  const [values, setValues] = useState({})

  const handleChange = (e,key) =>{
    setValues((prev)=>({
    ...prev,
    [key]:e.target.value
    }))
  }

  const handleSubmit = async()=>{
    console.log("first",values)
    try{  
    const resp = await apiPost(CREATE_EMPLOYEE,values)
    console.log(resp)
    toast(resp.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      })
    }catch(err){
      if (err.response.status === 429) {
        toast('Wait for 1 Minute')
      }
    }
  }
  
  return (
    <Layout>
    <div className='wrap flex items-center justify-center' style={{maxWidth:'50%',margin:'auto'}}>
      <div style={{width:'40%'}}>
        <input placeholder='Employee Name'  name='name' className={`customInput mt-5`} onChange={(e)=>handleChange(e,'name')}/>
        <input placeholder='Employee Age' name='age' className={`customInput mt-5`} onChange={(e)=>handleChange(e,'age')}/>
        <input placeholder='Employee Salary' name='sal' className={`customInput mt-5`} onChange={(e)=>handleChange(e,'sal')}/>
        <button className='mt-5 customButton' type='submit' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
    </Layout>
  )
}

export default Register