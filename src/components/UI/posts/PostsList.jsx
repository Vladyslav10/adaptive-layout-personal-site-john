import React from "react";
import Post from "./Posts";

const PostsList = ({ posts, listClass, articleClass }) => {

    return(
        <div className={listClass}>
            {posts.map((post) =>
                <Post posts={post} articleClass={articleClass}/>
            )}
        </div>
    )
}

export default PostsList;
