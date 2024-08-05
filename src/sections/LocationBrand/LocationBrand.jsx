import Image from "next/image";

const LocationBrand = () => {
  return (
    <section className="bg-[url(/images/bg-layout2.png)] bg-no-repeat bg-contain bg-right">
      <div className="md:mx-[6.25rem] mx-[0.62rem] md:mt-[3.81rem] mt-[2.5rem]  grid md:grid-cols-2 grid-cols-1 md:gap-x-[4rem] gap-y-[1rem] items-center md:pb-[7.81rem] mb-8">
        {/* infomation image brand */}
        <Image
          src="/images/locationBrand.png"
          width={862}
          height={533}
          alt="Research imgae"
          className="md:w-[53.875rem] w-[22.1875rem] h-auto bg-cover md:mt-0 order-2 md:order-1"
          data-aos-once
          data-aos="fade-right"
        />

        {/* infomation text brand */}
        <div
          className="grid grid-cols-1 md:gap-y-[1rem] gap-y-[0.62rem] max-w-[29.625rem] order-1 md:order-2"
          data-aos-once
          data-aos="fade-up"
        >
          <h2 className="textH2">Vị trí thương hiệu</h2>
          <p
            className="text-white md:text-base text-xs not-italic font-normal md:leading-7 leading-[1.125rem]"
            data-aos-once
            data-aos="fade-up"
            data-aos-delay="300"
          >
            TheKey Wine xây dựng website trong bối cảnh phát triển kinh tế số và
            ngành công nghiệp rượu vang Việt Nam đang có nhiều tiềm năng, nhằm
            tạo ra kênh bán hàng trực tuyến chuyên nghiệp và thu hút được nhiều
            khách hàng tiềm năng.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocationBrand;
