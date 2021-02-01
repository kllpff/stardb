import React, { Component } from 'react';
import Header from '../header/header';
import ErrorBoundry from "../error-boundry/error-boundry";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context/swapi-service-context";
import RandomPlanet from "../random-planet/random-planet";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './app.css';

export default class App extends Component {

	swapiService = new SwapiService();

	render() {

		return (
			<ErrorBoundry>
				<SwapiServiceProvider value={this.swapiService}>
					<Router>
						<div className="stardb-app">
							<Header />
							<RandomPlanet />

							<Route path="/people" component={PeoplePage} />
							<Route path="/planets" component={PlanetsPage} />
							<Route path="/starships" component={StarshipsPage} />

						</div>
					</Router>
				</SwapiServiceProvider>
			</ErrorBoundry>
		);
	}
}