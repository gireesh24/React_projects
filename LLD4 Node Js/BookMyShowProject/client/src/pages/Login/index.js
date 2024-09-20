import React from 'react'
import {Button, Input, Form} from 'antd'
import {Link} from 'react-router-dom'
function Login() {
  return (
    // <div> welcome to Login page</div>
    <>
    <main className="App-header">
        <h1> login to book MY SHOW</h1>
        <section className='mw-500 text-center px-3'>
            <Form layout='Horizontal'>
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