import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();
  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const viewsElement = useRef();
  const hashtagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const views = viewsElement.current.value;
    const hashtags = hashtagsElement.current.value.split(" ");

    /* userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    viewsElement.current.value = "";
    hashtagsElement.current.value = "";*/

    addPost(userId, title, body, views, hashtags);
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit} className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your userId
        </label>
        <input
          ref={userIdElement}
          type="text"
          className="form-control"
          id="userId"
          placeholder="Your userId"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          ref={titleElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          ref={bodyElement}
          rows={5}
          type="text"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="views" className="form-label">
          Enter number of views
        </label>
        <input
          ref={viewsElement}
          type="text"
          className="form-control"
          id="views"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="hashtags" className="form-label">
          Enter your hashtags
        </label>
        <input
          ref={hashtagsElement}
          type="text"
          className="form-control"
          id="hashtags"
          placeholder="Your hashtags using spaces"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}

export default CreatePost;
