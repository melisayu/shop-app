import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import CustomMessage from '../../components/message/message.component';

import { selectCollection } from '../../redux/shop/shop.selector';

import './collection.styles.scss';


const CollectionPage = ({ collection, message }) => {
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      {message &&
        <CustomMessage text="Item has successfully added to the cart!"></CustomMessage>
      }
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
})

export default connect(mapStateToProps)(CollectionPage);
