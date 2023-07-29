import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const FeedbackArea = () => {
  const classId = useLoaderData(); // Use classId instead of id
  const navigation = useNavigate();

  const handleFeedback = async (event) => {
    event.preventDefault();
    const form = event.target;
    const feedback = form.feedback.value;
    try {
      await fetch(`http://localhost:5000/send-feedback/${classId}`, {
        method: "PUT", // Use PUT request to update the feedback
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ feedback }),
      });
      toast.success("Feedback sent");
      navigation("/dashboard/manage-classes");
    } catch (error) {
      console.error("Error sending feedback:", error);
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
