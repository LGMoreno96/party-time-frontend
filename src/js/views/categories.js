import React from "react";
import { useHistory } from "react-router-dom";
import "../../styles/categories.css";

export const Categories = () => {
    const history = useHistory()

    return (
        <div>
            <div className="py-5" id="bg-categories">
                <div>
                    <h2 id='categories-title'>CATEGOR&Iacute;AS</h2>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="container-categories mx-3 col-sm-4 zoom party" onClick={(e)=>{history.push("/partycategorie")}}>
                        <a id='anchor-categories'><h1 className="center">FIESTAS</h1></a>
                    </div>
                    <div className="container-categories mx-3 col-sm-4 zoom restaurant" onClick={(e)=>{history.push("/restaurantcategorie")}}>
                        <a id='anchor-categories'><h1 className="center">RESTAURANTES</h1></a>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="container-categories mx-3 col-sm-4 zoom fun"  onClick={(e)=>{history.push("/funcategorie")}}>
                        <a id='anchor-categories'><h1 className="center">DIVERSI&Oacute;N</h1></a>
                    </div>
                    <div className="container-categories mx-3 col-sm-4 zoom disco"  onClick={(e)=>{history.push("/discocategorie")}}>
                        <a id='anchor-categories'><h1 className="center">DISCOTECAS</h1></a>
                    </div>
                </div>
            </div>

            {/* <div className="container mt-5">
		<div className="row">
			<div className="col-md-6">
				<div className="outer-div">
					<div className="inner-div1">
						<h1 className="zoom-box-text">CLUBES</h1>
					</div>
				</div>
			</div>

			<div className="col-md-6">
				<div className="outer-div">
					<div className="inner-div2">
						<h1 className="zoom-box-text">BARES</h1>
					</div>
				</div>
			</div>
		</div>
	</div> */}
        </div>
    )
}
