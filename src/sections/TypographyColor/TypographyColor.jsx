import BoxColor from "@/components/BoxColor";

const TypographyColor = () => {
  return (
    <section className="md:mx-[6.25rem] mx-[0.62rem] mt-[3.13rem] mb:mt-[8.75rem] grid gap-x-[10.25rem] md:grid-cols-2 grid-cols-1 grid-rows-[repeat(2,[row]_auto_)]">
      {/* TypographyColor left */}

      <h2
        className="textH2 !font-frauncesFont"
        data-aos-once
        data-aos="fade-up"
      >
        Typography & Color
      </h2>

      <p
        className="text-white md:text-base text-xs not-italic font-normal md:leading-[1.625rem] leading-[1.125rem] max-w-[41.125rem]"
        data-aos-once
        data-aos="fade-up"
      >
        Màu sắc sử dụng màu xanh chủ đạo theo nhận diện thương hiệu và kết hợp
        các line màu một các hài hòa.
      </p>

      <div>
        <div className="flex md:space-y-[1rem] flex-col md:mt-[5rem]">
          <div
            className="flex flex-col -space-y-[1rem]"
            data-aos-once
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <span className="text-white md:text-[10rem] text-[6.25rem] not-italic font-black leading-[normal] !font-frauncesFont">
              Aa
            </span>
            <span className="text-white md:text-[4.375rem] text-[2.8125rem] not-italic font-semibold md:leading-[4.71875rem] leading-[normal] font-frauncesFont">
              Fraunces
            </span>
          </div>
          <span
            className="text-white md:text-2xl text-xl not-italic font-normal md:leading-[3.4375rem] leading-[1.875rem] backdrop-blur-[2px] font-frauncesFont"
            data-aos-once
            data-aos="fade-up"
            data-aos-delay={400}
          >
            Bold/ Semibold/ Medium/ Regular
          </span>
        </div>
        <p
          className="text-white md:text-base text-xs not-italic font-normal md:leading-[1.625rem] leading-[1.125rem] md:max-w-[35.375rem] max-w-[22.1875rem] md:mt-[3.56rem] mt-4"
          data-aos-once
          data-aos="fade-up"
          data-aos-delay={800}
        >
          Font chữ mới mẻ hiện đại tạo cảm giác thích dễ chịu cho khách hàng
          khám phá website.
        </p>
      </div>

      <div className="flex flex-col space-y-[3.69rem] md:mt-[11.25rem] mt-8 w-full">
        <div className="flex md:space-x-[3.12rem] space-x-[1.25rem]  items-end">
          <BoxColor
            animate="fade-up"
            delay="200"
            text={"#182D2C"}
            bg={"#182D2C"}
            color={"#fff"}
          />
          <BoxColor
            animate="fade-up"
            delay="400"
            text={"#E2B648"}
            bg={"#E2B648"}
            color={"#fff"}
          />
          <BoxColor
            animate="fade-up"
            delay="600"
            text={"#FFF5E6"}
            bg={"#FFF5E6"}
            color={"#012623"}
          />
        </div>
        <div className="flex md:space-x-[3.12rem] space-x-[1.25rem] items-start">
          <BoxColor
            animate="fade-up"
            delay="800"
            text={"#FFFFFF"}
            bg={"#FFFFFF"}
            color={"#012623"}
          />
          <BoxColor
            animate="fade-up"
            delay="1000"
            text={"#012623"}
            bg={"#012623"}
            color={"#fff"}
          />
          <BoxColor
            animate="fade-up"
            delay="1200"
            text={"#CEBFAB"}
            bg={"#CEBFAB"}
            color={"#012623"}
          />
          <BoxColor
            animate="fade-up"
            delay="1400"
            text={"#EEC681"}
            bg={"#EEC681"}
            color={"#012623"}
          />
        </div>
      </div>
    </section>
  );
};

export default TypographyColor;
