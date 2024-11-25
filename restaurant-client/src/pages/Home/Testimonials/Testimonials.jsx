import React, { useContext, useEffect, useState } from "react";
import CategorySection from "../../../components/FoodCategorySection/CategorySection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  // const {user} = useContext(AuthContext);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div className="mb-[4rem]">
      <CategorySection
        subHeading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      ></CategorySection>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col justify-center items-center mx-24 my-3 space-y-3">
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <p className="text-5xl font-semibold text-black">“</p>
              <p className="font-semibold">{review.likeMost}</p>
              <p>{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.userName}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
