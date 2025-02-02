


import React from 'react'

function Button(props) {



  return (
    <div>
        <button style={props.style}>{props.children}</button>
    </div>
  )
}

export default Button
