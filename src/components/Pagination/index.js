import React from 'react';
import { MdFirstPage, MdLastPage, MdSkipNext, MdSkipPrevious } from 'react-icons/md';

var name = "";

const pagination = (fetchMore, page = 1) => {
    fetchMore({
        variables: { page: page },
        updateQuery: (previousResult, { fetchMoreResult }) => {
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
    })
}

const Numbers = ({ info, fetchMore }) => {
    let pag = [];
    if (info.next !== null && info.next <= info.pages) {
        for (let index = info.next - 1; pag.length < 5 && info.next - 1 < info.pages; index++) {
            (index <= info.pages && index !== 0) ? pag.push(index) : pag.push("-")
        }
    }
    if (info.next === null && info.prev !== null) {
        for (let index = info.prev - 4; pag.length < 5; index++) {
            (index <= info.pages && index !== 0) ? pag.push(index) : pag.push("-")
        }
    }
    return pag.map(e => {
        if (e !== "-") return <div key={"pag_num_" + e} className={info.next - 1 === e ? "pag-btn active " : "pag-btn"} onClick={() => pagination(fetchMore, e)}>{e}</div>
    })
}

const Pagination = (props) => {
    const info = props.data[props.name].info;
    name = props.name;
    return (
        <div className="pagination">
            {(info.prev !== null ?
                <>
                    <div className="pag-btn" onClick={() => pagination(props.fetchMore, 1)} ><MdSkipPrevious /> </div>
                    <div className="pag-btn" onClick={() => pagination(props.fetchMore, info.prev)} ><MdFirstPage /> </div>
                </>
                : "")}
            <Numbers info={info} fetchMore={props.fetchMore} />
            {(info.next !== null ?
                <>
                    <div className="pag-btn" onClick={() => pagination(props.fetchMore, info.next)}><MdLastPage /></div>
                    <div className="pag-btn" onClick={() => pagination(props.fetchMore, info.pages)}><MdSkipNext /> </div>
                </>
                : "")}
        </div>
    )
}

export default Pagination;
