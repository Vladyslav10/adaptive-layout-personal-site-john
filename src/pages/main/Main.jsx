import React from "react";
import './Main.scss';
import userPhoto from '../../img/info/userPhoto.png'
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { setViewPostActive } from "../../store/postReducer";
import PostsList from "../../components/UI/posts/PostsList";
import Workpost from "../../components/works/Workpost";

const Main = () => {
    const dispatch = useDispatch();
    const viewPost = useSelector(state => state.postReducer.viewPost);
    const posts = useSelector(state => state.postReducer.postsInfo);
    const works = useSelector(state => state.workReducer.workPosts);
    function viewposts() {
        dispatch(setViewPostActive(!viewPost));
    }

    return (
        <div className="wrapper">
            <Header />
            <main className="main">
                <article className="main__info info">
                    <div className="info__container container">
                        <div className="info__row">
                            <div className="info__column">
                                <h1 className="info__title">Hi, I am John, <br />
                                    Creative Technologist
                                </h1>
                                <p className="info__text">
                                    Amet minim mollit non deserunt ullamco est
                                    sit aliqua dolor do amet sint. Velit officia
                                    consequat duis enim velit mollit. Exercitation
                                    veniam consequat sunt nostrud amet.
                                </p>
                            </div>
                            <div className="info__column info__column-img">
                                <div className="info__image ibg">
                                    <img src={userPhoto} alt="Profile avatar" />
                                </div>
                            </div>
                        </div>
                        <div className="info__button">
                            <button type="button" className="info__btn">Download Resume</button>
                        </div>
                    </div>
                </article>
                <section className={viewPost ? "main__posts posts active" : "main__posts posts"}>
                    <div className="posts__container container">
                        <div className="posts__row">
                            <h3 className="posts__title">Recent posts</h3>
                            <button type="button" onClick={viewposts} className="posts__btn">{viewPost ? "Hide" : "View all"}</button>
                        </div>
                        <PostsList posts={posts} listClass='posts__articles' articleClass='article'/>
                    </div>
                </section>
                <section className="main__works">
                    <div className="main__works-cnt container">
                        <div className="main__works-title">Featured works</div>
                        {works.map( work=>
                            <Workpost works={work} workClass='works-main'/>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Main;