import React from "react";
import CategorySection from "../../../components/FoodCategorySection/CategorySection";
import salad from "../../../assets/home/slide1.jpg";
import dessert from "../../../assets/home/slide4.jpg";
import pizza from "../../../assets/home/slide2.jpg";

const FoodRecommend = () => {
  return (
    <div className="mb-[4rem]">
      <CategorySection
        subHeading={"Should Try"}
        heading={"CHEF RECOMMENDS"}
      ></CategorySection>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card bg-base-100 max-w-80 max-h-96 shadow-xl mx-auto">
          <figure>
            <img src={salad} alt="salad" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline btn-accent uppercase border-0 border-b-4">
                Add to Card
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 max-w-80 max-h-96 shadow-xl mx-auto">
          <figure>
            <img src={dessert} alt="dessert" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Dessert</h2>
            <p>
              Melted mozzarella cheese, pepperoni, and fresh basil on a crisp,
              golden crust.
            </p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline btn-accent uppercase border-0 border-b-4">
                Add to Card
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 max-w-80 max-h-96 shadow-xl mx-auto">
          <figure>
            <img src={pizza} alt="pizza" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Pizza</h2>
            <p>
              Layers of rich chocolate, whipped cream, and a hint of vanilla,
              topped with fresh berries.
            </p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline btn-accent uppercase border-0 border-b-4">
                Add to Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodRecommend;
