import React from 'react';
import { Parallax, Background } from 'react-parallax';

const Cover = ({img, title, description}) => {
    return (
        <Parallax
        blur={{ min: -25, max: 25 }}
        bgImage={img}
        bgImageAlt="picture"
        strength={-200}
    >
        <div
  className="hero h-[500px]">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center bg-black bg-opacity-60 rounded px-8 py-6 sm:px-24 sm:py-10 md:px-44 md:py-12 lg:px-56 lg:py-12">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{title}</h1>
      <p className="mb-5">
       {description}
      </p>
    </div>
  </div>
</div>
    </Parallax>
        
    );
};

export default Cover;