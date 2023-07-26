import img from "../../src/Images/404 Not Found.jpg";

const Dashboard = () => {
  return (
    <div className="mx-auto">
      <h2 className="text-4xl font-bold text-primary text-center my-4">
        Welcome to My Dashboard
      </h2>
      <figure>
        <img className="lg:w-2/4 mx-auto" src={img} alt="dashboard" />
      </figure>
    </div>
  );
};

export default Dashboard;
