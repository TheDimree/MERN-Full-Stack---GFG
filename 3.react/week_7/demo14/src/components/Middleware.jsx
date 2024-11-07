import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './redux-new/1.middlewares/MyThunk'

const Middleware = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPosts())
  }, [])
  const posts = useSelector(state => state.posts.posts)
  const isLoading = useSelector(state => state.posts.isLoading)
  const error = useSelector(state => state.posts.error)

  if(isLoading) {
    return "Loading..."
  }
  if(error) {
    return error
  }

  return (
    <div>
      <h2>Thunk Middleware Example</h2>
      {posts?.map(post=>
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <hr/>
          </div>
      )}
    </div>
  )
}

export default Middleware
