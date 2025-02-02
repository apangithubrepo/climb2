import React from 'react'



function Input(props) {

  return (
    <div>
        <input type = {props.type} style={props.style} value={props.value} onChange={props.onChange}></input>
    </div>
  )
}

export default Input