import React from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
=======
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';
>>>>>>> 1ee2bd7c2ffe14babc09932cc04f4aae3ac89488


<<<<<<< HEAD
import { selectCollection } from '../../redux/shop/shop.selector';


const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
    )

const mapStateToProps = createStructuredSelector({
    collections: selectCollection
});


export default connect(mapStateToProps)(ShopPage);
=======
const ShopPage = ({ match }) => {
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
}

export default ShopPage;
>>>>>>> 1ee2bd7c2ffe14babc09932cc04f4aae3ac89488
