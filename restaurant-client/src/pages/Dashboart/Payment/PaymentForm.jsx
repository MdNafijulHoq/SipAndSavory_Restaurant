import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../CustomHooks/useAxiosSecure';
import useCarts from '../../../CustomHooks/useCarts';
import { AuthContext } from '../../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
    const {data, refetch} = useCarts();
    const navigate = useNavigate();
    const totalPrice = data?.reduce((total, item) => total + item.price, 0)
    
    useEffect(() => {
        // Log the total price
        console.log('Total Price:', totalPrice); 
        
        // Only make the request if totalPrice is valid
        if (totalPrice > 0) { 
          axiosSecure
            .post('/create-payment-intent', { price: totalPrice })
            .then((res) => {
              console.log(res.data.clientSecret);
              setClientSecret(res.data.clientSecret);
            })
            .catch((err) => {
              console.error('Error creating payment intent:', err.response?.data || err.message);
            });
        }
      }, [axiosSecure, totalPrice]);

    // useEffect( () => {
    //      axiosSecure.post('/create-payment-intent', { price: totalPrice })
    //      .then(res => {
    //         console.log(res.data.clientSecret)
    //         setClientSecret(res.data.clientSecret)
    //      })
    // },[axiosSecure, totalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
          }


        const card = elements.getElement(CardElement);

        if (!card) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('Payment error', error);
            setError(error.message)
          } else {
            console.log('Payment Method', paymentMethod);
            setError('')
          }

        //   confirm payment
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'annonymous',
                        name: user?.displayName || 'annonymous',
                        
                    }
                }
            })
            if(confirmError){
                console.log('confirm error')
            } else{
                console.log('payment intent', paymentIntent)
                if(paymentIntent.status === 'succeeded'){
                    console.log('transaction id', paymentIntent.id)
                    setTransactionId(paymentIntent.id)

                    // Now save the payment in the database
                    const payment = {
                        email: user.email,
                        price: totalPrice,
                        transactionId: paymentIntent.id,
                        date: new Date(),
                        cartIds: data.map(item => item._id),
                        menuItemIds: data.map(item => item.menuItemId),
                        status: 'pending'
                    }
                    const res = await axiosSecure.post('/payments', payment);
                    console.log('payment saved', res.data)
                    refetch();
                    console.log(res.data?.paymentResult?.insertedId)
                    if(res.data?.paymentResult?.insertedId){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Thanks for your payment!",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          navigate('/dashboard/paymentHistory')
                    }
                }
            }
        };
      
    

    return (
        <form onSubmit={handleSubmit}>
            <CardElement options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}>
            </CardElement>
            <button className='btn btn-sm btn-primary my-4' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className='text-red-600'>{error}</p>
      {
        transactionId && <p className='text-green-600'>Your Transaction id: {transactionId}</p>
      }
        </form>
    );
};

export default PaymentForm;