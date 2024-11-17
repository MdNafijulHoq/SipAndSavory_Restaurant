import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../CustomHooks/useAxiosSecure';
import toast from 'react-hot-toast';
import useCarts from '../../../CustomHooks/useCarts';


const OrderCard = ({item}) => {
    const {user} = useContext(AuthContext);
    const {price,recipe, name, image, _id} = item;
    const navigate = useNavigate();
    const location = useLocation()
    const axiosSecure = useAxiosSecure();
    const { refetch } = useCarts();

    const handleFood = () => {
      // console.log(food, user.email)
      if(user && user.email){
        //  send cart item to the dataabse
        const cartItem = {
          menuItemId: _id,
          email: user.email,
          name,
          image,
          price,
        }

        axiosSecure.post('/carts', cartItem)
        .then(res => {
          console.log(res.data)
          if(res.data.insertedId){
            toast.custom((t) => (
              <div
                className={`${
                  t.visible ? 'animate-enter' : 'animate-leave'
                } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
              >
                <div className="flex-1 w-0 p-4 mx-auto">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={image}
                        alt=""
                      />
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {`Hello "${user.displayName}"`}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {`Your "${name}" added to your cart`}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex border-l border-gray-200">
                  <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Close
                  </button>
                </div>
              </div>
            ))
            // refetch cart to update the cart items count
            refetch();
          }
        })  
      }
      else{
        Swal.fire({
          title: "You are not Logged In",
          text: "Please Login to add to the cart!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login!"
        }).then((result) => {
          if (result.isConfirmed) {
            // send the user to the Login page
           navigate('/login', { state: {from: location}})
          }
        });
      }
    }
    return (
        <div className="card bg-base-100 max-w-80 max-h-96 shadow-xl mx-auto">
          <figure>
            <img src={image} alt="salad" />
          </figure>
          <p className='absolute right-0 mr-4 px-2 py-1 mt-3 bg-gray-950 text-white font-semibold rounded'>${price}</p>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions justify-center">
              <button onClick={handleFood} className="btn btn-outline btn-accent uppercase border-0 border-b-4">
                Add to Card
              </button>
            </div>
          </div>
        </div>
    );
};

export default OrderCard;