import React from 'react';

const MenuParallax = ({img, title, description}) => {
    return (
        <div className='mb-[4rem] w-full h-full bg-no-repeat bg-center bg-cover flex justify-center items-center bg-fixed' style={{backgroundImage: `url(${img})`, height: "400px"}}>
            <div className="card bg-black bg-opacity-85 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl shadow-xl mx-auto">
  <div className="card-body text-center p-12">
    <h3 className='font-bold text-lg text-white uppercase'>{title}</h3>
    <p className='text-white'>{description}</p>
  </div>
</div>
        </div>
    );
};

export default MenuParallax;