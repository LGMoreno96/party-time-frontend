import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/favorites.css";
import { useParams } from "react-router-dom";

export const Favorites = () => {
	return (
		<div>

			<div className="bg-favorites">
				<div>
					<h2 id='favorites-title'>FAVORITOS</h2>
				</div>
				</div>

		</div>
	)
}

