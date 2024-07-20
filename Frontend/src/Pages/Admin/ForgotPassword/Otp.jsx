import React from "react";
import Layout from "../Communitywebpage/Components/Layout";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Api from "../../../Api";

function Otp({ role }) {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const image_style = {
    marginLeft: "17%",
  };

  const email = localStorage.getItem("emailId");
  console.log("object", email);
  const OtpPassword = () => {
    Api.post("password/checkcode", {
      password_code: getValues().code,
      email: email,
    }).then((res) => {
      // console.log("res111", res);
      navigate(`/NewPassword/${role}`);
    });
  };

  const onSubmit = () => {
    OtpPassword();
    // console.log("Data", data);
  };

  return (
    <Layout>
      <div className="forgotPasswordPage">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 col-xl-4">
            <div className="forgotPasswordPage__container">
              <h3 style={{ display: "flex", justifyContent: "center" }}>
                forgot password
              </h3>
              <br />
              <img
                style={image_style}
                src="data:image/jpeg;base64,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"
              ></img>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-2">
                  <label htmlFor="code">Enter your Otp:</label>
                  <input
                    type="number"
                    className="form-control"
                    {...register("code", { required: true })}
                  />
                  {errors.code && (
                    <span className="error">otp is required</span>
                  )}
                </div>

                <button className="customBtn small dark-text mt-3 w-100">
                  Cilck to reset password
                </button>
                <center className="mt-4">
                  {" "}
                  <a className="mb-2">back to login</a>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Otp;
