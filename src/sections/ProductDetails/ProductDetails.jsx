import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../app/globals.css";

import {
  Autoplay,
  Pagination,
  Navigation,
  FreeMode,
  Scrollbar,
} from "swiper/modules";
import useWindowSize from "@/hooks/useScreenSize";
const ProductDetails = () => {
  const { width } = useWindowSize();
  const isMobile = width <= 767;
  return (
    <section className="md:bg-[#1a3c39] bg-[#012623] md:pb-[5.38rem] relative md:mt-0 mt-[3.63rem]">
      <div className="md:ml-[6.25rem] md:mr-[7rem] mx-[0.62rem] grid md:grid-cols-2 grid-cols-1 md:gap-x-[3.5rem] gap-y-6">
        {/* detail left */}
        <div
          className="grid grid-cols-1 md:gap-y-[2.5rem] gap-y-4"
          data-aos-once
          data-aos="fade-right"
        >
          <div
            className="flex flex-col max-w-[39.125rem]"
            data-aos-once
            data-aos="fade-up"
          >
            <h2 className="textHeader md:text-[2.5rem] text-[1.5rem] not-italic font-semibold md:leading-[4.71875rem] leading-[2.25rem]">
              Chi tiết sản phẩm
            </h2>
            <p
              className="text-white text-base not-italic font-normal leading-7 max-w-[41.4375rem]"
              data-aos-once
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Page chi tiết cho thấy các ưu điểm nổi bật cũng như giá cả để
              thuận tiện cho khách hàng thao khảo và mua hàng.
            </p>
          </div>

          <div
            className="flex md:w-[40.8125rem]  w-[21.9375rem]  flex-col items-start gap-2.5 shrink-0 md:p-2.5 p-2 rounded-3xl bg-[rgba(255,255,255,0.10)]"
            data-aos-once
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <Image
              src="/images/product1.jpg"
              width={633}
              height={377}
              alt="Research imgae"
              className="md:w-[39.5625rem] w-[20.9375rem] bg-cover flex-shrink-0 rounded-[1rem] order-1"
            />
          </div>

          <div className="grid grid-cols-1 order-3 md:order-2">
            <div
              className="flex md:w-[40.8125rem]  w-[21.9375rem] flex-col items-start gap-2.5 shrink-0 md:p-2.5 p-2 rounded-3xl bg-[rgba(255,255,255,0.10)]"
              data-aos-once
              data-aos="fade-right"
              data-aos-delay="600"
            >
              <Image
                src="/images/product2.jpg"
                width={633}
                height={377}
                alt="Research imgae"
                className="md:w-[39.5625rem] w-[20.9375rem] bg-cover flex-shrink-0 rounded-[1rem]"
              />
            </div>
          </div>

          <p className="order-2 md:order-3">
            Tư vấn hình ảnh giúp khách hàng truyền tải thông tin hiệu quả nhất.
          </p>
        </div>

        {/* detail right */}
        <div
          className="grid grid-cols-1 md:gap-y-[1.5rem] gap-y-[1rem]"
          data-aos-once
          data-aos="fade-left"
        >
          <div
            className="flex md:w-[42.4375rem] w-[21.9375rem] flex-col items-start gap-2.5 shrink-0 md:p-2.5 p-2 rounded-3xl bg-[rgba(255,255,255,0.10)] md:order-1 order-2"
            data-aos-once
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <Image
              src="/images/product3.jpg"
              width={659}
              height={848}
              alt="Research imgae"
              className="md:w-[41.1875rem] w-[20.9375rem] bg-cover flex-shrink-0 rounded-[1rem]"
            />
          </div>
          <div
            className="flex flex-col max-w-[39.125rem] md:order-2 order-1 space-y-[0.62rem] md:space-y-[0.5rem]"
            data-aos-once
            data-aos="fade-up"
          >
            <h2 className="textHeader md:text-[2rem] text-xl not-italic font-semibold md:leading-[3rem] leading-9">
              Thương hiệu Thekey Wine
            </h2>
            <p
              className="text-white md:text-base text-xs not-italic font-normal md:leading-7 leading-[1.125rem] md:max-w-[41.4375rem] max-w-[22.1875rem]"
              data-aos-once
              data-aos="fade-up"
              data-aos-delay="100"
            >
              The Key Wine mang đến cho bạn những dòng rượu mới nhất, với “ thức
              uống trời ban” chứa nhiều ưu điểm vượt trội mang đến cho người
              dùng rải nghiệm tuyệt vời nhất.
            </p>
          </div>
        </div>
      </div>

      {/* bg-banner */}
      <div className="hidden md:block absolute z-0 top-1/2 -translate-y-1/2 bg-[url(/images/bg-layout2.png)] bg-contain w-[137.9375rem] h-[66.875rem] flex-shrink-0"></div>

      {/* responsice */}
      <div className="md:mt-[8.96rem] md:ml-[6.25rem] md:mr-[7rem] container-warraper">
        {/* slide mobile show */}
        {isMobile ? (
          <div className="grid grid-cols-1 gap-y-[2rem] mt-10">
            <div
              className="flex flex-col space-y-[2.5rem]"
              data-aos-once
              data-aos="fade-right"
            >
              <div className="flex flex-col space-y-[0.62rem] mx-[0.62rem]">
                <h2 className="textHeader text-2xl not-italic font-semibold leading-[2.25rem]">
                  Tối ưu Responsive
                </h2>
                <p className="max-w-[22.1875rem] text-xs not-italic font-normal leading-[1.125rem]">
                  TheKey Wine xây dựng website trong bối cảnh phát triển kinh tế
                  số và ngành công nghiệp rượu vang Việt Nam đang có nhiều tiềm
                  năng.
                </p>
              </div>
              <div
                className="bg-[#012623]"
                // data-aos-once
                // data-aos="fade-right"
              >
                <Swiper
                  slidesPerView={1.3}
                  spaceBetween={23}
                  freeMode={true}
                  grabCursor={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  scrollbar={true}
                  pagination={{
                    el: ".abc",
                  }}
                  // navigation={true}
                  modules={[
                    Pagination,
                    Navigation,
                    FreeMode,
                    Autoplay,
                    Scrollbar,
                  ]}
                  className="mySwiper"
                >
                  <SwiperSlide className="bg-[#]">
                    <Image
                      src="/images/slideRes1.jpg"
                      width={245}
                      height={712}
                      alt="Research imgae"
                      className="w-[15.3655rem] absolute top-0 h-[29.4375rem] object-cover bg-cover border-[8px] border-[rgba(249,249,249,0.10)] rounded-2xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="bg-[#]">
                    <Image
                      src="/images/slideRes1.jpg"
                      width={245}
                      height={712}
                      alt="Research imgae"
                      className="w-[15.3655rem] absolute top-0 h-[29.4375rem] object-cover  bg-cover border-[8px] border-[rgba(249,249,249,0.10)] rounded-2xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="bg-[#]">
                    <Image
                      src="/images/slideRes1.jpg"
                      width={245}
                      height={712}
                      alt="Research imgae"
                      className="w-[15.3655rem] absolute top-0 h-[29.4375rem] object-cover bg-cover border-[8px] border-[rgba(249,249,249,0.10)] rounded-2xl"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex space-x-[6.25rem]">
            {/*  responsive1*/}
            <div
              className="flex flex-col space-y-[2.5rem]"
              data-aos-once
              data-aos="fade-right"
            >
              <h2 className="textHeader text-6xl not-italic font-semibold leading-[4.71875rem]">
                Tối ưu Responsive
              </h2>
              <div className="rounded-2xl">
                <Image
                  src="/images/res1.jpg"
                  width={245}
                  height={712}
                  alt="Research imgae"
                  className="w-[15.3655rem]  h-[29.4375rem] object-cover md:w-[21.75rem] bg-cover border-[8px] border-[rgba(249,249,249,0.10)] rounded-2xl"
                />
              </div>
            </div>

            {/*  responsive1*/}
            <div
              className="flex flex-col space-y-[4.25rem]"
              data-aos-once
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="rounded-2xl">
                <Image
                  src="/images/res2.jpg"
                  width={247}
                  height={504}
                  alt="Research imgae"
                  className="w-[15.40888rem] bg-cover border-[8px] border-[rgba(249,249,249,0.10)] rounded-2xl"
                />
              </div>
              <p className="max-w-[20.4375rem] text-base not-italic font-normal leading-7">
                Website tự động điều chỉnh các khối nội dung khi hiển thị trên
                mobile
              </p>
            </div>

            {/*  responsive1*/}
            <div
              className="flex flex-col space-y-[2.81rem]"
              data-aos-once
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <p className="max-w-[22.9375rem] text-base not-italic font-normal leading-7">
                Để trải nghiệm người dùng được xuyên suốt, chung stooi thiết kế
                riêng phiên bản trên mobile cho các trang có layout đặc biệt
              </p>
              <div className="rounded-2xl">
                <Image
                  src="/images/res3.jpg"
                  width={247}
                  height={504}
                  alt="Research imgae"
                  className="w-[15.40888rem] bg-cover border-[8px] border-[rgba(249,249,249,0.10)] rounded-2xl"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetails;
