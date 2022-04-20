import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import "../../styles/eventCategories.css";


export const RestaurantCategorie = () => {
	const { store, actions } = useContext(Context);
	let eventsRestaurant = store.events.filter((event) => {
		if (event.type_of_event == 'restaurante') {
			return event
		} else {
			"No hay eventos disponibles actualmente de tipo Diversión 😭"
		}
	})
	return (
		<div>
			<div className="bg-categories-restaurante">
				<div>
					<h2 id='categories-title'>RESTAURANTES</h2>
				</div>
				<div className="d-flex flex-row container flex-wrap justify-content-around align-items-center pb-5" id="fila-eventos">
					{/* MAPEO DE TODOS LOS EVENTOS DE TIPO DISCOTECA*/}
					{eventsRestaurant.map((event, index) => {
						return <Card key={event.id} event={event} className="card-event" />
					})}
				</div>
			</div>
		</div>
	)
}

