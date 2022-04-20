import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css"; 
import fondo from "../../img/dark-pink.jpg"



export const Private = () => {
    const { store, actions } = useContext(Context);
    // const [respuesta, setRespuesta] = useState({});
    const history = useHistory()
    useEffect(() => {
        // console.log(store.token)
        // VERIFICA SI EL USUARIO INICIO SESION, DE LO CONTRARIO SE ENVIA AL LOG IN
        if (store.token && store.token != "") {
            actions.getUser();
        } else {
            history.push("/signin")
        }
    }, []);
    return (
        <React.Fragment>
            <div id="bg-home" style={{ backgroundImage: `url(${fondo})` }} className="d-flex flex-column justify-content-center align-items-center vh-100 text-dark">
                {/* <i className="fa-solid fa-circle-user fa-2xl"></i> */}
                <h1>
                    Bienvenido/a a tu perfil {store.user.name}
                </h1>
                <div>
                    {store.user.type_of_user == "personal"
                        ? //PERIFL DE USUARIO PERSONAL
                        <div className="container-fluid">
                            <h3>Muy pronto tendremos la lista de tus eventos favoritos</h3>
                            <div className="d-flex justify-content-center">
                                <a className="btn btn-lg mt-1 btn-home btn-success" onClick={(e) => { history.push("/categories") }}>VER CATEGORÍAS</a>
                            </div>
                        </div>
                        : //PERFIL DEL USUARIO COMERCIAL
                        <div className="container-fluid">
                            <h3>Por ser un perfil comercial puedes publicar tu evento en pocos segundos</h3>
                            <div style={{ textAlign: "center" }} className="mt-3">
                                <a className="btn btn-lg mt-1 btn-home btn-success" 
                                    onClick={(e) => { history.push("/categories") }}>VER CATEGORÍAS</a>
                                &nbsp; &nbsp;
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
                    }
                </div>
            </div>
        </React.Fragment>
    )
};