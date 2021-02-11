import * as React from 'react';
import {Link} from 'react-router-dom';
import './home.css';
import './home_mobile.css';
import SearchBar from '../../components/searchBar/searchBar';
import Logo from '../../components/logo/logo';
import Images from '../../helper/images';
import Links from '../../links/links';
import state from "../../state";

export interface HistoryContext {
    push: () => void;
}

export default function Home() {

    React.useEffect(() => {
        new Images().preloadImages();
    }, []);

    const search = state.useSearch();

    const getContentLink = () => Links.CONTENT + "#introduction"

    const renderFooter = () => {
        return (
            <div className="text">
                <span className="left"/>
                <span className="middle"/>
                <span className="right"/>
            </div>
        );
    }

    function renderButtons() {
        return (
            <div className="buttons" onClick={() => search.setIsAnimated(false)}>
                <a
                    href="https://github.com/jozeflacko"
                    target="_blank"
                    className="button"
                    title="Click here to get to know me better!"
                >
                    Go to GitHub
                </a>
                <Link
                    title="Click here to get to know me better!"
                    to={getContentLink()}
                    className="button i-feel-lucky active blink"
                >
                    Let's explore this Web
                </Link>
            </div>
        );
    }

    return (
        <div className="outer">
            <div className="middle">
                <div className="inner">
                    <Logo game={true}/>
                    <SearchBar message={search.getMessage()} animate={search.isAnimated()}/>
                    {renderButtons()}
                    {renderFooter()}
                </div>
            </div>
        </div>
    );
}
