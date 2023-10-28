import "./style.scss";
import logo from "../../assets/icons/logo.svg";
const index = () => {
  return (
    <header>
      <div class="container">
        <nav class="navbar">
          <a href="#">
            <img src={logo} alt="" />
          </a>

          <div class="navbar_info">
            <ul class="navbar_info_list">
              <li>
                <a href="#" class="navbar_info_list_item">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" class="navbar_info_list_item">
                  Services
                </a>
              </li>
            </ul>
            <button class="">Join</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default index;
