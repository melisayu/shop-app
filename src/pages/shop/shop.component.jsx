
import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';


const ShopPage = ({ match, cartItems }) => {
  const [message, setMessage] = useState(false);

  // If item has changed (in this case added), display message
  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  const prevAmount = usePrevious(cartItems);
  useEffect(() => {
    if (prevAmount && cartItems !== prevAmount) {
      setMessage(true);
      setTimeout(() => setMessage(false), 1200);
    }
  }, [cartItems, prevAmount]);

  return (
    <div className='shop-page'>
      <Route
        exact path={`${match.path}`}
        render={(props) => (
          <CollectionsOverview {...props} message={message} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPage {...props} message={message} />
        )}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
})

export default connect(mapStateToProps)(ShopPage);
