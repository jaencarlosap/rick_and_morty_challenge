import React from 'react'
import Image from 'next/image'
import {
	Pagination,
	Modal,
	Filter
} from '../../components'
import { useCharacters } from '../../hooks'

const Characters = () => {
	const [state, setState] = React.useState({
		modal: false,
		row: {}
	})
	const { loading, data, fetchMore } = useCharacters()

	const setModal = (row) => setState({ modal: !state.modal, row })

	if (loading) return <p> Loading... </p>

	return (
		<div className="content">
			<div className="row ">
				<Filter fetchMore={fetchMore} name={'characters'} data={data} />
			</div>
			<div className="row">
				{data.characters === undefined ? '' :
					data.characters.results.map((row, index) => (
						<div key={'card_episodes_' + index} className="col-1">
							<div className="card" >
								<Image
									src={row.image}
									alt={'image_' + row.name}
									className="card-image"
									layout='responsive'
									width='100'
									height='100'
								/>
								<div className="card-content-img">
									<p> {row.name} </p>
									<p> {row.location.name} </p>
									<button className="btn-action button" onClick={() => setModal(row)}>{'Ver más'}</button>
								</div>
							</div>
						</div>
					))
				}
			</div>
			<Pagination fetchMore={fetchMore} name={'characters'} data={data} />
			{state.row !== undefined && state.row.name !== '' &&
				<Modal show={state.modal} closeModal={setModal} title={state.row.name}>
					<div className="row">
						<div className="col-3">
							<p><b>Nombre : </b>{state.row.name}</p>
							<p><b>Genero : </b>{state.row.gender}</p>
							<p><b>Estado : </b>{state.row.status}</p>
							<p><b>Especie : </b>{state.row.species}</p>
							{state.row.location !== undefined &&
								<>
									<p><b>Ubicacion : </b>{state.row.location.name}</p>
									<p><b>Dimension : </b>{state.row.location.dimension}</p>
								</>
							}
						</div>
						<div className="col-3">
							{state?.row?.image && (
								<Image
									src={state?.row?.image}
									alt={state?.row?.name}
									layout='responsive'
									width='100'
									height='100'
								/>
							)}
						</div>
					</div>
				</Modal>
			}
		</div >
	)
}

export default Characters