import {useState} from 'react'
import {Link} from 'react-router-dom'
import { IoChevronBack } from "react-icons/io5";
import "../styles/Main.css"

import BackIcon from "./icons/BackIcon"

function Main() {

    return (
        <div className="main-page" data-testid="main-component">
            <header className="game-header"> 
                <div className="game-title-container">
                    <span className="quiz">Quiz</span><span className="quest">Quest</span>
                </div>
            </header>
            <div className="game-topic">
                <Link to="/difficulty" className="topic topic-1"></Link>
                <Link to="/difficulty" className="topic topic-2"></Link>
                <Link to="/difficulty" className="topic topic-3"></Link>
                <Link to="/difficulty" className="topic topic-4"></Link>
                <Link to="/difficulty" className="topic topic-5"></Link>
                <Link to="/difficulty" className="topic topic-6"></Link>
                <Link to="/difficulty" className="topic topic-7"></Link>
                <Link to="/difficulty" className="topic topic-8"></Link>
                <Link to="/difficulty" className="topic topic-9"></Link>
            </div>
        </div>
    )
}

export default Main