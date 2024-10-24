import React from 'react'
import ErrorHandler from './ErrorHandler'
const First = ({ cityname }) => {
    try {
        return (
            <div>
                {/* //* No error */}
                <p> Hello , visit {cityname}</p>

                 {/* error for accessing cityname.xyz */}
                <p> Hello , visit {cityname.xyz}</p>
            </div>
        )
    }
    catch (err) {
        return <ErrorHandler error={err} />
    }
}
export default First