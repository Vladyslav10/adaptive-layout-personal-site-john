import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Workpost from "../../components/works/Workpost";
import './Works.scss';

const Works = () => {
    const pagework = useSelector(state => state.workReducer.workPosts);

    return(
       <div className="wrapper"> 
            <Header/>
            <main className="page-work">
                <div className="page-work__cnt">
                    <div className="page-work__title">Work</div>
                    {pagework.map( work=>
                        <Workpost works={work} workClass='works'/>
                    )}
                </div>
            </main>
            <Footer/>
       </div>
    );
};

export default Works;