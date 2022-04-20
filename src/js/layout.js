import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";

import { Home } from "./views/home";
import { Event } from "./views/event";
import { Signin } from "./views/signin";
import { Signup } from "./views/signup";
import { EventForm } from "./views/eventForm";
import { PartyCategorie } from "./views/partyCategorie";
import { RestaurantCategorie } from "./views/restaurantCategorie";
import { FunCategorie } from "./views/funCategorie";
import { DiscoCategorie } from "./views/discoCategorie";
import { Favorites } from "./views/favorites";
import { Private } from "./views/private";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import ScrollToTop from "./component/scrollToTop";
import { Categories } from "./views/categories";
import { Services } from "./views/services";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/signin">
							<Signin />
						</Route>
						<Route exact path="/signup">
							<Signup />
						</Route>
						<Route exact path="/private">
							<Private />
						</Route>
						<Route exact path="/event/:id">
							<Event />
						</Route>
						<Route exact path="/eventForm">
							<EventForm />
						</Route>
						<Route exact path="/categories">
							<Categories />
						</Route>
						<Route exact path="/services">
							<Services />
						</Route>	
						<Route exact path="/partycategorie">
							<PartyCategorie />
						</Route>	
						<Route exact path="/restaurantcategorie">
							<RestaurantCategorie />
						</Route>	
						<Route exact path="/funcategorie">
							<FunCategorie />
						</Route>	
						<Route exact path="/discocategorie">
							<DiscoCategorie />
						</Route>	
						<Route exact path="/favorites">
							<Favorites />
						</Route>	
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
