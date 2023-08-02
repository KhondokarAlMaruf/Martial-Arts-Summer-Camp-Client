import img from "../../src/Images/slider2.jpg";

const Dashboard = () => {
  return (
    <div className="mx-auto bg-slate-200 py-10">
      <h2 className="text-5xl text-center my-5 text-[#5c6465]  md:6xl">
        Welcome to My Dashboard
      </h2>
      <figure>
        <img className="lg:w-2/4 mx-auto" src={img} alt="dashboard" />
      </figure>
    </div>
  );
};

export default Dashboard;
