import React, { lazy, Suspense, useState } from 'react'
const First = lazy(() => import('./First'))
const Second = lazy(() => import('./Second'))
const Main = ({title}) => {
    const [btn, setBtn] = useState("");

    return (
        <div>
            <h2 className='text-5xl font-bold mb-8 flex justify-center'>{title}</h2>
            
            <div className='mx-4 my-4 flex justify-center'>
                <button onClick={() => setBtn('First')} className="bg-slate-500 text-6xl hover:bg-slate-700 text-white font-bold py-4 px-4 mr-2 rounded-lg">First Component</button>
                <button onClick={() => setBtn('Second')} className="bg-slate-500 text-6xl hover:bg-slate-700 text-white font-bold py-4 px-4 mr-2 rounded-lg">Second Component</button>
            </div>
            <hr />
            <Suspense fallback={<div>Loading...</div>}>
                {/* {btn === 'First' && <First />}
                {btn === 'Second' && <Second />} */}
                
                {(() => {
                    switch (btn) {
                       case 'First':
                            return <First />;
                        case 'Second':
                            return <Second />;
                        default:
                            return <div className='text-center text-8xl mx-2 my-2'>
                            Click the button to load desired Component.
                          </div>;
                    }
                })()}
            </Suspense>
        </div>
    )
}

export default Main