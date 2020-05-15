import React from 'react';
import './Post.css';

const Post = () => {
    return (
        <article className='post-main'>
            <header className="post-header">
                <div className="post-userimage">
                    <img src="https://img.icons8.com/doodle/48/000000/user.png" alt='profileImage' />
                </div>
                <div className="post-username"> Sachin </div>
            </header>

            <div className='post-image-main'>
                <img src='https://s3.ap-south-1.amazonaws.com/hsdreams1/pins/2019/03/big/b4bfab7d92f86ff77e928badb7cf91f8.jpeg' className='post-image' alt='loading' />
            </div>
        </article>
    )
}

export default Post