import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdFormatAlignCenter } from "react-icons/md";

import '../../assets/css/nav.css';
import pages from '../../pages';
import Filter from '../Filter';

const Index = ({ props }) => {
    let location = useLocation();

    function responsenav(params) {
        let x = document.getElementsByClassName("nav")[0];
        if (x.className === "nav") {
            x.className += " responsive";
        } else {
            x.className = "nav";
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
            <Filter />
        </div>
    )
}
export default Index;