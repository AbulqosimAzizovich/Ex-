import "./style.scss";
import logo from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";
const index = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <a href="#">
            <img src={logo} alt="" />
          </a>

          <div className="navbar_info">
            <ul className="navbar_info_list">
              <li>
                <a href="#course" className="navbar_info_list_item">
                  Courses
                </a>
              </li>
              <li>
                <a href="#services" className="navbar_info_list_item">
                  Services
                </a>
              </li>
            </ul>

            <Link to="/login">
              <button>Join</button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default index;
