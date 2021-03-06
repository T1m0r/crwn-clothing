import { createSelector } from "reselect";

// This does the same as reselect but memoizes a function that gets return not just a var
import memoize from "lodash.memoize";

// Translates the collectionID string to a corresponding collection int id for collection page
/*const COLLECTION_ID_MAP = {
	hats: 1,
	sneakser: 2,
	jackets: 3,
	womens: 4,
	mens: 5,
};*/

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	(shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	(collections) =>
		collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = memoize((collectionUrlParam) =>
	createSelector(
		[selectCollections],
		// Converted the list to object so searching is way fastr
		/*collections.find(
			(collection) => collection.id == COLLECTION_ID_MAP[collectionUrlParam]
		)*/
		(collections) => (collections ? collections[collectionUrlParam] : null)
	)
);
