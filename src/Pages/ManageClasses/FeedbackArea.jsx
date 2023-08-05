import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const FeedbackArea = () => {
  const classes = useLoaderData();
  const navigation = useNavigate();

  const handleFeedback = async (event) => {
    event.preventDefault();
    const form = event.target;
    const feedback = form.feedback.value;
    try {
      await fetch(
        `https://martial-arts-summer-camp-server-khondokaralmaruf.vercel.app/classes/${classes._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify({ feedback }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data.message);
          if (data.message) {
            toast.success("feedback send to the instructor");
            navigation("/dashboard/manage-classes");
          }
        });
    } catch (error) {
      console.error("Error updating feedback:", error);
    }
  };
  return (
    <div>
      <h1>Provide a Feedback</h1>
      <form onSubmit={handleFeedback}>
        <textarea
          type="feedback"
          name="feedback"
          className="textarea textarea-bordered w-1/2"
          placeholder="feeback"
        ></textarea>
        <br />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackArea;
