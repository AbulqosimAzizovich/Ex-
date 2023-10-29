import Courses from "../../components/Courses";
import Learn from "../../components/Learn";
import Intro from "../../components/Intro";
import Categories from "../../components/Categories";
import Wishes from "../../components/Wishes";
import Video from "../../components/Vsection";
import Service from "../../components/Servic";
import "./style.scss";

const index = () => {
  return (
    <>
      <Intro />
      <Courses />
      <Learn />
      <Categories />
      <Wishes />
      <Video />
      <Service />
    </>
  );
};

export default index;
