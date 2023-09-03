import ExtraCuricilam from "../../ExtraCuriculam/ExtraCuricilam";
import HappyStudents from "../../HappyStudents/HappyStudents";
import MostPopular from "../../MostPopular/MostPopular";
import VisitSchool from "../../VisitSchool/VisitSchool";
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
      <VisitSchool></VisitSchool>
      <MostPopular></MostPopular>
      <WhyAdmit></WhyAdmit>
      <ExtraCuricilam>S</ExtraCuricilam>
      <HappyStudents></HappyStudents>
    </div>
  );
};

export default Home;
