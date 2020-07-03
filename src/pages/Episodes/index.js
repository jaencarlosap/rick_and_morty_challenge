import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';


const query = gql`
    query getList($page: Int) {
        episodes(page:$page){
            info { count, pages, next, prev }
            results{
                id,
                name,
                episode,
                characters{
                    id,name,image
                }
            }
        }
    }
`

const Episodios = () => {
    const { loading, error, data, fetchMore } = useQuery(query, {
        variables: { page: 1 }
    });

    const showMore = () => {
        fetchMore({
            variables: { page: data.episodes.info.next },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                const results = fetchMoreResult.episodes.results;
                const info = fetchMoreResult.episodes.info;

                return results.length
                    ? {
                        episodes: {
                            __typename: previousResult.episodes.__typename,
                            results: [...previousResult.episodes.results, ...results],
                            info
                        }
                    }
                    : previousResult;
            }
        })
    }

    if (loading) return <p> Loading... </p>;
    if (error) console.log(error, "error get info")
    return (
        <div className="content row">
            {
                data.episodes.results.map((row, index) => (
                    <div key={"card_episodes_" + index} className="col-1">
                        <div className="card" >
                            <img src={row.characters[Math.floor(Math.random() * (row.characters.length - 1)) + 1].image} alt={"image_" + row.name} className="card-image" />
                            <div className="card-content-img">
                                <p> {row.name} </p>
                                <button className="btn-action button" onClick={() => console.log("llego")}>Ver más</button>
                            </div>
                        </div>
                    </div>
                ))
            }
            {data.episodes.info.next !== null ?
                <div className="col-6 center">
                    <button className="btn-action btn-round button" onClick={() => showMore()}>Mostrar Más</button>
                </div>
                : ""}
        </div >
    )
}

export default Episodios;