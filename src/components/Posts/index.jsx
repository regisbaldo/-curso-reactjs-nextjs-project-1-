import React from 'react';
import PostCard from '../PostCard';


export default function Posts({ posts }) {
    return (
        <div className="posts">
            {posts.map(post => {
                return (
                    <PostCard post={post} />
                )
            })}
        </div>
    );
}

