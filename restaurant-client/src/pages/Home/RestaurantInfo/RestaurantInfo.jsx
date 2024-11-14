import React from 'react';
import backgroundImg from '../../../assets/home/chef-service.jpg'

const RestaurantInfo = () => {
    return (
        <div className='mb-[4rem] w-full h-full bg-no-repeat bg-center bg-cover flex justify-center items-center bg-fixed' style={{backgroundImage: `url(${backgroundImg})`, height: "400px"}}>
            <div className="card bg-base-100 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl shadow-xl mx-auto">
  <div className="card-body text-center p-12">
    <h3 className='font-bold text-lg text-rose-800'>Sip & Savory</h3>
    <p>Spi & Savory" is a vibrant restaurant blending rich, aromatic spices with fresh ingredients to create globally inspired, flavorful dishes. Known for its cozy ambiance and attentive service, it's the perfect spot for food enthusiasts seeking a memorable dining experience. Indulge in a menu that celebrates both classic and innovative flavors.</p>
  </div>
</div>
        </div>
    );
};

export default RestaurantInfo;