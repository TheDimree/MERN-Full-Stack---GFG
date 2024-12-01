import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadPost } from '../../slices/PostSlice'
const ReduxAsync = () => {

    const dispatch = useDispatch()
    const { posts, status } = useSelector(state => state.posts)
    console.log(`Posts: ${posts}`)
    console.log(`Status: ${status}`)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(loadPost())
        }
    }, [])
    return (<>
        <div className='container'>
            <h1 className='text-center'>Async Thunk</h1>
            <h3 className='text-center'>Handling Asynchronous task</h3>
            <div className="row">
                {posts.map(post =>
                    <div key={post.id} className='col-md-3 border '>
                        <h3>{post.title}</h3>
                    </div>)}
            </div>
        </div>

        <div className="my-2 container">
            <p>Successfully calledd an API.</p>
        </div>
    </>
    )
}

export default ReduxAsync
