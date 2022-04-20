import React, { useState, useContext } from "react";
import "../../styles/style.css";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";


export const Signin = () => {
	const [logUser, setLogUser] = useState({
		email: "",
		password: "",
	});
    const { store, actions } = useContext(Context);
	const history = useHistory()

	return (
		<div>
			<div id="bg" >
				<div className="container-home container-form mb-5">
					{/* <!---heading----> */}
					<header className="heading">Ingresar</header>
					<div>
						<br />
						{/* <!---Form starting----> */}
						<div className="row ">
							{/* <!--- For Name----> */}
							<div className="col-xs-8">
								<label className="labelInput">Correo electr&oacute;nico </label>
							</div>
							<div className="col-xs-8 d-flex justify-content-center">
								<input
									type="text"
									name="email"
									id="email"
									className="form-control "
									value={logUser.email}
									required
									onChange={(e) => {
										setLogUser({
											email: e.target.value,
											password: logUser.password,
										});
									}}
								/>
							</div>
						</div>
						<div className="row ">
							{/* <!-----For Password and confirm password----> */}
							<div className="col-sm-12">
								<div className="row">
									<div className="col-12">
										<label className="labelInput">Contraseña</label>
									</div>
									<div className="col-12 d-flex justify-content-center textInput">
										<input
											type="password"
											name="password"
											id="password"
											className="form-control"
											value={logUser.password}
											required
											onChange={(e) => {
												setLogUser({
													email: logUser.email,
													password: e.target.value,
												});
											}}
										/>
									</div>
								</div>
							</div>
							{/* <!-----------Log in button--------> */}
							<div className="col-sm-12">
								<div className="col-sm-12">
									<button
										className="btn btn-lg btn-submit"
										onClick={async (e) => {
											// console.log(user)
											const userLogged = await actions.logInUser(logUser);
											if (userLogged == true) {
												history.push("/private")
											}
											else {
												alert("Datos invalidos")
											}
											setLogUser({
												email: "",
												password: "",
											})
										}}
									>¡Iniciar sesi&oacute;n!</button>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-12 pt-4" >
								<span className="labelInput">¿No tienes una cuenta?</span>
								&nbsp;&nbsp;<Link to="/signup" >Reg&iacute;strate</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}