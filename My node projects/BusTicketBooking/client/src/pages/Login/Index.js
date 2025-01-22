import React from 'react'
import {Button,Input, Form,message} from "antd";
import { Link } from 'react-router-dom';
import { LoginUser } from '../../api/user';

function Login() {

  const onFinish= async(values)=>{
    try{
      const response= await LoginUser(values);
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
    <div>Login
      <main className='App-header'>
        <h1> Login Into Bus Tickes Booking</h1>
    <section className='mw-500 text-center px-3'>
      <Form layout='vertical' onFinish={onFinish}>
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
      <p> New User? <Link to='/register'> Register</Link>

      </p>
    </section>
      </main>

    </div>
  )
}

export default Login