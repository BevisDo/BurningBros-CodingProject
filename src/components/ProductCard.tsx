import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { Product } from "../constants/interfaces/product";

const ProductCard = ({
  brand,
  category,
  description,
  images,
  title,
  price,
  rating,
}: Product) => {
  return (
    <div className="border-2 my-4 rounded-2xl p-4 flex gap-6 group hover:scale-105 duration-500">
      <div className="min-w-[400px] w-[400px] border-2 rounded-2xl overflow-hidden">
        <Swiper
          modules={[Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {images.map((item) => (
            <SwiperSlide>
              <img
                src={item}
                alt="product"
                className="w-full h-[220px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full flex flex-col gap-1">
        <p>{brand}</p>
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-bold">{title}</p>
          <p className="text-3xl font-bold group-hover:animate-bounce group-hover:text-blue-500 duration-300">
            ${price}
          </p>
        </div>
        <div className="bg-slate-300 w-fit rounded-full px-2 text-black/50 text-sm">
          <p>{category}</p>
        </div>
        <p className="text-gray-400">{description}</p>
        <p>Rating {rating}</p>
      </div>
    </div>
  );
};

export default ProductCard;
