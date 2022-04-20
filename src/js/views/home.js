import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Link, useHistory } from "react-router-dom";


export const Home = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory()
	return (
		// PAGINA DE INICIO DE LA APLICACION (TIPO FEED DE EVENTOS DISPONIBLES)
		<div className="position-relative">
			<div id="bg-home">
				<div className='parallax-home'>
					<div className="home-caption">
						<p className="slider-title">LOS MEJORES EVENTOS</p>
						<p className="slider-text">REUNIDOS EN UN SOLO LUGAR</p>
						<a className="btn btn-lg mt-1 btn-home btn-success" href="#scrollToEvent">VER EVENTOS</a>&nbsp; &nbsp;
						<a className="btn btn-lg mt-1 btn-home btn-danger"
							onClick={(e) => {
								!store.token
									? history.push("/signin")
									: (
										store.user.type_of_user == "comercial"
											? history.push("/eventForm")
											: alert("Debes registrarte como usuario comercial para poder crear y publicar tu evento")
									)
							}}
						>PUBLICAR MI EVENTO</a>
					</div>

				</div>

				{/* TITULO */}
				<div className="container-title" id="scrollToEvent">
					<h1 className="text-center my-5 text-white">EVENTOS</h1>
				</div>

				{/* LISTA DE EVENTOS */}
				<div className="row container-flex flex-wrap pb-5 container-events" id="fila-eventos">
					{/* MAPEO DE TODOS LOS EVENTOS EXISTENTES */}
					{store.events.map((event, index) => {
						return <Card key={event.id} event={event} className="card-event" />
					})}
				</div>
			</div>
		</div>
	)
}
