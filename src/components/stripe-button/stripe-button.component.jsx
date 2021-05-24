import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	// Stripe want Pay amount in cents
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51IuYluCLhvBibLvLk5QdFMpt6izbJlxpVjAVZ2RhIOPhHoKLEMQOhD84Tr2oBOWUgsUfBKjsGMcfcpisiMC2TGVz00YDVLJ6f9";

	// onToken is called upon successful processing
	const onToken = (token) => {
		console.log(token);
		alert("Payment succesful");
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='Crwn Clothing ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			dexcription={`Your total is ${price}$`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}></StripeCheckout>
	);
};

export default StripeCheckoutButton;
