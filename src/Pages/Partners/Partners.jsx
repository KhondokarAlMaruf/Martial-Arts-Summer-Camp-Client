import logo1 from "../../Images/barbie-blue-logo-png-image-11661569404l5l49rpgzi.png";
import logo2 from "../../Images/DC_Comics_logo.svg.png";
import logo3 from "../../Images/funko6688.jpg";
import logo4 from "../../Images/images.png";
const Partners = () => {
  return (
    <div className="mx-auto">
      <h3 className="text-5xl text-center mb-10 text-[#5c6465]">
        Our Corporate Partners
      </h3>
      <div className=" ms-16 grid grid-cols-1 md:grid-cols-4 gap-5  ">
        <div className="avatar">
          <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={logo1} />
          </div>
        </div>
        <div className="avatar">
          <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={logo2} />
          </div>
        </div>
        <div className="avatar">
          <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={logo3} />
          </div>
        </div>
        <div className="avatar">
          <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={logo4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
