import React from 'react'
App1.defaultProps = {name :"cathy", age:24 };
export default function App1(props) {
  return
   (
    <div>
      <h1>Hello {props.name}. You are {props.age} ?</h1>
    </div>
  )
}
