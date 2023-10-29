import React from "react";
import Header from "../../components/Header";
import Learn from "../../components/Learn";
import Intro from "../../components/Intro";
import Categories from "../../components/Categories";
import Wishes from "../../components/Wishes";
import Video from "../../components/Vsection";
import Service from "../../components/Servic";
import Footer from "../../components/Footer";

const Layout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Learn />
        {/* <Intro /> */}
        {/* <Categories /> */}
        <Wishes />
        <Video />
        <Service />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
