import React from 'react';

const OrderCard = ({item}) => {
    const {price,recipe, name, image} = item;
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
              <button className="btn btn-outline btn-accent uppercase border-0 border-b-4">
                Add to Card
              </button>
            </div>
          </div>
        </div>
    );
};

export default OrderCard;