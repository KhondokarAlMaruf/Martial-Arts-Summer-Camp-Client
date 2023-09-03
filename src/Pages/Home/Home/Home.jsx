import MostPopular from "../../MostPopular/MostPopular";
import Banner from "../Banner/Banner";
import TopEnrollClass from "../TopEnrollClass/TopEnrollClass";
import TopInstructors from "../TopInstructors/TopInstructors";
import WhyAdmit from "../WhyAdmit/WhyAdmit";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TopEnrollClass></TopEnrollClass>
      <TopInstructors></TopInstructors>
      <MostPopular></MostPopular>
      <WhyAdmit></WhyAdmit>
    </div>
  );
};

export default Home;
