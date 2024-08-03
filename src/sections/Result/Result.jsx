import Image from "next/image";
import React from "react";

const Result = () => {
  return (
    // <div className="bg-[#1a3c39] relative min-h-[445rem] pb-10">
    <section className="bg-[#1a3c39] md:h-[calc(440.9375rem+25rem)] h-[138rem]">
      {/* result text */}
      <div className="md:mx-[6.25rem] mx-[0.62rem]  grid grid-cols-1 gap-y-4 md:gap-y-[3.81rem] md:-translate-y-[37rem] -translate-y-[15rem]">
        <div
          className="flex flex-col space-y-[1rem]"
          data-aos-once
          data-aos="fade-up"
          data-aos-offset="-550"
        >
          <h2 className="textH2">Kết quả dự án</h2>
          <p
            className="text-white md:text-base text-xs not-italic font-normal md:leading-7 leading-[1.125rem] md:max-w-[41.4375rem] max-w-[22.1875rem]"
            data-aos-once
            data-aos="fade-up"
            data-aos-offset="-650"
            data-aos-delay="400"
          >
            Trang chủ Thekey Wine là điểm giao tiếp đầu tiên và quan trọng nhất
            của khách hàng khi lên website. Thiết kế của website có cấu trúc đơn
            giản và dễ hiểu để khách hàng dễ dàng điều hướng trang web.
          </p>
        </div>

        {/* result image  */}
        <div
          className="flex flex-col"
          data-aos-once
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-offset="-770"
        >
          <div className="boxResult z-10">
            <Image
              src="/images/result1.png"
              width={1124}
              height={600}
              alt="result imgae"
              className="md:w-[70.25rem] w-[20.9375rem] bg-cover flex-shrink-0 md:rounded-[1.5rem] rounded-[0.5rem]"
            />
          </div>
          <div className="overflow-hidden md:min-h-[440.9375rem] min-h-[134rem] bg-[url(/images/result2.png)] md:w-[70.25rem] w-[20.9375rem] bg-cover flex-shrink-0 md:translate-x-4 translate-x-2 md:-translate-y-12"></div>
        </div>
      </div>
    </section>
  );
};

export default Result;
