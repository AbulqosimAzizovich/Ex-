import React from "react";
import Header from "../../components/Header";
import Intro from "../../components/Intro";
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
        {/* <Intro /> */}
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
