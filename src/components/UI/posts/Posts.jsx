import React from "react";
import { useSelector } from "react-redux";
import { classAdd } from "../../../utils/functions";

const Post = ({ posts, articleClass }) => {
    const viewPost = useSelector(state => state.postReducer.viewPost);

  return (
    <article className={classAdd(viewPost, posts.class)}>
      <h2 className={articleClass + '__title'}>{posts.title}</h2>
      <div className={articleClass + '__row'}>
        <div className={articleClass + '__data'}>{posts.data}</div>
        <div className={articleClass + '__border'}></div>
        <div className={articleClass + '__design'}>{posts.design}</div>
      </div>
      <p className={articleClass + '__description'}>
        {posts.description}
      </p>
    </article>
  );
};

export default Post;
