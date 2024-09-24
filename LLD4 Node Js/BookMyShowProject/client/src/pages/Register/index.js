import React from 'react'
import {Button, Input, Form, message} from 'antd'
import {Link} from 'react-router-dom'
import {RegisterUser} from "../../api/user"
function Register() {
    const onFinish=async(values)=>{
        try{
            const response=await RegisterUser(values)
            if(response.success){
message.success(response.message)
            }
            else{
                //
message.error(response.message)
            }
        }catch(err){
            console.log("onfinsh function", err)
            message.error("somthing went wrong")
        }
    }
  return (
    // <div> welcome to Login page</div>
    <>
    <main className="App-header">
        <h1> create account to book MY SHOW</h1>
        <section className='mw-500 text-center px-3'>
            <Form layout='vertical' onFinish={onFinish}>
            <Form.Item label="Email" htmlFor='email' name='email' className='d-block'
            rules={[{ required:true, message:"email required"},
                {type : 'email', message:'please enter valied email' }
            ]}
            >
            <Input
             type='email'
             id='email'
             name='email'
             placeholder='enter email'
             >
            </Input>
            </Form.Item>
            <Form.Item label="name" htmlFor='name' name='name' className='d-block'
            rules={[{ required:true, message:"email required"}]}
            >
            <Input
             type='name'
             id='name'
             name='name'
             placeholder='enter your name'
             >
            </Input>

            </Form.Item>
            <Form.Item label="Password" htmlFor='password' name='password' className='d-block'
            rules={[{ required:true, message:"name required"}]}
            >
            <Input
             type='password'
             id='password'
             name='password'
             placeholder='enter password'
             >
            </Input>
            </Form.Item>
            <Form.Item className='d-block text-center'>
                <Button type='primary'
                 htmlType='password'
                 className='d-block text-center'
                 style={{ fontSize:'1rem', fontWeight:'600'}}>
                    Login
                    </Button>
            </Form.Item>
            </Form>
        <p>
            {" "}
            have alredy account?<Link to='/login'>Login Here</Link></p>
        </section>
    </main>
    </>
  )
}

export default Register