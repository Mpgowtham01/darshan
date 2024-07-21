import React from "react";
import "./forgotPassword.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Layout from "../../../components/Layout";
import images from "../../../components/Images/forgotimage.jpg";
import Api from "../../../Api";
import { useState } from "react";
const ForgotPassword = ({ role }) => {
  const [data, setDataValue] = useState("");
  console.log(",data", data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const resetPassword = (data) => {
    Api.post("password/resetpassword", data).then((res) => {
      setDataValue(res.data);
      console.log("ressss", res);

      localStorage.setItem("emailId", res.data.id);
      localStorage.setItem("id", res.data.userid);
      navigate(`/otppage/${role}`);
    });
  };

  const onSubmit = (data) => {
    resetPassword(data);
    // console.log("Data", data);
  };

  return (
    <Layout>
      <div className="forgotPasswordPage">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 col-xl-4">
            <div className="forgotPasswordPage__container">
              <img src={images} width="90%" />
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-2">
                  <label htmlFor="emailId">Enter your email Id</label>
                  <input
                    type="email"
                    className="form-control"
                    {...register("emailId", { required: true })}
                  />
                  {errors.emailId && (
                    <span className="error">email Id is required</span>
                  )}
                </div>

                <button className="customBtn small dark-text mt-3 w-100">
                  Send Link to reset password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
