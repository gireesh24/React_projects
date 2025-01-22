import React from 'react'
import {Form, Input, Button, message} from 'antd'
import { Link } from 'react-router-dom'
import { RegisterUser } from '../../api/user'
// import Login from '../Login/Index'
function Register() {
  const onFinish= async(values)=>{
    try{
      const response= await RegisterUser(values);
      if(response.success){
        message.success(response.message)
      }
      else{
        message.error(response.message);
      }
    }catch(err){
      message.error(err);
    }

  }
  return (
   <>
      <main className='App-header'>
        <h1> Login Into Bus Tickes Booking</h1>
    <section className='mw-500 text-center px-3'>
      <Form layout='vertical' onFinish={onFinish}>
      <Form.Item
      label="Username"
      htmlFor= "Username"
      name="Username"
      className='d-block'
      rules={[{required:true, message:"please enter your valid email to login"}]}
      >
        <Input placeholder='Enter your email' type='Username' id='Username'/>
      </Form.Item>
      <Form.Item
      label="Email"
      htmlFor= "Email"
      name="Email"
      className='d-block'
      rules={[{required:true, message:"please enter your valid email to login"}]}
      >
        <Input placeholder='Enter your email' type='email' id='email'/>
      </Form.Item>

      <Form.Item
      label="Password"
      htmlFor= "Password"
      name="Password"
      className='d-block'
      rules={[{required:true, message:"please enter your valid Password to login"}]}
      >
        <Input placeholder='Enter your Password' type='Password' id='Password'/>
      </Form.Item>

      <Form.Item className='d-block' >
      <Button type='primary' block htmlType='submit'>submit</Button>
      </Form.Item>
      </Form>
      <p> Already a user? <Link to='/Login'> Login</Link> </p>
    </section>
      </main>
   </>
  )
}

export default Register