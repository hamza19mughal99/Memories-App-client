import React, { useEffect, useState } from 'react'
import Post from './Post/Post'
// import newYork from "../../assets/images/new_york.jpg";
import { Spinner } from 'react-bootstrap';
import { fetchPosts } from "../../api/index";
import './Posts.css';

const Posts = () => {
  const [posts, setPost] = useState(null)

  useEffect(() => {

    fetchPosts().then((res) => {
      setPost(res.data)
    })
  }, [])


  let postData;
  if (posts && posts.length > 0) {
    postData = (
      posts.map((post, index) => (
        <div key={index}>
          <Post post={post} />
        </div>
      ))
    )
  }
  else if (posts && posts.length === 0) {
    postData = (
      <div className='no_post'>
        <h4>NO POST FOUND</h4>
      </div>
    )
  }
  else {
    postData = (
      <div className='Loader'>
        <Spinner animation="border" />
      </div>
    )
  }
  return postData;
}

export default Posts