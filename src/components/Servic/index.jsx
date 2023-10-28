import Image from "../../assets/images/card_image.png";
import Korzinka from "../../assets/icons/korzinka.svg";
import Ellipse from "../../assets/images/Ellipse.png";
import "./style.scss";

const index = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="all">
          <div className="engtepa">
            <img src={Ellipse} alt="ellipse" className="ellipse" />
            <div className="tepatexts">
              <h1 className="services_title">Services</h1>
              <p className="service_title">What our student say about us</p>
            </div>
          </div>

          <div className="service_cards">
            <div className="card1 ">
              <img src={Image} alt="image" className="image" />
              <div className="texts">
                <div className="texts_tepa">
                  <p>5,957 Students</p>
                  <h6>01h 49m</h6>
                </div>
                <p className="texts_uchd">
                  Learn 3D Modelling and Design for Beginners
                </p>
                <div className="texts_pastt">
                  <h5>$33.99</h5>
                  <img src={Korzinka} alt="korzinka" className="" />
                </div>
              </div>
            </div>
            <div className="card2">
              <img src={Image} alt="image" className="image" />
              <div className="texts">
                <div className="texts_tepa">
                  <p>5,957 Students</p>
                  <h6>01h 49m</h6>
                </div>
                <p className="texts_uchd">
                  Learn 3D Modelling and Design for Beginners
                </p>
                <div className="texts_pastt">
                  <h5>$33.99</h5>
                  <img src={Korzinka} alt="korzinka" className="" />
                </div>
              </div>
            </div>
            <div className="card2">
              <img src={Image} alt="image" className="image" />
              <div className="texts">
                <div className="texts_tepa">
                  <p>5,957 Students</p>
                  <h6>01h 49m</h6>
                </div>
                <p className="texts_uchd">
                  Learn 3D Modelling and Design for Beginners
                </p>
                <div className="texts_pastt">
                  <h5>$33.99</h5>
                  <img src={Korzinka} alt="korzinka" className="korzinka" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
