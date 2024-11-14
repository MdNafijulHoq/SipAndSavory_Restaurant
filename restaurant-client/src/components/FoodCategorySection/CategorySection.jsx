import React from 'react';

const CategorySection = ({subHeading, heading}) => {
    return (
        <div className='text-center md:w-4/12 mx-auto my-8'>
            <p className='text-yellow-600 mb-3'>---{subHeading}---</p>
            <h3 className='text-xl md:text-3xl uppercase border-y-4 py-4'>{heading}</h3>
        </div>
    );
};

export default CategorySection;