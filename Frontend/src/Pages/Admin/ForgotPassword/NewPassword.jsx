import React from "react";
import Layout from "../Communitywebpage/Components/Layout";
import { useForm } from "react-hook-form";
import Api from "../../../Api";
// import { useNavigate } from "react-router-dom";
function NewPassword() {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    watch,

    formState: { errors },
  } = useForm();
  const id = localStorage.getItem("id");
  const email = localStorage.getItem("emailId");
  console.log("object", email);
  const updatePassword = () => {
    Api.put(`password/updatepassword/${id}`, {
      password: getValues().password,
      email: email,
    }).then((res) => {
      console.log("res111", res);
    });
  };

  const onSubmit = () => {
    updatePassword();
  };
  return (
    <div>
      <Layout>
        <div className="forgotPasswordPage">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 col-xl-4">
              <div className="forgotPasswordPage__container">
                {/* <img src={images} width="90%" /> */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-2">
                    <label htmlFor="emailId">Enter Your New Password</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      {...register("password", {
                        required: true,
                        minLength: {
                          value: 6,
                          message: "Password must 6 characters",
                        },
                      })}
                    />
                    {errors.password && (
                      <span className="error">Password is required</span>
                    )}
                  </div>
                  <div className="mb-2">
                    <label>Enter Your Confirm Password</label>
                    <input
                      className="form-control"
                      {...register("confirmpassword", { required: true })}
                      id="confirmPassword"
                      type="password"
                    />
                    {watch("confirmpassword") !== watch("password") &&
                    getValues("confirmpassword") ? (
                      <span className="error">password not match</span>
                    ) : null}
                    {/* {errors.emailId && (
                      <span className="error">ConfirmPassword is required</span>
                    )} */}
                  </div>

                  <button className="customBtn small dark-text mt-3 w-100">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default NewPassword;
