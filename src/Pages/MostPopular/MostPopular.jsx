import img1 from "../../../src/Images/m-1.jpg";
import img2 from "../../../src/Images/m-2.jpg";
import img3 from "../../../src/Images/m-3.jpg";
const MostPopular = () => {
  return (
    <div className="m-20">
      <h3 className="text-5xl text-center mb-7 text-[#5c6465]">
        Most Popular Classes
      </h3>
      <div className="mt-10 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <img src={img1} alt="CAR" />
          <img src={img2} alt="CAR" />
          <img src={img3} alt="CAR" />
        </div>
      </div>
    </div>
  );
};

export default MostPopular;
