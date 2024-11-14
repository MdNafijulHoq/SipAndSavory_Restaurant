import React from 'react';
import CategorySection from '../../../components/FoodCategorySection/CategorySection';
import featuredImg from '../../../assets/home/featured.jpg'
import featuredBgImg from '../../../assets/home/featured.jpg'

const FeaturedSection = () => {
    return (
        <div className='mb-[4rem] w-full h-full bg-fixed bg-no-repeat bg-cover bg-center pt-8' style={{backgroundImage: `url(${featuredBgImg})`}}>
            <CategorySection
             subHeading={"Check it out"}
             heading={"FROM OUR MENU"}></CategorySection>
             <div className='md:flex justify-center items-center px-20 md:px-36 pb-10 md:pb-20 pt-12 gap-x-8 bg-slate-700 bg-opacity-50'>
                <div>
                    <img className='rounded' src={featuredImg} alt="" />
                </div>
                <div className='mt-5 space-y-2 text-white'>
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='btn btn-outline text-white border-0 border-b-4'>Order Now</button>
                </div>
             </div>
        </div>
    );
};

export default FeaturedSection;