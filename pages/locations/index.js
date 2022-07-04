import { useState } from 'react'
import { Pagination, Modal } from '../../components'
import { useLocations } from '../../hooks'

const Locations = () => {
	const [state, setState] = useState({
		modal: false,
		row: {}
	})
	const { loading, error, data, fetchMore } = useLocations()

	const setModal = (row) => setState({ modal: !state.modal, row })

	if (loading) return <p> Loading... </p>;
	if (error) console.log(error, "error get info")

	return (
		<div className="content">
			<div className="row">
				{data.locations === undefined ? "" :
					data.locations.results.map((row, index) => (
						<div key={"card_episodes_" + index} className="col-1">
							<div className="card" >
								<div className="card-content">
									<p> {row.name} </p>
									<button className="btn-action button" onClick={() => setModal(row)}>
										Ver más
									</button>
								</div>
							</div>
						</div>
					))
				}
			</div>
			<Pagination fetchMore={fetchMore} name={"locations"} data={data} />
			{state.row !== undefined && state.row.name !== "" ?
				<Modal show={state.modal} closeModal={setModal} title={state.row.name}>
					<div className="row">
						<div className="col-3">
							<p><b>Nombre : </b>{state.row.name}</p>
							<p><b>Genero : </b>{state.row.gender}</p>
							<p><b>Estado : </b>{state.row.status}</p>
							<p><b>Especie : </b>{state.row.species}</p>
							{state.row.location !== undefined ?
								<>
									<p><b>Ubicacion : </b>{state.row.location.name}</p>
									<p><b>Dimension : </b>{state.row.location.dimension}</p>
								</>
								: ""}
						</div>
						<div className="col-3">
							<img src={state.row.image} alt={state.row.name} />
						</div>
					</div>
				</Modal>
				: ""}
		</div >
	)
}

export default Locations;