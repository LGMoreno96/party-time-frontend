import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/eventForm.css";

export const EventForm = () => {
    const [cloudImage, setCloudImage] = useState("");
    async function postPictureCloudinary() {
        const formData = new FormData();
        formData.append("file", cloudImage);
        formData.append("upload_preset", "pziiv0oe");
        const response = await fetch("https://api.cloudinary.com/v1_1/venezuela/image/upload", {
            method: "POST",
            body: formData
        });
        if (response.ok) {
            const data = await response.json();
            return data.url;
        }
    }
    const { store, actions } = useContext(Context);
    const history = useHistory()
    const [event, setEvent] = useState({
        event_name: "",
        local_name: "",
        type_of_event: "",
        description: "",
        place: "",
        date: "",
        start_time: "",
        end_time: "",
        age: "",
        parking: "",
        number: "",
        capacity: "",
        photo: "",
        location: "",
        cover: "",
        email: ""
    })
    return (
        <div className="py-5" id="bg-form">
            <div className="container-form py-4">
                <h1 className="center">Registra tu Evento</h1>
                <div className="col-lg-12 well">
                    <div className="row">
                        <form>
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-sm-6 form-group mt-1">
                                        <label>Nombre del local</label>
                                        <input
                                            maxLength={50}
                                            type="text"
                                            placeholder="Ingresa el nombre del local..."
                                            className="form-control name"
                                            value={event.local_name}
                                            onChange={(e) => {
                                                setEvent((prev) => ({
                                                    ...prev,
                                                    local_name: e.target.value
                                                }))
                                            }}
                                        ></input>
                                    </div>
                                    <div className="col-sm-6 form-group mt-1">
                                        <label>Nombre del evento</label>
                                        <input
                                            maxLength={30}
                                            type="text"
                                            placeholder="Ingresa el nombre del evento..."
                                            className="form-control name"
                                            value={event.event_name}
                                            onChange={(e) => {
                                                setEvent((prev) => ({
                                                    ...prev,
                                                    event_name: e.target.value
                                                }))
                                            }}
                                        ></input>
                                    </div>
                                </div>
                                <div className="form-group mt-1">
                                    <label>Descripci&oacute;n</label>
                                    <textarea
                                        maxLength={120}
                                        placeholder="Agrega una breve descripci&oacute;n sobre tu evento..."
                                        rows="3"
                                        className="form-control description"
                                        value={event.description}
                                        onChange={(e) => {
                                            setEvent((prev) => ({
                                                ...prev,
                                                description: e.target.value
                                            }))
                                        }}
                                    ></textarea>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 mt-1">
                                        <label>Tipo de evento</label>
                                        <select
                                            defaultValue={""}
                                            className="form-select"
                                            aria-label="Default select example"
                                            onChange={(e) => setEvent((prev) => ({
                                                ...prev,
                                                type_of_event: e.target.value
                                            }))}>
                                            <option disabled value={""}>Selecciona tu opci&oacute;n</option>
                                            <option
                                                value="fiesta"
                                            >Fiesta</option>
                                            <option
                                                value="restaurante"
                                            >Restaurante</option>
                                            <option
                                                value="diversion"
                                            >Diversi&oacute;n</option>
                                            <option
                                                value="discoteca"
                                            >Discoteca</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6 form-group mt-1">
                                        <label>Lugar</label>
                                        <input
                                            maxLength={30}
                                            type="text"
                                            placeholder="Ingresa el lugar del evento..."
                                            className="form-control name"
                                            value={event.place}
                                            onChange={(e) => {
                                                setEvent((prev) => ({
                                                    ...prev,
                                                    place: e.target.value
                                                }))
                                            }}
                                        ></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4 form-group mt-1">
                                        <label>Fecha</label>
                                        <input
                                            type="date"
                                            placeholder="Fecha del evento..."
                                            className="form-control name"
                                            value={event.date}
                                            onChange={(e) => {
                                                setEvent((prev) => ({
                                                    ...prev,
                                                    date: e.target.value
                                                }))
                                            }}
                                        ></input>
                                    </div>
                                    <div className="col-sm-4 form-group mt-1">
                                        <label>Hora de inicio</label>
                                        <input
                                            type="time"
                                            placeholder="Hora de inicio..."
                                            className="form-control name"
                                            value={event.start_time}
                                            onChange={(e) => {
                                                setEvent((prev) => ({
                                                    ...prev,
                                                    start_time: e.target.value
                                                }))
                                            }}
                                        ></input>
                                    </div>
                                    <div className="col-sm-4 form-group mt-1">
                                        <label>Hora de fin</label>
                                        <input
                                            type="time"
                                            placeholder="Hora de fin..."
                                            className="form-control name"
                                            value={event.end_time}
                                            onChange={(e) => {
                                                setEvent((prev) => ({
                                                    ...prev,
                                                    end_time: e.target.value
                                                }))
                                            }}
                                        ></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="row">
                                            <div className="col-12">
                                                <label className="labelInput">Estacionamiento</label>
                                            </div>
                                            <div className="col-12 radioLabel">
                                                <input
                                                    type="radio"
                                                    name="parking"
                                                    value="Si"
                                                    onChange={(e) => {
                                                        setEvent((prev) => ({
                                                            ...prev,
                                                            parking: e.target.value
                                                        }))
                                                    }}
                                                />&nbsp;&nbsp;Si
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                <input
                                                    type="radio"
                                                    name="parking"
                                                    value="No"
                                                    onChange={(e) => {
                                                        setEvent((prev) => ({
                                                            ...prev,
                                                            parking: e.target.value
                                                        }))
                                                    }}
                                                />&nbsp;&nbsp;No
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="row">
                                            <div className="col-12">
                                                <label className="labelInput">Edad</label>
                                            </div>
                                            <div className="col-12 radioLabel">
                                                <input
                                                    type="radio"
                                                    name="age"
                                                    value="+0"
                                                    onChange={(e) => {
                                                        setEvent((prev) => ({
                                                            ...prev,
                                                            age: e.target.value
                                                        }))
                                                    }}
                                                />&nbsp;&nbsp;Todo P&uacute;blico
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                <input
                                                    type="radio"
                                                    name="age"
                                                    value="+15"
                                                    onChange={(e) => {
                                                        setEvent((prev) => ({
                                                            ...prev,
                                                            age: e.target.value
                                                        }))
                                                    }}
                                                />&nbsp;&nbsp;+15
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                <input
                                                    type="radio"
                                                    name="age"
                                                    value="+18"
                                                    onChange={(e) => {
                                                        setEvent((prev) => ({
                                                            ...prev,
                                                            age: e.target.value
                                                        }))
                                                    }}
                                                />&nbsp;&nbsp;+18
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                <input
                                                    type="radio"
                                                    name="age"
                                                    value="+21"
                                                    onChange={(e) => {
                                                        setEvent((prev) => ({
                                                            ...prev,
                                                            age: e.target.value
                                                        }))
                                                    }}
                                                />&nbsp;&nbsp;+21
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3 form-group">
                                        <label>Capacidad</label>
                                        <input
                                            type="text"
                                            maxLength={7}
                                            placeholder="# de personas permitidas..."
                                            className="form-control name"
                                            value={event.capacity}
                                            onChange={(e) => {
                                                setEvent((prev) => ({
                                                    ...prev,
                                                    capacity: e.target.value
                                                }))
                                            }}
                                        ></input>
                                    </div>
                                    <div className="col-sm-3 form-group">
                                        <label>Costo ($)</label>
                                        <input
                                            type="text"
                                            maxLength={10}
                                            placeholder="Precio en $..."
                                            className="form-control name"
                                            value={event.cover}
                                            onChange={(e) => {
                                                setEvent((prev) => ({
                                                    ...prev,
                                                    cover: e.target.value
                                                }))
                                            }}
                                        ></input>
                                    </div>
                                    <div className="col-sm-6 form-group">
                                        <label style={{marginBottom:"5px"}}>Imagen</label>
                                        <br/>
                                        <label htmlFor="upload" className={cloudImage !== "" ? "custom-upload ready" : "custom-upload"}>
                                            <div className="position-relative overflow-hidden fileContainer">
                                                <div className="btnFile">Seleccionar...</div>
                                                <input
                                                    className="add-product__field fileInput"
                                                    type="file"
                                                    id="upload"
                                                    onChange={async (event) => {
                                                        setCloudImage(event.target.files[0]);
                                                    }}
                                                />
                                            </div>
                                            {cloudImage !== "" ? "Imágen cargada" : "Agregar imágen"}
                                        </label>
                                    </div>
                                </div>
                                <h1 className="center mt-4">Datos de contacto</h1>
                                <p>Nuestros asesores te estaran contactando para aclarar dudas y formalizar reservaciones.</p>
                                <div className="col-sm-8 form-group mt-1">
                                    <label>N&uacute;mero de contacto</label>
                                    <input
                                        maxLength={30}
                                        type="text"
                                        placeholder="Ingresa n&uacute;mero de tel&eacute;fono..."
                                        className="form-control name"
                                        value={event.number}
                                        onChange={(e) => {
                                            setEvent((prev) => ({
                                                ...prev,
                                                number: e.target.value
                                            }))
                                        }}
                                    ></input>
                                </div>
                                <div className="col-sm-8 form-group mt-1">
                                    <label>Correo electr&oacute;nico de contacto</label>
                                    <input
                                        maxLength={50}
                                        type="text"
                                        placeholder="Ingresa correo electr&oacute;nico..."
                                        className="form-control name"
                                        value={event.email}
                                        onChange={(e) => {
                                            setEvent((prev) => ({
                                                ...prev,
                                                email: e.target.value
                                            }))
                                        }}
                                    ></input>
                                </div>
                                <div className="col-sm-12 button-center">
                                    <button
                                        type="button"
                                        className="btn btn-lg btn-submit"
                                        onClick={async (e) => {                                            
                                            if (
                                                event.event_name == "" ||
                                                event.local_name == "" ||
                                                event.type_of_event == "" ||
                                                event.description == "" ||
                                                event.place == "" ||
                                                event.date == "" ||
                                                event.start_time == "" ||
                                                event.end_time == "" ||
                                                event.age == "" ||
                                                event.parking == "" ||
                                                event.number == "" ||
                                                event.capacity == "" ||
                                                event.cover == "" ||
                                                event.email == ""
                                            ) {
                                                return alert("Verifique todos los campos")
                                            } else {
                                                const imgUrl = await postPictureCloudinary();
                                                console.log(imgUrl)
                                                const eventCreated = await actions.createEvent({
                                                    ...event, photo: imgUrl
                                                });
                                                if (eventCreated == true) {
                                                    actions.getEvents()
                                                    history.push("/")
                                                    alert("Evento creado con exito!")
                                                }
                                                else {
                                                    alert("No se pudo crear el evento, revise los datos")
                                                }
                                                setEvent({
                                                    event_name: "",
                                                    local_name: "",
                                                    type_of_event: "",
                                                    description: "",
                                                    place: "",
                                                    date: "",
                                                    start_time: "",
                                                    end_time: "",
                                                    age: "",
                                                    parking: "",
                                                    number: "",
                                                    capacity: "",
                                                    photo: "",
                                                    location: "",
                                                    cover: "",
                                                    email: ""
                                                })
                                            }
                                        }
                                        }
                                    >¡Crear Evento!</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}
