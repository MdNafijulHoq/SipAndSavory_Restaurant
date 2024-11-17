import React from 'react';
import CategorySection from '../../../components/FoodCategorySection/CategorySection';
import SingleCart from './SingleCart';

const MyCart = () => {
    return (
        <div>
            <CategorySection subHeading={'My Cart'} heading={'WANNA ADD MORE?'}></CategorySection>
            <SingleCart></SingleCart>
        </div>
    );
};

export default MyCart;