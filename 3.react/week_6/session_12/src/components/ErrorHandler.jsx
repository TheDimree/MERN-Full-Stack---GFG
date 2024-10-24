import React from 'react'

const ErrorHandler = ({error}) => {
  return (
    <div role='alert'>
        <p> An error ocurred</p>
        <p> {error.message}</p>
    </div>
  )
}

export default ErrorHandler