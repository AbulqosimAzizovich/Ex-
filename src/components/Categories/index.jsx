import icon from "../../assets/icons/topIcon.svg";
import img1 from "../../assets/images/card1-img.png";
import img2 from "../../assets/images/card2-img.png";
import img3 from "../../assets/images/card3-img.png";
import img4 from "../../assets/images/card4-img.png";
import img5 from "../../assets/images/card5-img.png";
import img6 from "../../assets/images/card6-img.png";
import "./style.scss";

const index = () => {
  return (
    <section className="bg-[#D9ECFF]">
      <div className="container">
        <img
          src={icon}
          alt="Top categories"
          className="mx-[640px] mb-[42px] pt-[100px] icon"
        />
        <p className="text-[25px] font-medium text-[#4E596B] text-center mb-[100px]">
          12,000+ unique online course list designs
        </p>
        <div className="flex">
          <div className="card2 w-[253px]  inline-block items-center justify-center border mx-auto rounded-[20px] shadow-md bg-white mb-[155px]d hover:shadow-xl">
            <img
              src={img1}
              alt="img"
              className="mt-[37px] mb-[50px] mx-[82px]"
            />
            <h2 className="text-[#324361] text-[25px] font-semibold max-w-[155px] text-center mb-[45px] mx-[49px]">
              Digtal Marketing
            </h2>
            <p className="text-center text-[#4F547B] text-[18px] font-medium">
              16 Courses
            </p>
          </div>
          <div className="card2 w-[253px]  inline-block items-center justify-center border mx-auto rounded-[20px] shadow-md bg-white mb-[155px] hover:shadow-xl">
            <img
              src={img2}
              alt="img"
              className="mt-[37px] mb-[50px] mx-[82px]"
            />
            <h2 className="text-[#324361] text-[25px] font-semibold max-w-[155px] text-center mb-[45px] mx-[49px]">
              Web Development
            </h2>
            <p className="text-center text-[#4F547B] text-[18px] font-medium">
              16 Courses
            </p>
          </div>
          <div className="card3 w-[253px]  inline-block items-center justify-center border mx-auto rounded-[20px] shadow-md bg-white mb-[155px] hover:shadow-xl">
            <img
              src={img3}
              alt="img"
              className="mt-[37px] mb-[50px] mx-[82px]"
            />
            <h2 className="text-[#324361] text-[25px] font-semibold max-w-[120px] text-center mb-[45px] mx-[60px]">
              Art & Humanities
            </h2>
            <p className="text-center text-[#4F547B] text-[18px] font-medium">
              76 Courses
            </p>
          </div>
          <div className="card4 w-[253px]  inline-block items-center justify-center border mx-auto rounded-[20px] shadow-md bg-white mb-[155px] hover:shadow-xl">
            <img
              src={img4}
              alt="img"
              className="mt-[37px] mb-[50px] mx-[82px]"
            />
            <h2 className="text-[#324361] text-[25px] font-semibold max-w-[155px] text-center mb-[45px] mx-[49px]">
              Personal Development
            </h2>
            <p className="text-center text-[#4F547B] text-[18px] font-medium">
              22 Courses
            </p>
          </div>
          <div className="card5 w-[253px]  inline-block items-center justify-center border mx-auto rounded-[20px] shadow-md bg-white mb-[155px] hover:shadow-xl">
            <img
              src={img5}
              alt="img"
              className="mt-[37px] mb-[50px] mx-[82px]"
            />
            <h2 className="text-[#324361] text-[25px] font-semibold max-w-[120px] text-center mb-[45px] mx-[72px]">
              IT and Software
            </h2>
            <p className="text-center text-[#4F547B] text-[18px] font-medium">
              110 Courses
            </p>
          </div>
          <div className="card6 w-[253px]  inline-block items-center justify-center border mx-auto rounded-[20px] shadow-md bg-white mb-[155px] hover:shadow-xl">
            <img
              src={img6}
              alt="img"
              className="mt-[37px] mb-[50px] mx-[82px]"
            />
            <h2 className="text-[#324361] text-[25px] font-semibold max-w-[120px] text-center mb-[45px] mx-[82px]">
              Graphic Design
            </h2>
            <p className="text-center text-[#4F547B] text-[18px] font-medium">
              85 Courses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
