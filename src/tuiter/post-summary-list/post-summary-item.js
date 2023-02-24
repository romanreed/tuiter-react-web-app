import React from "react";
const PostSummaryItem = (
    {
      post = { topic: 'Topic', userName: 'User Name', time: 'Time', title: 'Title', tweets: 'Tweets', image: 'Image'}
    }
   ) => {
    return(
    <li className="list-group-item d-flex ps-3 p-2 justify-content-between">
        <div>
            <div style={{ color: 'gray' }}>{post.userName}</div> 
            <b>{post.topic}</b> <i className="fas fa-check-circle"></i>
            <span style={{ color: 'gray' }}> - {post.time}</span><br/>
            <b>{post.title}</b> 
            <div style={{ color: 'gray' }}>{post.tweets ? post.tweets : ''} {post.tweets ? "Tweets": ''}</div>
        </div>
        <div>
            <img src={`/images/${post.image}`} className="rounded" style={{width: 90, height: 90}}/>
        </div>
    </li>
    );
  };
export default PostSummaryItem;

