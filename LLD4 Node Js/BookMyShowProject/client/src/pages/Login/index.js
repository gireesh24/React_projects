import React from 'react'
import {Button, Input, Form, message} from 'antd'
import {Link, useNavigate} from 'react-router-dom'
import {LoginUser} from '../../api/user'
function Login() {
    const navigate= useNavigate();

    const OnFinch= async (values)=>{
        console.log(" login onfinish call", values)
        try{
            const response= await LoginUser(values)
            if(response.success){
                message.success("response recived successfully")
                localStorage.setItem("token", response.data)
                navigate("/")
            }
            else{
                message.success(response.message)
            }
        }catch(err){
            console.log("onfinsh login call error occured", err)
            message.error("somthing went wrong in login")
        }
    }
  return (
    // <div> welcome to Login page</div>
    <>
    <main className="App-header">
        <h1> login to book MY SHOWs</h1>
        <section className='mw-500 text-center px-3'>
            <Form layout='Horizontal' onFinish={OnFinch}>
            <Form.Item label="Email" htmlFor='email' name='email' className='d-block'
            rules={[{ required:true, message:"email required"}]}
            >
            <Input
             type='email'
             id='email'
             name='email'
             placeholder='enter email'
             >
            </Input>
            </Form.Item>

            <Form.Item label="Password" htmlFor='password' name='password' className='d-block'
            rules={[{ required:true, message:"email required"}]}
            >
            <Input
             type='password'
             id='password'
             name='password'
             placeholder='enter password'
             >
            </Input>
            </Form.Item>
            <Form.Item className='d-block'>
                <Button type='primary'
                 htmlType='password'
                 className='d-block'
                 style={{ fontSize:'1rem', fontWeight:'600'}}>
                    Login
                    </Button>
            </Form.Item>
            </Form>
        <p>
            {" "}
            New user?<Link to='/register'>Register Here</Link></p>
        </section>
    </main>
    </>
  )
}

export default Login