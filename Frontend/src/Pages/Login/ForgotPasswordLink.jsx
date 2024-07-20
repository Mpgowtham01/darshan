import { useNavigate } from "react-router-dom";

const ForgotPasswordLink = ({ role }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mb-2 d-flex justify-content-end">
        <h6
          className="text-primary_1"
          style={{ cursor: "pointer",color:"#F9D689" }}
          onClick={() => navigate(`/forgotPassword/${role}`)}>
          Forgot Your Password?
        </h6>
      </div>
    </>
  );
};

export default ForgotPasswordLink;
