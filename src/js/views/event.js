import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/event.css";
import { useParams } from "react-router-dom";

export const Event = () => {
	// const APP_TEST = false;
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		if (params.id) {
			actions.getEventDetails(params.id)
		}
		initMap(10.481229140990079, -66.8609878783568);
	}, []);

	// DATABASE INFO
	let resource = store.eventDetails.type_of_event;
	let eventName = store.eventDetails.event_name;
	let datetime = store.eventDetails.date;
	let description = store.eventDetails.description;
	let capacity = store.eventDetails.capacity;
	let minAge = store.eventDetails.age;
	let parking = store.eventDetails.parking;
	let contact = store.eventDetails.number;
	let location = store.eventDetails.place;
	let cover = store.eventDetails.cover;

	// CALCULATED INFO
	let eventTypeDesc = "Tipo de Evento";
	let descriptionTitle = "Título Descripción";
	let detailsTitle = "Detalles del Evento";
	switch (resource) {
		case 'fiesta':
			eventTypeDesc = "Fiesta";
			descriptionTitle = "¡No te pierdas este evento!";
			detailsTitle = "Detalles del Evento";
			break;
		case 'restaurante':
			eventTypeDesc = "Restaurante/Bar";
			descriptionTitle = "¡No te pierdas este lugar!";
			detailsTitle = "Detalles del Lugar";
			break;
		case 'diversion':
			eventTypeDesc = "Diversión";
			descriptionTitle = "¡No te pierdas esta oportunidad!";
			detailsTitle = "Detalles del Evento";
			break;
		case 'discoteca':
			eventTypeDesc = "Discoteca";
			descriptionTitle = "¡No te pierdas esta maravilla!";
			detailsTitle = "Detalles de la Disco";
			break;
	}

	return (
		<div>
			<section>
				<div className={`parallax parallax-${resource}`}>
					<div className="mx-5">
						<br /><br /><br /><br /><br /><br /><br /><br /><br />
						<h1 className="display-3 ms-5 fw-bolder">{eventTypeDesc.toUpperCase()}</h1>
						<h1 className="display-6 ms-5 fw-bold fst-italic mt-5">{eventName}</h1>
						<h1 className="display-6 ms-5 fw-normal fst-italic">{datetime}</h1>
						<br /><br />
					</div>
				</div>
			</section>
			<section>
				<div className="description">
					<div className="container text-center text-white">
						<br /><br /><br />
						<h1 className="display-5 fw-bold">{descriptionTitle}</h1>
						<p className="mt-4 mx-5 description-text">{description}</p>
						<br /><br />
					</div>
				</div>
			</section>
			<section>
				<div className={`details-info details-${resource}`}>
					<div className="container">
						<br /><br />
						<h1 className="display-5 text-center fw-bold">{detailsTitle}</h1>

						<div className="row">
							<div className="col-lg-7 mt-5 px-5 d-flex">
								<img
									className="img-fluid"
									// src="https://images.squarespace-cdn.com/content/v1/551e1babe4b0aa77af01e45f/1429734404086-OAWOO1Y07LMCDBF859MR/San_Diego_Event_Dj_David_Cutler.jpg?format=1500w"
									src = {store.eventDetails.photo}
									/>
							</div>
							<div className={`col-lg-5 mt-5 px-5 info-detail info-${resource}`} >
								<p><span>Tipo:</span> {eventTypeDesc}</p>
								<p><span>Nombre del Local:</span> {store.eventDetails.local_name}</p>
								<p><span>Nombre del Evento:</span> {eventName}</p>
								<p><span>Fecha:</span> {datetime}</p>
								<p><span>Hora de inicio:</span> {store.eventDetails.start_time}</p>
								<p><span>Hora de cierre:</span> {store.eventDetails.end_time}</p>
								<p><span>Capacidad:</span> {capacity} personas</p>
								<p><span>Edad M&iacute;nima:</span> {minAge}</p>
								<p><span>Estacionamiento:</span> {parking}</p>
								<p><span>Ubicaci&oacute;n:</span> {location}</p>
								<p><span>Costo:</span> {cover} $</p>
								<p><span>Contacto:</span> {contact} {store.eventDetails.email}</p>
							</div>
						</div>
						<br /><br />
					</div>
				</div>
			</section>
			<section>
				<div id="mapContainer">
					<div id="map"></div>
				</div>
			</section>
		</div>
	)
}


function initMap(_lat, _lng) {
	let mapDiv = document.getElementById('map');
	if (!mapDiv) return;

	let position = { lat: _lat, lng: _lng };
	let mapOptions = {
		center: position,
		zoom: 17,
		disableDefaultUI: true
	};
	let map = new google.maps.Map(mapDiv, mapOptions);

	let marker = new google.maps.Marker({
		map: map,
		position: position,
		draggable: false,
		anchorPoint: new google.maps.Point(0, -29)
	});
}

document.addEventListener("DOMContentLoaded", function (event) {
	//initMap(10.481229140990079, -66.8609878783568);
});