import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdFormatAlignCenter } from "react-icons/md";

import '../../assets/css/nav.css';
import pages from '../../pages';

const Index = () => {
    let location = useLocation();

    function responsenav(params) {
        let nav = document.getElementsByClassName("nav")[0];
        if (nav.className === "nav") {
            nav.className += " responsive";
        } else {
            nav.className = "nav";
        }
    }

    return (
        <div className="nav" >
            <Link to={location.pathname} > Rick y Morty </Link>
            {pages.map((page, index) => {
                return <Link key={"link_" + index} to={page.path} className={location.pathname === page.path ? "active" : ""}>{page.label}</Link>
            })}
            <Link to={location.pathname} className="icon" onClick={responsenav}>
                <MdFormatAlignCenter />
            </Link>
        </div>
    )
}
export default Index;