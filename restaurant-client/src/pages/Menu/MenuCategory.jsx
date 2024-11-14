import React from "react";
import MenuItemCard from "../Shared/MenuItemCard/MenuItemCard";
import MenuParallax from "./MenuParallax";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, menuDescription, menuTitle, menuItemsCover }) => {
    return (
        <div className="mt-[4rem] mb-[4rem]">
            {menuTitle && (
                <MenuParallax
                    img={menuItemsCover}
                    title={menuTitle}
                    description={menuDescription}
                />
            )}
            
            <div className="grid md:grid-cols-2 gap-8 p-6">
                {items.map((item) => (
                    <MenuItemCard key={item._id} item={item} />
                ))}
            </div>
            
            {/* Convert menuTitle to lowercase for URL consistency */}
            <Link to={`/order/${menuTitle?.toLowerCase()}`}>
                <p className="btn btn-outline border-0 border-b-4 btn-info uppercase max-w-64 flex mx-auto">
                    ORDER YOUR FAVOURITE FOOD
                </p>
            </Link>
        </div>
    );
};

export default MenuCategory;



// import React from "react";
// import MenuItemCard from "../Shared/MenuItemCard/MenuItemCard";
// import MenuParallax from "./MenuParallax";
// import { Link } from "react-router-dom";

// const MenuCategory = ({
//   items,
//   menuDescription,
//   menuTitle,
//   menuItemsCover,
// }) => {
//   return (
//     <div className="mt-[4rem] mb-[4rem]">
//       {menuTitle && (
//         <MenuParallax
//           img={menuItemsCover}
//           title={menuTitle}
//           description={menuDescription}
//         ></MenuParallax>
//       )}

//       <div className="grid md:grid-cols-2 gap-8 p-6">
//         {items.map((item) => (
//           <MenuItemCard key={item._id} item={item}></MenuItemCard>
//         ))}
//       </div>
//       <Link to={`/order/${menuTitle}`}>
//         <p className="btn btn-outline border-0 border-b-4 btn-info uppercase max-w-64 flex mx-auto ">
//           ORDER YOUR FAVOURITE FOOD
//         </p>
//       </Link>
//     </div>
//   );
// };

// export default MenuCategory;
