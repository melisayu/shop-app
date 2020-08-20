import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Logo from '../../assets/logo.svg';


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HIA4DG8Fttnr5rML0zWaFydGe3ip7aOvDgrO3Txrxuqn2zeNwV41H6RHnjwMEK6aCDZ26ACtr2TCDeEHELEHCGm00rIbXH86y';

  const onToken = token => {
    alert('Payment Successful.');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Melisa Space Ltd'
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}


export default StripeCheckoutButton;
