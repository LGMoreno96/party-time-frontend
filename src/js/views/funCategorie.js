import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import "../../styles/eventCategories.css";


export const FunCategorie = () => {
	const { store, actions } = useContext(Context);
	let eventsFun = store.events.filter((event) => {
		if (event.type_of_event == 'diversion') {
			return event
		} else {
			"No hay eventos disponibles actualmente de tipo Diversión 😭"
		}
	})
	return (
		<div>
			<div className="bg-categories-diversion">
				<div>
					<h2 id='categories-title'>DIVERSI&Oacute;N</h2>
				</div>
				<div className="d-flex flex-row container flex-wrap justify-content-around align-items-center pb-5" id="fila-eventos">
					{/* MAPEO DE TODOS LOS EVENTOS DE TIPO DISCOTECA*/}
					{eventsFun.map((event, index) => {
						return <Card key={event.id} event={event} className="card-event" />
					})}
				</div>
			</div>
		</div>
	)
}

