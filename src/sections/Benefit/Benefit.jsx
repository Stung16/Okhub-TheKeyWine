import React from "react";

const Benefit = () => {
  return (
    <section className="grid grid-cols-1 grid-rows-[repeat(2,[row]_auto_)] gap-y-[1.94rem]  md:grid-cols-2 items-center relative mt-[6.44rem] md:mt-0">
      <div className="bg-[url(/icons/bg-layoutBlur.svg)] bg-contain w-[35.6875rem] h-[41.5625rem] bg-no-repeat  absolute top-0 left-0 md:block hidden"></div>
      
      <div>
        <div
          className="grid grid-cols-1 gap-y-[1.5rem] md:mx-[6.25rem] mx-[0.62rem] md:max-w-[34.9375rem] max-w-[md:mx-[6.25rem] mx-[0.62rem]]"
          data-aos-once
          data-aos="fade-up"
        >
          <h2 className="textH2 ">
            Xây dựng website TheKey Wine chuyên nghiệp{" "}
          </h2>
          <p
            className="text-white md:text-base text-xs not-italic font-normal md:leading-7 leading-[1.125rem]"
            data-aos-once
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Cung cấp cho khách hàng thông tin đầy đủ và chính xác về các sản
            phẩm rượu và dịch vụ tư vấn chuyên nghiệp, đồng thời tạo ra trải
            nghiệm mua sắm trực tuyến thuận tiện và hấp dẫn để đáp ứng nhu cầu
            của khách hàng và tăng tương tác với đối tác và khách hàng tiềm
            năng.
          </p>
        </div>
      </div>

      <div className="md:translate-y-[7.75rem] md:-translate-x-[3.255rem]">
        <div className="grid grid-rows-1 grid-cols-1 mx-[0.62rem] md:grid-cols-2">
          <div
            className="flex items-center justify-center order-2 md:order-1"
            data-aos-once
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="md:w-[22.375rem] w-[10.4375rem] md:h-[22.375rem] h-[10.4375rem] rounded-full flex-shrink-0 bg-[rgba(255,255,255,0.13)] flex items-center justify-center text-white md:text-xl text-base not-italic font-medium leading-7">
              <span className="w-[6.875rem] md-w-fit text-center">
                Giá thành hợp lý
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-[1.31rem] items-center order-1 md:order-1 md:grid-cols-1 md:gap-y-[5.63rem]">
            <div
              className="md:w-[22.375rem] w-[10.4375rem] md:h-[22.375rem] h-[10.4375rem] rounded-full flex-shrink-0 bg-[rgba(255,255,255,0.13)] flex items-center justify-center text-white md:text-xl text-base not-italic font-medium leading-7"
              data-aos-once
              data-aos="fade-left"
            >
              <span className="w-[6.875rem] md-w-fit text-center">
                Chất lượng đảm bảo
              </span>
            </div>
            <div
              data-aos-once
              data-aos="fade-left"
              data-aos-delay="600"
              className="md:w-[22.375rem] w-[10.4375rem] md:h-[22.375rem] h-[10.4375rem] rounded-full flex-shrink-0 bg-[rgba(255,255,255,0.13)] flex items-center justify-center text-white md:text-xl text-base not-italic font-medium leading-7"
            >
              <span className="w-[6.875rem] md-w-fit text-center">
                Chất lượng sản phẩm
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
