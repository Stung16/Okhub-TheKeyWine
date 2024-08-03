import React from "react";
import Image from "next/image";

const Research3C = () => {
  return (
    <section className="md:mt-[7.73rem] mt-[3.13rem]">
      {/* Infomation text research */}
      <div
        className="mx-auto max-w-[40.75rem] grid grid-cols-1 md:gap-y-[1.5rem] gap-y-[0.5rem] flex-col"
        data-aos-once
        data-aos="fade-up"
      >
        <h2 className="textH2 text-center">3C Research</h2>
        <p
          className="text-white md:text-base text-xs not-italic font-normal md:leading-7 leading-[1.3125rem] md:w-[40.75rem] w-[22.1875rem] text-center"
          data-aos-once
          data-aos="fade-up"
          data-aos-delay="300"
        >
          TheKey Wine xây dựng website trong bối cảnh phát triển kinh tế số và
          ngành công nghiệp rượu vang Việt Nam đang có nhiều tiềm năng, nhằm tạo
          ra kênh bán hàng trực tuyến chuyên nghiệp.
        </p>
      </div>
      {/* infomation images research */}
      <div className="grid grid-cols-2 md:mt-[3.13rem] mt-4">
        <Image
          src="/images/research1.png"
          width={1400}
          height={733.38}
          alt="Research imgae"
          className="md:w-[50rem] w-[11.75rem] bg-cover flex-1"
          data-aos-once
          data-aos="fade-right"
        />
        <Image
          src="/images/research2.png"
          width={1400}
          height={733.38}
          alt="Research imgae"
          className="md:w-[50rem] w-[11.75rem] bg-cover flex-1"
          data-aos-once
          data-aos="fade-left"
        />
      </div>
    </section>
  );
};

export default Research3C;
