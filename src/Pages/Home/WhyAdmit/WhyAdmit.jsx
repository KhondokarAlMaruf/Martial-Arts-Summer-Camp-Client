import img from "../../../Images/kids.png";
const WhyAdmit = () => {
  return (
    <div>
      <h2 className="text-6xl text-center my-16 text-[#5c6465]">
        Why enroll with us?
      </h2>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Martial Arts Summer Camp</h2>
          <p>
            Looking to enjoy a truly awesome summer experience? Are you ready to
            discover your inner power? Look no further than Martial Arts Summer
            Training Camps!
          </p>
          <p>
            Martial Arts Summer Training Camps are becoming increasingly popular
            for individuals of all ages and skill levels
          </p>
          <p>
            So, if youre looking for a transformative and unforgettable summer
            experience, theres no better time to join a Martial Arts Summer
            Training Camp!
          </p>
          <div className="card-actions justify-end">
            <button className="btn bg-[#CAD5E2]">Enroll now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyAdmit;
