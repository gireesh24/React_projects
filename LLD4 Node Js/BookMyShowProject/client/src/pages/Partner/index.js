import React from 'react'
import {Tabs} from "antd";
import TheatreList from "./theatreList";
// import { Color } from 'antd/es/color-picker';
function index() {
  const items=[
    {
      key:"1",
      label:"Theatres",
      children:<TheatreList />
    }
  ]
  return (
    <div>
    <h1 style={{color:`black`}}>Partner Page</h1>
    <Tabs items={items}/>
    </div>
  )
}

export default index