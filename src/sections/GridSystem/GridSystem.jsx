import Image from "next/image";
import React from "react";

const GridSystem = () => {
  return (
    <section className="md:mt-[8.62rem] mt-[3.13rem] md:mx-[6.25rem] mx-[0.62rem]">
      {/* information text grid */}
      <div
        className="flex flex-col space-y-[1rem] flex-1"
        data-aos-once
        data-aos="fade-up"
      >
        <h2 className="textH2">Hệ thống lưới</h2>
        <p
          className="text-white md:text-base text-xs not-italic font-normal md:leading-7 leading-[1.125rem] md:max-w-[41.4375rem]"
          data-aos-once
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Trang có 12 cột. Các thanh bên chứa logo và menu hurger. Nội dung
          trang được chia thành 2 cột và hiển thị một lưới tối thiểu để giới
          thiệu thông tin trang chủ.
        </p>
      </div>

      {/* information image grid */}
      <div className="flex-1">
        <div className="flex-1 flex md:flex-row flex-col md:space-x-[6.5rem] items-center space-y-[1.5rem] mt-[2.5rem]">
          <Image
            src="/images/gridSection.png"
            width={963}
            height={723}
            alt="grid imgae"
            className="md:w-[60.1875rem] w-[23.4375rem] bg-cover flex-shrink-0"
            data-aos-once
            data-aos="fade-right"
          />
          <Image
            data-aos-once
            data-aos="fade-right"
            src="/images/gridmb.svg"
            width={358}
            height={717}
            alt="grid imgae"
            className="md:w-[22.375rem] w-[15.18263rem] bg-cover flex-shrink-0"
          />
        </div>
      </div>
    </section>
  );
};

export default GridSystem;
