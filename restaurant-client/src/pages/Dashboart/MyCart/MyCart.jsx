import React from 'react';
import CategorySection from '../../../components/FoodCategorySection/CategorySection';
import SingleCart from './SingleCart';
import { Helmet } from 'react-helmet-async';

const MyCart = () => {
    return (
        <div>
            <Helmet>
        <title>My Cart | Sip & Savory</title>
      </Helmet>
            <CategorySection subHeading={'My Cart'} heading={'WANNA ADD MORE?'}></CategorySection>
            <SingleCart></SingleCart>
        </div>
    );
};

export default MyCart;