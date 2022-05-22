import React from "react";
import Banner from "./Banner";
import Ceo from "./Ceo";
import Explore from "./Explore";
import Review from "./Review";
import Summary from "./Summary";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <Summary></Summary>
      <Review></Review>
      <Ceo></Ceo>
      <Explore></Explore>
    </div>
  );
};

export default Home;
