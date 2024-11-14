import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuCover from '../../../src/assets/menu/banner3.jpg'
import CategorySection from '../../components/FoodCategorySection/CategorySection.jsx';
import useMenu from '../../CustomHooks/useMenu.jsx';
import MenuCategory from './MenuCategory.jsx';
import menuBgImg from '../../assets/menu/dessert-bg.jpeg'
import menuBgImg1 from '../../../src/assets/menu/pizza-bg.jpg'
import menuBgImg2 from '../../../src/assets/menu/salad-bg.jpg'
import menuBgImg3 from '../../../src/assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu] = useMenu();
    const offeredItems = menu.filter(item => item.category === 'offered')
    const dessertItems = menu.filter(item => item.category === 'dessert')
    const pizzaItems = menu.filter(item => item.category === 'pizza')
    const saladItems = menu.filter(item => item.category === 'salad')
    const soupItems = menu.filter(item => item.category === 'soup')
   
    
    return (
        <div>
             <Helmet>
                <title>Menu | Sip & Savory</title>
            </Helmet>
            {/* Main Menu */}
            <Cover img={menuCover}
            title={"OUR MENU"}
            description={"Would you like to try a dish?"}
            ></Cover>
            {/* Offered Section */}
            <CategorySection subHeading={"Don't miss"} heading={"TODAY'S OFFER"}></CategorySection>
            <MenuCategory items={offeredItems}></MenuCategory>
            {/* Dessert Section */}
            <MenuCategory items={dessertItems} menuTitle="Desserts" menuDescription="Enthusiastically embrace compelling applications whereas world-class innovation. Compellingly seize." menuItemsCover={menuBgImg}></MenuCategory>
            {/* Pizza Section */}
            <MenuCategory items={pizzaItems} menuTitle="Pizzas" menuDescription="Compellingly enable maintainable opportunities with reliable architectures. Energistically productivate." menuItemsCover={menuBgImg1}></MenuCategory>
             {/* Salad Section */}
             <MenuCategory items={saladItems} menuTitle="Salads" menuDescription="Seamlessly customize intermandated resources and intermandated intellectual capital. Uniquely plagiarize highly." menuItemsCover={menuBgImg2}></MenuCategory>
              {/* Soup Section */}
            <MenuCategory items={soupItems} menuTitle="Soups" menuDescription="Progressively envisioneer best-of-breed best practices through efficient convergence. Authoritatively strategize vertical." menuItemsCover={menuBgImg3}></MenuCategory>
            
        </div>
    );
};

export default Menu;