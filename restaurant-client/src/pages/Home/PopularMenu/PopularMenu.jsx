import React from 'react';
import CategorySection from '../../../components/FoodCategorySection/CategorySection';
import MenuItemCard from '../../Shared/MenuItemCard/MenuItemCard';
import useMenu from '../../../CustomHooks/useMenu';
import { Link } from 'react-router-dom';

const PopularMenu = () => {
    const  [menu] = useMenu();
    const popularItems = menu.filter(item => item.category === 'popular')
    return (
        <div className='mb-[4rem]'>
            <CategorySection
            subHeading={"Check it out"}
            heading={"FROM OUR MENU"}
                ></CategorySection>
                <div className='grid md:grid-cols-2 gap-8 p-6'>
                {
                    popularItems.map(item => <MenuItemCard
                    key={item._id}
                    item={item}
                    ></MenuItemCard>)
                }
                </div>
                <Link to='/order/:category?'><button className='btn btn-outline btn-info border-0 border-b-4 uppercase max-w-64 flex mx-auto '>View Full Menu</button></Link>
        </div>
    );
};

export default PopularMenu;