import React from 'react';
import Problem from './Problem';
import MyMemo from './MyMemo';

const Main_mh = () => {
    return(
        <div>
            <h1 className='text-center'>useMemo Hook</h1>
            <Problem />
            <MyMemo />
        </div>
    )
}

export default Main_mh;