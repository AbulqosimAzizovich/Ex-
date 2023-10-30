import hacker from "../../assets/images/hackerImg.png";
import reactLogo from "../../assets/icons/icon-react.svg";
import vue from "../../assets/icons/vue.svg";
import amazon from "../../assets/icons/amazon.svg";
import amd from "../../assets/icons/amd.svg";
import megabox from "../../assets/icons/megabox.svg";
import najotTalim from "../../assets/icons/najot-talim.svg";
import logitech from "../../assets/icons/logitech.svg";
import uzum from "../../assets/icons/uzum.svg";

import "./style.scss";

const Header = () => {
  return (
    <>
      <section id="intro">
        <div className="intro__wrapper">
          <div className="container">
            <div className="box flex items-start justify-between">
              <div className="box-left">
                <p className="sm-title">Successful coaches are visionaries</p>
                <h1>
                  Good <span>coaching</span> is good teaching & nothing else.
                  InshaaAlloh
                </h1>
                <button>Coureses</button>
                <div>
                  <p>What do you want to learn today?</p>
                  <div>
                    <i className="bx bx-search-alt-2 text-white text-[20px]"></i>
                    <span> </span>
                    <input
                      className="border-none focus:border-none active:border-none"
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
              <div className="box-right">
                <div className="box-img">
                  <div>
                    <img src={hacker} alt="hackerImg" />
                  </div>
                  <div>
                    <img src={reactLogo} alt="logo" />
                  </div>
                  <div>
                    <img src={vue} alt="logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="intro-child">
        <div className="container">
          <div className="box-child">
            <img src={amazon} alt="logo" />
            <img src={amd} alt="logo" />
            <img src={megabox} alt="logo" />
            <img src={najotTalim} alt="logo" />
            <img src={logitech} alt="logo" />
            <img src={uzum} alt="logo" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
