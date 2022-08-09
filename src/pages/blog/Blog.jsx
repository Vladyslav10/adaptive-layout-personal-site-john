import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import PostsList from "../../components/UI/posts/PostsList";
import './Blog.scss';

const Blog = () => {
    const blogPost = useSelector(state => state.blogReducer.blogPosts);

    return(
        <div className="wrapper"> 
            <Header/>
            <main className="main blog">
                <div className="blog__container">
                    <h1 className="blog__page-name">Blog</h1>
                    <PostsList posts={blogPost} listClass='blog__posts' articleClass='blog'/>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Blog;