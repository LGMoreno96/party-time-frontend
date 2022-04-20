import React from "react";
import "../../styles/services.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


export const Services = () => {
    const history = useHistory()

    const orgTitle = "Party Time";
    const orgDescription = "Es un proyecto enfocado en la organización y publicación de fiestas, eventos en restaurantes, actividades recreativas y discotecas.";

    const descriptionTitle = "¿Por qué hacemos esto?";
    const description = "Al igual que tú, nosotros también queremos asistir a fiestas y eventos, ya sabes que puedes encontrarlo acá, sólo debes preguntarte cuándo y dónde.";
	
	const userTitle = "¿Planeando un Evento?";
    const userDescription = "Da más visibilidad a tus eventos y aumenta tus ventas. ¡La manera más efectiva de vender tus eventos online es con nosotros!";
    
    return (
        <div>
            <section>
				<div className='parallax-services'>
					<div className="mx-5">
						<br /><br /><br /><br /><br />
						<h1 className="display-3 ms-5 fw-bold fst-italic">{orgTitle}</h1>
						<h1 className="display-6 ms-5 fw-normal fst-italic">{orgDescription}</h1>
						<br /><br />
                        <div className="ms-5 btn btn-lg btn-register text-center" onClick={(e)=>{history.push("/categories")}}>Ver categorías</div><br/>
					</div>
				</div>
			</section>
            <section>
                <div className="description-profile">
                    <div className="container text-center text-white">
                        <br /><br /><br />
                        <h1 className="display-5 fw-bold">{descriptionTitle}</h1>
                        <p className="mt-4 mx-5">{description}</p>
                        <br /><br />
                    </div>
                </div>
            </section>
            <section>
                <div className='details-profile'>
                    <div className="container">
                        <br /><br />
                        <h1 className="display-5 text-center fw-bold">{userTitle}</h1>
                        <br /><br />
                        <p className="mt-1 mx-5">{userDescription}</p>
                        <br/>
                        <div className="row">
                            <div className='col-12 px-5 info-profile' >
                                <p><b><span>1. Envia los siguientes documentos a nuestro correo:</span></b></p>
                                <p><b><span>  - Identificaci&oacute;n comercial.</span></b></p>
                                <p><b><span>  - Detalles de tu comercio.</span></b></p>
                                <p><b><span>  - Identificaci&oacute;n de una persona responsable.</span></b></p>
                                <p><b><a href="mailTo:party.time.4geeks@gmail.com">party.time.4geeks@gmail.com</a></b></p>
                                <div className="btn btn-lg btn-register text-left" onClick={(e)=>{history.push("/signup")}}>2. ¡Crea tu usuario!</div><br/>
                            </div>
                        </div>
                        <br /><br />
                    </div>
                </div>
            </section>
        </div>
    )
}
