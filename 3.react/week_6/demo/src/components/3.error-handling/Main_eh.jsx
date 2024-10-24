import React from 'react'
import First from './First'

import { ErrorBoundary } from 'react-error-boundary'
import ErrorHandler from './ErrorHandler'
import Second from './Second'

const Main = () => {
  return (
    <div>
      <h1 className='text-center my-2'> Error Boundaries</h1>

      <h2>First way using try-catch</h2>
      {/* <First city='Ambala'/> */}
      <First />
      <hr />

      <h2>Second way using react-error-boundary</h2>
      {/* ErrorBoundary to catch and handle errors */}
      <ErrorBoundary FallbackComponent={ErrorHandler}>
        {/* <Second />  This component will throw an error */}
      </ErrorBoundary>
    </div>
  )
}
export default Main