import React from 'react'

function Button({text,onclick}) {
  return (
    <div>
        <button onClick={onclick}>{text}</button>
    </div>
  )
}

export default Button