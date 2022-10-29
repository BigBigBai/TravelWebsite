import React from 'react';
// import '../../App.css';
import './Comment.css';
import Comments from "./comments/Comments";

const Comment = () => {
  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <Comments
        commentsUrl="http://localhost:3000/comment"
        currentUserId="1"
      />
    </div>
  );
};

export default Comment;
