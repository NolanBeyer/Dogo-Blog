import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch'

const BlogDetails = () => {
  const { id } = useParams()
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch('http://localhost:4201/blogs/' + id)
  return (
    <div className='blog-details'>
      {isLoading && <div>loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <em>Written by {blog.author}</em>
          <p>{blog.body}</p>
        </article>
      )}
    </div>
  )
}

export default BlogDetails
