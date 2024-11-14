import React from 'react';
import CategorySection from '../../../components/FoodCategorySection/CategorySection';
import MenuItemCard from '../../Shared/MenuItemCard/MenuItemCard';
import useMenu from '../../../CustomHooks/useMenu';

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
                <p className='btn btn-outline btn-info uppercase max-w-64 flex mx-auto '>View Full Menu</p>
        </div>
    );
};

export default PopularMenu;