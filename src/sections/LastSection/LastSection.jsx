import Image from "next/image";
import Quote from "../../../public/images/Group.svg";

const LastSection = () => {
  return (
    <section className="md:mt-[6.81rem] mt-[3.88rem] pb-[30.31rem] bg-last">
      {/* <div className="bg-[url(/images/bg-layout2.png)] bg-no-repeat bg-contain bg-left h-[20rem] "> */}
      <div className="md:mx-[6.25rem] mx-[0.62rem] flex md:flex-row flex-col md:space-x-[7.38rem] md:items-center items-start ">
        {/* text LastSection */}
        <div className="md:translate-x-[1.87rem] md:max-w-[37rem] max-w-[20.9375rem] flex flex-col space-y-[2rem]">
          <div className="flex flex-col space-y-[2rem]">
            <Image
              src={Quote}
              width={61}
              height={47}
              alt="Research imgae"
              className="md:w-[3.79113rem] w-[2.41988rem] bg-cover flex-1"
            />
            <p
              className="md:text-[2rem] text-base md:ml-[1.88rem] ml-0 not-italic font-semibold md:leading-[3rem] leading-6"
              data-aos-once
              data-aos="fade-up"
            >
              Đó là một sự nỗ lực không ngừng nghỉ của các bạn bên OkHub. PSD
              thực sự ấn tượng với thiết kế đẹp mắt và tính năng dễ sử dụng mà
              OkHub mang lại cho chúng tôi.
            </p>
          </div>
          <div
            className="flex flex-col space-y-[0.62rem] md:ml-[1.88rem] ml-0"
            data-aos-once
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="text-left md:text-2xl text-[1.125rem] not-italic font-bold leading-[1.875rem]">
              CEO Huyền Trang
            </span>
            <span className="text-left md:text-xl text-base not-italic font-normal leading-6">
              Giám đốc TheKey Wine
            </span>
          </div>
        </div>

        {/* image LastSection */}
        <div data-aos-once data-aos="fade-right">
          <Image
            src="/images/lastSection.jpg"
            width={660}
            height={515}
            alt="Research imgae"
            className="md:w-[41.25rem] w-[21.5rem] bg-cover flex-1 mt-[1.5rem] md:mt-0"
          />
        </div>
      </div>
    </section>
  );
};

export default LastSection;
