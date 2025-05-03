import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { productList } from "../../assets/data/courseData";
import "../../css/CoursesOld.css";

const CoursesOld = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-gray-800 to-black text-white py-12 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold">Courses We Provide</h1>
        <p className="text-base md:text-lg mt-4 text-gray-300">
          Explore our wide range of professional courses designed to enhance your skills.
        </p>
      </div>

      {/* Swiper Carousel */}
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {productList.map((product) => (
            <SwiperSlide key={product.key}>
              <div className="bg-gray-700 rounded-lg shadow-lg p-6 flex flex-col items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-40 w-full object-cover mb-4 rounded-lg"
                />
                <h3 className="text-lg md:text-xl font-semibold text-center">{product.title}</h3>
                <p className="text-yellow-400 mt-2">⭐ {product.rating}</p>
                <p className="text-lg font-bold mt-2">${product.price}</p>
                <button
                  className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
                  aria-label={`Learn more about ${product.title}`}
                >
                  Learn More
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CoursesOld;
