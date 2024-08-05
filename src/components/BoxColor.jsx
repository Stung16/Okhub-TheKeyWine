const BoxColor = ({ text, bg, color, animate, delay }) => {
  return (
    <div
      className={`md:w-[8.125rem] w-[4.625rem] md:h-[8.125rem] h-[4.625rem] flex justify-center items-center shadow-[0px_4px_35px_0px_rgba(211,161,74,0.1)] rounded-[0.625rem] md:text-xl text-xs not-italic font-semibold leading-7`}
      style={{ backgroundColor: bg, color: color }}
      data-aos={animate}
      data-aos-delay={delay}
    >
      {text}
    </div>
  );
};

export default BoxColor;
