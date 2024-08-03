import Image from "next/image";

const BusinessProducts = () => {
  return (
    <section className="md:mx-[6.25rem] mx-[0.62rem] flex md:space-y-[4.25rem] space-y-[1rem] flex-col flex-1">
      {/* infomation text businessProducts */}
      <div
        className="flex flex-col md:space-y-[1rem] space-y-[0.62rem] md:max-w-[41.4375rem] max-w-[21.8125rem]"
        data-aos-once
        data-aos="fade-up"
      >
        <h2 className="textH2">Ngành hàng kinh doanh</h2>
        <p
          className="text-white md:text-base text-xs not-italic font-normal md:leading-7 leading-[1.125rem] "
          data-aos-once
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Việt Nam đã trở thành tâm điểm quan tâm của ngành công nghiệp rượu
          vang. Thị trường rượu vang chuyển tiếp và đầy hứa hẹn này có thể trở
          thành đối tác thương mại phát triển mạnh mẽ trong thập kỷ tới.
        </p>
      </div>

      {/* infomation image businessProducts */}
      <div className="flex-1" data-aos-once data-aos="fade-right">
        <Image
          src="/images/businessProducts.jpg"
          width={1400}
          height={822}
          alt="businessProducts imgae"
          className="md:w-[87.5rem] w-[22.1875rem] bg-cover flex-shrink-0"
          priority
        />
      </div>
    </section>
  );
};

export default BusinessProducts;
