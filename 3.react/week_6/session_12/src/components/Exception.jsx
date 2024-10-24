import React from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import First from './First'
import Second from './Second'
import ErrorHandler from './ErrorHandler'
const Exception = () => {
  return (
    <>
        <ErrorBoundary FallbackComponent={ErrorHandler}>
        <h2> Error Boundaries</h2>
        <First />
        <hr/>
        <Second capital="india"/>
        </ErrorBoundary>
    </>
  )
}

export default Exception