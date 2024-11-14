import React from 'react';

const MenuItemCard = ({item}) => {
    const {price,recipe, name, image} = item;
    return (
        <div className='flex justify-center items-center space-x-6 '>
            <img style={{borderRadius: '0px 200px 200px 200px'}} className='w-[6rem]' src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name} --------------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuItemCard;