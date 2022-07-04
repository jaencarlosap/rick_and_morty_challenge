import React from 'react'
import Image from 'next/image'
import { useEpisodes } from '../hooks'

const Episodes = () => {
	const { loading, data, fetchMore } = useEpisodes()

	const showMore = () => {
		fetchMore({
			variables: { page: data.episodes.info.next },
			updateQuery: (previousResult, { fetchMoreResult }) => {
				const results = fetchMoreResult.episodes.results
				const info = fetchMoreResult.episodes.info
				const nextInfo = {
					episodes: {
						__typename: previousResult.episodes.__typename,
						results: [...previousResult.episodes.results, ...results],
						info
					}
				}

				return results.length ? nextInfo : previousResult
			}
		})
	}

	if (loading) return <p> Loading... </p>

	return (
		<div className="content row">
			{
				data?.episodes?.results.map((row, index) => (
					<div key={'card_episodes_' + index} className="col-1">
						<div className="card" >
							<Image
								src={row.characters[Math.floor(Math.random() * (row.characters.length - 1)) + 1].image}
								alt={'image_' + row.name}
								width="100"
								height="100"
								layout="responsive"
								className="card-image"
							/>
							<div className="card-content-img">
								<p> {row.name} </p>
								<button className="btn-action button">
									Ver más
								</button>
							</div>
						</div>
					</div>
				))
			}
			{data?.episodes?.info?.next !== null &&
				<div className="col-6 center">
					<button className="btn-action btn-round button" onClick={showMore}>
						Mostrar Más
					</button>
				</div>
			}
		</div >
	)
}

export default Episodes