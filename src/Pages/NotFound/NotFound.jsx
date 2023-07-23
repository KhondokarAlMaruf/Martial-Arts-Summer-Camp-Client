import { Link } from "react-router-dom";
import notfound from "../../Images/404 Not Found.jpg";

const NotFound = () => {
  return (
    <div>
      <div className="text-center my-3">
        <Link to={"/"}>
          <button className="btn btn-info">Back to Home</button>
        </Link>
      </div>
      <img src={notfound} alt="" />
    </div>
  );
};

export default NotFound;
