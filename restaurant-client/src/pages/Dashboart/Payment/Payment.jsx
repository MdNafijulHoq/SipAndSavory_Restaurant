import React from 'react';
import CategorySection from '../../../components/FoodCategorySection/CategorySection'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import PaymentForm from './PaymentForm';

// TODO: Add publishable  key
const stripePromise = loadStripe(import.meta.env.VITE_PAYEMENT_GATEWAYY)

const Payment = () => {
    return (
        <div>
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