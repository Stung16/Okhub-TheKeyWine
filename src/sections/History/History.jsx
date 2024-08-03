import Image from "next/image";

const History = () => {
  return (
    <section className="md:bg-none bg-[url(/images/bg-history.png)] bg-cover bg-[0_136%]  object-fill bg-no-repeat">
      <div className="md:mx-[5.25rem] mx-[0.62rem]">
        {/* Information History */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-y-4 justify-between items-center">
          <h2 className="textH2" data-aos-once data-aos="fade-right">
            Bối cảnh
          </h2>
          <p
            className="md:max-w-[44rem] max-w-[21.8125rem] text-white md:text-base text-xs not-italic font-normal md:leading-7 leading-[1.125rem]"
            data-aos-once
            data-aos="fade-left"
          >
            TheKey Wine xây dựng website trong bối cảnh phát triển kinh tế số và
            ngành công nghiệp rượu vang Việt Nam đang có nhiều tiềm năng, nhằm
            tạo ra kênh bán hàng trực tuyến chuyên nghiệp và thu hút được nhiều
            khách hàng tiềm năng.
          </p>
        </div>

        {/* Information Image*/}
        <div
          className="md:mt-[7.69rem] mt-10"
          data-aos-once
          data-aos="fade-right"
        >
          <Image
            src="/images/historyImage.png"
            width={1400}
            height={733.38}
            alt="Banner Logo"
            className="md:w-[87.5rem] w-[22.1875rem] bg-cover flex-shrink-0"
          />
        </div>
      </div>
    </section>
  );
};

export default History;
