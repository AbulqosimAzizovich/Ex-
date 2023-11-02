import React, { useEffect, useState } from "react";
import ServiceCard from "../../components/UI/ServiceCard/Servicecard";
import Image from "../../assets/images/card_image.png";
import Korzinka from "../../assets/icons/korzinka.svg";
import Ellipse from "../../assets/images/Ellipse.png";
import useServices from "../../service/services/useService";

import "./style.scss";

const index = () => {
  const [current, setCurrent] = useState([]);
  const xizmatlar = () => {
    useServices
      .getServices()
      .then((res) => {
        if (res.status === 200) {
          setCurrent(res?.data?.services);
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  useEffect(() => {
    xizmatlar();
  }, []);

  console.log(current);
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

          <div className="service_cards mb-5">
            {current.length &&
              current.map((e) => {
                return (
                  <>
                    <ServiceCard
                      title={e.title}
                      desc={e.description}
                      image={e.image}
                    />
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
