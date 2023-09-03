/* eslint-disable react/no-unescaped-entities */
import school from "../../../src/Images/visit.jpg";
const VisitSchool = () => {
  return (
    <div className="my-10 ">
      <h3 className="text-6xl text-center mb-7 text-[#5c6465]">
        Visit Our School
      </h3>
      <div className="border-4 border-[#5c6465] rounded-lg shadow-2xl p-5 m-10">
        <div className="hero ">
          <div className="hero-content gap-24 flex-col lg:flex-row">
            <img src={school} className="w-2/5 rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Brand Of The Week</h1>
              <p className="py-6">
                Discover the power of our martial arts brand, where tradition
                meets innovation, and excellence is our hallmark. Our martial
                arts brand stands for more than just physical skills; it's a
                symbol of discipline, respect, and lifelong growth..
              </p>
              <button className="btn">Get Started</button>
            </div>
          </div>
        </div>
        <div className="hero ">
          <div className="hero-content gap-24 flex-col lg:flex-row-reverse">
            <img src={school} className="w-2/5 rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">What's Hot Now!</h1>
              <p className="py-6">
                Join us in mastering the hottest martial arts moves and
                techniques, as we continuously update our curriculum with the
                latest advancements, keeping you at the forefront of the martial
                arts world.
              </p>
              <button className="btn ">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitSchool;
