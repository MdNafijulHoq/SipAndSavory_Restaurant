import React from 'react';
import Banner from '../Banner/Banner';
import FoodCategorySlider from '../FoodCategorySlider/FoodCategorySlider';
import RestaurantInfo from '../RestaurantInfo/RestaurantInfo';
import PopularMenu from '../PopularMenu/PopularMenu';
import CallSection from '../CallSection/CallSection';
import FoodRecommend from '../FoodRecommend/FoodRecommend';
import FeaturedSection from '../FeaturedSection/FeaturedSection';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Sip & Savory</title>
            </Helmet>
            <Banner></Banner>
            <FoodCategorySlider></FoodCategorySlider>
            <RestaurantInfo></RestaurantInfo>
            <PopularMenu></PopularMenu>
            <CallSection></CallSection>
            <FoodRecommend></FoodRecommend>
            <FeaturedSection></FeaturedSection>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;