import React from 'react';
import CategorySection from '../../../components/FoodCategorySection/CategorySection'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import PaymentForm from './PaymentForm';
import { Helmet } from 'react-helmet-async';

// TODO: Add publishable  key
const stripePromise = loadStripe(import.meta.env.VITE_PAYEMENT_GATEWAYY)

const Payment = () => {
    return (
        <div>
            <Helmet>
        <title>Payment Form | Sip & Savory</title>
      </Helmet>
            <CategorySection subHeading='Please pay to eat' heading='PAYMENT'></CategorySection>
            <div>
                <Elements stripe={stripePromise}>
                        <PaymentForm></PaymentForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;