import React from 'react';
import PostCard from '../PostCard';
import P from 'prop-types';

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((post, index) => {
        return <PostCard key={index} post={post} />;
      })}
    </div>
  );
}

Posts.propTypes = {
  posts: P.array,
};
