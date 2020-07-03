import React from 'react';

const Filter = () => {
    function activateSearch() {
        document.getElementsByClassName("search-box")[0].classList.toggle("active-sb");
    }

    return (
        <input type="search" placeholder="Buscar" className="buscador right" />
    )
}

export default Filter;