import Image from "next/image";

const Banner = () => {
  return (
    <section className="grid md:grid-cols-2 grid-cols-1 gap-x-[6.75rem] min-h-screen items-center pt-[4.25rem] relative md:bg-[url(/images/bg-bannerr.png)] bg-[url(/images/bg-banner-mb.png)]  bg-cover bg-center md:mb-[13.44rem] mb-[10.25rem]">
      <div className="bg-[url(/icons/bg-layoutBlur.svg)] bg-contain md:w-[35.6875rem] w-[22.9375rem] md:h-[41.5625rem] h-[22.375rem] bg-no-repeat md:scale-x-[-1] absolute top-0  md:right-0 right-auto"></div>
      {/* banner-Text */}
      <div
        className="md:ml-[5.63rem] ml-[1.5rem] "
        data-aos-once
        data-aos="fade-up"
      >
        <h1 className="text-banner md:w-[40.125rem] w-[18.1875rem]">
          TheKey Wine - Biểu tượng của sự xa hoa và đẳng cấp
        </h1>
        <div className="md:mt-[3.75rem] mt-8">
          <ul className="grid md:grid-cols-4 grid-cols-2 gap-y-[1.75rem]">
            <li
              className="flex flex-col space-y-[0.5rem] "
              data-aos-once
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h4 className="text-white md:text-base text-sm not-italic font-medium leading-6 uppercase opacity-70">
                Khách hàng
              </h4>
              <div className="flex flex-col space-y-[0.5rem] ">
                <span className="text-white md:text-lg text-base not-italic font-semibold leading-6">
                  TheKey Wine
                </span>
              </div>
            </li>
            <li
              className="flex flex-col space-y-[0.5rem] "
              data-aos-once
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h4 className="text-white md:text-base text-sm not-italic font-medium leading-6 uppercase opacity-70">
                Dịch vụ
              </h4>
              <div className="flex flex-col space-y-[0.5rem] ">
                <span className="text-white md:text-lg text-base not-italic font-semibold leading-6">
                  UI/UX Design
                </span>
                <span className="text-white md:text-lg text-base not-italic font-semibold leading-6">
                  Development
                </span>
              </div>
            </li>
            <li
              className="flex flex-col space-y-[0.5rem] "
              data-aos-once
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h4 className="text-white md:text-base text-sm not-italic font-medium leading-6 uppercase opacity-70">
                Thời gian
              </h4>
              <div className="flex flex-col space-y-[0.5rem] ">
                <span className="text-white md:text-lg text-base not-italic font-semibold leading-6">
                  11/09/2021
                </span>
              </div>
            </li>
            <li
              className="flex flex-col space-y-[0.5rem] "
              data-aos-once
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h4 className="text-white md:text-base text-sm not-italic font-medium leading-6 uppercase opacity-70">
                Thành viên
              </h4>
              <div className="flex flex-col space-y-[0.5rem] ">
                <span className="text-white md:text-lg text-base not-italic font-semibold leading-6">
                  Trang Nguyễn
                </span>
                <span className="text-white md:text-lg text-base not-italic font-semibold leading-6">
                  Hai DN
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* banner logo */}
      <div
        data-aos-once
        data-aos="fade-right"
        className="md:mt-0 mt-[4.5rem] relative "
      >
        <Image
          src="/images/logoBanner.png"
          width={747}
          height={714}
          alt="Banner Logo"
          className="md:w-[46.6875rem] w-[23.1875rem] flex-shrink-0 h-auto translate-x-[0.63rem] bg-cover"
          priority
        />
      </div>
    </section>
  );
};

export default Banner;
