import React, { Component } from 'react';

import './people-page.css';
import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details/item-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry/error-boundry";
import Row from "../row/row";

export default class PeoplePage extends Component {

	swapiService = new SwapiService();

	state = {
		selectedPerson: Math.floor(Math.random() * 25) + 3,
		hasError: false
	}

	onPersonSelected = (id) => {
		this.setState({
			selectedPerson: id
		});
	};

	render() {

		if (this.state.hasError) {
			return <ErrorIndicator/>;
		}

		const itemList = (
			<ItemList
				onItemSelected={this.onPersonSelected}
				getData={this.swapiService.getAllPeople}>

				{(i) => (
					`${i.name} (${i.birthYear})`
				)}

			</ItemList>
		);

		const personDetails = (
			<ErrorBoundry>
				<ItemDetails itemId={this.state.selectedPerson} />
			</ErrorBoundry>
		);

		return (
			<Row left={itemList} right={personDetails} />
		)
	}
}