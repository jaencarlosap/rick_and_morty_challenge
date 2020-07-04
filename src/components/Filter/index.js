import React from 'react';
import { MdSearch } from 'react-icons/md';
var name = "";
const Filter = (props) => {
    name = props.name;
    const activateSearch = () => {
        document.getElementsByClassName("search-box")[0].classList.toggle("active-sb");
        document.getElementsByClassName("search-box__input")[0].focus();
    }
    const validaActive = (e) => (e.target.value === "") ? document.getElementsByClassName("search-box")[0].classList.remove("active-sb") : "";
    const FecthExecute = (e, fetchMore) => {
        fetchMore({
            variables: { filtro: { name: e.target.value } },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                if (fetchMoreResult[name] === undefined || fetchMoreResult[name] === null) return previousResult
                const results = fetchMoreResult[name].results;
                const info = fetchMoreResult[name].info;

                return results.length
                    ? {
                        [name]: {
                            __typename: previousResult[name].__typename,
                            results: results,
                            info
                        }
                    }
                    : previousResult;
            }
        }).catch()
    }

    return (
        <div className="search-box center">
            <input
                className="search-box__input"
                placeholder="Nombre"
                onBlur={(e) => {
                    validaActive(e);
                    FecthExecute(e, props.fetchMore)
                }}
            />
            <MdSearch className="search-box__icon" onClick={() => activateSearch()} />
        </div>
    )
}

export default Filter;