import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
    {
      post = { topic: 'Topic', userName: 'User Name', time: 'Time', title: 'Title', replies: 'Replies', image: 'Image'}
    }
   ) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return(
    <span style={{border: '1px solid lightgray'}}>
    <link href="../../../vendors/fontawesome/css/all.min.css" rel="stylesheet"/>
    <li className="list-group-item d-flex ps-3 p-2 border-0">
        <div className="col-1">
            <img className="rounded-circle " alt="icon" height={48} src={`/images/${post.image}`}/>
        </div>
        <div className="col-10">
            <b>{post.userName}</b> <i className="fas fa-check-circle"></i> <span style={{ color: 'gray' }}>@{post.topic}</span>
            <span style={{ color: 'gray' }}> - {post.time}</span><br/>
            {post.tuit}
            <div style={{ color: 'gray' }}>{post.tweets ? post.tweets : ''} {post.tweets ? "Tweets": ''}</div>
        </div>
        <i className="bi bi-x-lg col-1" style={{float: 'right'}}
            onClick={() => deleteTuitHandler(post._id)}></i>
    </li>
    <div className="row justify-content-between">
        <div className="col-3">
            <button className="btn btn-primary btn-sm bg-transparent border-0">
                <i className="fas fa-comment" style={{color: 'gray'}}></i> <span style={{ color: 'gray' }}>{post.replies}</span>
            </button>
        </div>
        <div className="col-3">
            <button className="btn btn-primary btn-sm bg-transparent border-0">
                <i className="fas fa-retweet" style={{color: 'gray'}}></i> <span style={{ color: 'gray' }}>{post.retuits}</span>
            </button>
        </div>
        <div className="col-3">
        {post.liked ?
                <button className="btn btn-primary btn-sm bg-transparent border-0">
                    <i className="fas fa-heart" style={{color: 'red'}}></i> <span style={{ color: 'gray' }}>{post.likes}</span>
                </button>
           :
                <button className="btn btn-primary btn-sm bg-transparent border-0">
                    <i className="fas fa-heart" style={{color: 'gray'}}></i> <span style={{ color: 'gray' }}>{post.likes}</span>
                </button>
            }
        </div>
        <div className="col-3">
            <button className="btn btn-primary btn-sm bg-transparent border-0">
                <i className="fas fa-upload" style={{color: 'gray'}}></i>
            </button>
        </div>
    </div>
    </span>
    );
  };
export default TuitItem;

