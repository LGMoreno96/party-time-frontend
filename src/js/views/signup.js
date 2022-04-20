import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/signup.css";
import fondo from "../../img/fondo3.jpg"

export const Signup = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        type_of_user: ""
    });

    const { store, actions } = useContext(Context);
    const history = useHistory()
    console.log(history)
    console.log(store.user);
    return (
        <div>
            <div id="bg-signup">
                <div className="container-signup container-form mb-5">
                    {/* <!---heading----> */}
                    <header className="heading">Crea tu usuario</header>
                    <br />
                    {/* <!---Form starting----> */}
                    <div className="row ">
                        {/* <!--- For Name----> */}
                        <div className="col-xs-8">
                            <label className="labelInput">Nombre</label>
                        </div>
                        <div className="col-xs-8 d-flex justify-content-center">
                            <input
                                type="text"
                                name="fname"
                                id="fname"
                                className="form-control "
                                value={user.name}
                                // required
                                onChange={(e) => {
                                    setUser({
                                        name: e.target.value,
                                        email: user.email,
                                        password: user.password,
                                        type_of_user: user.type_of_user
                                    });
                                }}
                            />
                        </div>
                    </div>
                    <div className="row ">
                        {/* <!-----For email----> */}
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-xs-8">
                                    <label className="labelInput" >Correo electr&oacute;nico</label>
                                </div>
                                <div className="col-xs-8 d-flex justify-content-center textInput">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="form-control"
                                        value={user.email}
                                        // required
                                        onChange={(e) => {
                                            setUser({
                                                name: user.name,
                                                email: e.target.value,
                                                password: user.password,
                                                type_of_user: user.type_of_user
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        {/* <!-----For Password and confirm password----> */}
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-xs-8">
                                    <label className="labelInput">Contraseña</label>
                                </div>
                                <div className="col-xs-8 d-flex justify-content-center textInput">
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="form-control"
                                        value={user.password}
                                        // required
                                        onChange={(e) => {
                                            setUser({
                                                name: user.name,
                                                email: user.email,
                                                password: e.target.value,
                                                type_of_user: user.type_of_user
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* <!-----------For Type of user--------> */}
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-12">
                                    <label className="labelInput">Tipo de usuario</label>
                                </div>
                                <div className="col-12 radioLabel">
                                    <input
                                        type="radio"
                                        name="userType"
                                        value="personal"
                                        onClick={(e) => {
                                            setUser({
                                                name: user.name,
                                                email: user.email,
                                                password: user.password,
                                                type_of_user: e.target.value
                                            });
                                        }}
                                    />&nbsp;&nbsp;Personal
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <input
                                        type="radio"
                                        name="userType"
                                        value="comercial"
                                        onClick={(e) => {
                                            setUser({
                                                name: user.name,
                                                email: user.email,
                                                password: user.password,
                                                type_of_user: e.target.value
                                            });
                                        }}
                                    />&nbsp;&nbsp;Comercial
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <button
                                    className="btn btn-lg btn-submit"
                                    onClick={async (e) => {
                                        // console.log(user)
                                        if (
                                            user.name == "" ||
                                            user.email == "" ||
                                            user.password == "" ||
                                            user.type_of_user == ""
                                        ){
                                            return alert("Verifique todos los campos")
                                        }else {
                                            const userCreated = await actions.createUser(user);
                                        if (userCreated == true) {
                                            history.push("/signin")
                                            alert("Usuario creado con exito! Por favor inicia sesion")
                                        }
                                        else {
                                            alert("No se pudo crear el usuario")
                                        }
                                        setUser({
                                            name: "",
                                            email: "",
                                            password: "",
                                            type_of_user: ""
                                        })
                                        }
                                    }}
                                >Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
