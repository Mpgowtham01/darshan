import React, { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Api from "../../Api";
import "../../components/Css/sass/Login.scss";
// import { USER_AUTH_STATE } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "../../components/Redux_Toolkit/authSlice";
import ForgotPasswordLink from "./ForgotPasswordLink";

const UserLogin = ({ role }) => {
  const [passwordShown, setpasswordShown] = useState(false);
  const [show, setShow] = useState(false);
  const [registerResponse, setRegisterResponse] = useState({
    status: null,
    message: null,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async ({ Phone, Password }) => {
    Api.post(
      "userRegister/login",
      { phone: Phone, password: Password },
      { withCredentials: true }
    )
      .then((res) => {
        console.log("res@@@11", res);
        setRegisterResponse({
          status: res.data?.status,
          message: res.data?.message,
        });
        // sessionStorage.setItem(USER_AUTH_STATE, true);
        localStorage.setItem("USER_AUTH_STATE", true);
        localStorage.setItem("Role", "user");
        localStorage.setItem("id", res.data.data.id);
        localStorage.setItem("username", res.data.data.username);
        localStorage.setItem("token", res.data.token);

        setTimeout(() => {
          navigate("/user");
        }, 700);
        console.log("res.data.data", res.data.data);
        dispatch(setAuthenticated(res.data?.data?.isAuthenticated));
        sessionStorage.setItem("id", res.data?.data?.id);
        sessionStorage.setItem(
          "USER_AUTH_STATE",
          res.data?.data?.isAuthenticated
        );
      })
      .catch((err) => {
        setRegisterResponse({
          status: err?.response.data?.status,
          message: err?.response.data?.message,
        });
      })
      .finally(() => {
        setShow(true);
      });
  };

  const handlePasswordShow = () => {
    setpasswordShown(!passwordShown);
  };

  return (
    <div>
      <ToastContainer
        className="bg-light"
        position="top-end"
        style={{ zIndex: 100000 }}
      >
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <strong
              className={`me-auto text-${
                registerResponse?.status === "Success" ? "success" : "danger"
              }`}
            >
              {registerResponse?.status}
            </strong>
          </Toast.Header>
          <Toast.Body>{registerResponse?.message}</Toast.Body>
        </Toast>
      </ToastContainer>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-2">
          <label className="userSignUp_Input" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="form-control"
            placeholder="Enter your phone number"
            id="phone"
            {...register("Phone", {
              required: { value: true, message: "This is required" },
              minLength: {
                value: 10,
                message: "Phone number must be 10 digit",
              },
            })}
          />
          {errors?.Phone && (
            <span className="text-danger  mt-1">{errors?.Phone.message}</span>
          )}
        </div>

        <div className="my-2">
          <label className="userSignUp_Input" htmlFor="password">
            Password
          </label>
          <input
            className="form-control"
            id="password"
            placeholder="Enter your Password"
            // type="password"
            type={passwordShown ? "text" : "password"}
            {...register(
              "Password",
              {
                required: {
                  value: true,
                  message: "passwords is required",
                  minLength: 6,
                },
                minLength: 6,
                message: "too small",
              }
              // { required: true, maxLength: 4},
            )}
          />
          <FontAwesomeIcon
            icon={passwordShown ? faEye : faEyeSlash}
            onClick={() => handlePasswordShow()}
            size="1x"
            style={{
              cursor: "pointer",
              position: "relative",
              top: "-28px",
              left: "95%",
            }}
          />
          {errors?.Password && (
            <span className="text-danger mt-1">
              {errors?.Password?.type === "minLength"
                ? "Password must 6 character"
                : errors?.Password?.message}
            </span>
          )}
          {console.log(errors.Password, "errors?.Password")}
        </div>
        <div className="my-3">
          <ForgotPasswordLink />
        </div>

        <div className="text-end">
          <button className="login-button_btn" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
