import React from "react";
import "./forgotPassword.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Layout from "../Communitywebpage/Components/Layout";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Data", data);
    navigate("/resetPassword");
    localStorage.removeItem("emailId");
    localStorage.removeItem("id");
  };

  return (
    <Layout>
      <div className="forgotPasswordPage">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 col-xl-4">
            <div className="forgotPasswordPage__container">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="number"
                    className="form-control"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="error">Password is required</span>
                  )}
                </div>

                <div className="mt-4">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="number"
                    id="confirmPassword"
                    className="form-control"
                    {...register("confirmPassword", { required: true })}
                  />
                  {errors.confirmPassword && (
                    <span className="error">Confirm Password is required</span>
                  )}
                </div>

                <button className="customBtn small dark-text mt-3 w-100">
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResetPassword;
