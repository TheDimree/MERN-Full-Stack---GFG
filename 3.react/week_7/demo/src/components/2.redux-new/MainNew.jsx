import React from 'react'
import Counter from './features/counter/Counter'

const MainNew = ({ title }) => {
    return (
        <div >
            <h1 className='text-center'>{title}</h1>
            <Counter title="Redux Counter Example" />
            <hr />
        </div>
    )
}

export default MainNew
