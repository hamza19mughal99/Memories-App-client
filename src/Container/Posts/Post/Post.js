import React from 'react'
import { Card } from "react-bootstrap";
import { AiFillLike } from "react-icons/ai";
import "./Post.css";

const Post = ({ post }) => {

    return (
        <Card>
            <Card.Img variant="top" src={post.image} />
            <Card.Body>
                <div className='d-flex'>
                    {
                        post?.tags.map((tag, index) => (
                            <p key={index} className='tags'>#{tag.name}</p>
                        ))
                    }
                </div>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                    {post.desc}
                </Card.Text>
                <div className='likes_time'>
                    <p className='likes'> <AiFillLike /> <span>{post.likeCount}</span> {post?.likeCount > 1 ? 'likes' : 'like'}</p>
                    <p className='time'>{post.time}</p>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Post