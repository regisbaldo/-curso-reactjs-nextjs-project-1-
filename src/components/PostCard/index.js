import React from 'react';

export default function PostCard({ post }) {
    return (
        <div className="card-wrapper" key={post.id}>
            <img className="card-image" src={post.url} alt={post.title} />
            <h3 className="card-title">{post.title}</h3>
            <p className="card-body">{post.body}</p>
        </div>
    )
}