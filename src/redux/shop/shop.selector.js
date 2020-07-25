import { createSelector } from 'reselect';

<<<<<<< HEAD

const selectShop = state => state.shop;


export const selectCollection = createSelector(
    [selectShop],
    shop => shop.collections
);
=======
const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    )
>>>>>>> 1ee2bd7c2ffe14babc09932cc04f4aae3ac89488
