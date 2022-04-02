import React from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {
  const {
    data: blogs,
    error,
    isLoading,
  } = useFetch('http://localhost:4201/blogs')
  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title={'All Blogs'} />}
    </div>
  )
}

export default Home
