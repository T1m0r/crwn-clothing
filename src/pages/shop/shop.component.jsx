import React from "react";

import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => {
	return (
		<div className='shop-page'>
			<div>Shop Page</div>
			<Route exact path={`${match.path}`} component={CollectionsOverview} />
			<Route path={`${match.path}/:collectionId`} components={CollectionPage} />
		</div>
	);
};

export default ShopPage;
