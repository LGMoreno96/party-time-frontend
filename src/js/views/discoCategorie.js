import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import "../../styles/eventCategories.css";


export const DiscoCategorie = () => {
	const { store, actions } = useContext(Context);
	let eventsDisco = store.events.filter((event) => {
		if (event.type_of_event == 'discoteca') {
			return event
		} else {
			"No hay eventos disponibles actualmente de tipo Diversión 😭"
		}
	})
	return (
		<div className="bg-categories-discoteca">
			<div>
				<h2 id='categories-title'>DISCOTECAS</h2>
			</div>
			<div className="d-flex flex-row container flex-wrap justify-content-around align-items-center pb-5" id="fila-eventos">
				{/* MAPEO DE TODOS LOS EVENTOS DE TIPO DISCOTECA*/}
				{eventsDisco.map((event, index) => {
					return <Card key={event.id} event={event} className="card-event" />
				})}
			</div>
		</div>
	)
}