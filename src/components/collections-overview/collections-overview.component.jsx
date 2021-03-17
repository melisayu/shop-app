import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';
import CustomMessage from '../message/message.component';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selector'

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections, message }) => (
  <div className='collections-overview'>
    {message &&
      <CustomMessage text="Item has successfully added to the cart!"></CustomMessage>
    }
    {
    collections.map(({id, ...otherCollectionProps}) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)