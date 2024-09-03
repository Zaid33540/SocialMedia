import React, { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { PostList } from "../store/post-list-store";
function Post({ post }) {
  const { deletePost } = useContext(PostList);
  return (
    <div
      className="card post-card "
      style={{ minWidth: "15rem", maxWidth: "25rem" }}
    >
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            onClick={() => deletePost(post.reactions.likes)}
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          >
            <MdDeleteForever />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-secondary hashtag">
            #{tag}
          </span>
        ))}
        <div className="alert alert-info views" role="alert">
          This post has been viewed by {post.views} people
        </div>
        <div>
          <BiSolidLike style={{ fontSize: "1.5rem" }} />
          {post.reactions.likes}
          <BiSolidDislike style={{ fontSize: "1.5rem", float: "right" }} />
          <div style={{ float: "right" }}>{post.reactions.dislikes} </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
