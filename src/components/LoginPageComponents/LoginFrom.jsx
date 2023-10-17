import React, {useEffect, useState} from 'react'
import axios from 'axios';
import googleIcon from "../../assets/googleIcon.svg";
import { useNavigate } from "react-router-dom";
const LoginForm = ({ formik, openPopup, handleSignInWithGoogle }) => {
  const [userData, setUserData] = useState(null)
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_BASE_URL;
  useEffect(() => {
    axios
      .get(apiUrl+'/get-users')
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);
  const checkInputData = (emailToCompare) => {
    if (userData) {  
      const foundUser = userData.find((user) => user.email === emailToCompare);
  
      if (foundUser) {
        console.log('matched user', foundUser);
        navigate("/customer");
        sessionStorage.setItem("userEmail", foundUser.email);
      } else {
        openPopup()
      }
    }
  };

  return (
    <div className="login-form-wrapper">
        <h2 className="form-title">Log In</h2>
        <p className="form-descr">Inserisci le tue credenziali per accedere</p>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-item">
            <label className="input-label" htmlFor="email">
              Email
            </label>
            <input
              className="input-field"
              type="text"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="@gmail.com"
              autoComplete="email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error-message">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-item">
            <label className="input-label" htmlFor="password">
              Password
            </label>
            <input
              className="input-field"
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="*******"
              autoComplete="current-password"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error-message">{formik.errors.password}</div>
            ) : null}
          </div>
          <div>
            <button
              onClick={() => {
                // console.log(formik.values.email,'=> formikEmail')
                // openPopup()
                checkInputData (formik.values.email);
              }}
              className="login-form-btn"
              type="submit"
            >
              Log In &rarr;
            </button>
          </div>
          <div>
            <div className="login-line-box">
              <hr className="horizontal-line" />
              <div className="horizontal-line-txt">or</div>
              <hr className="horizontal-line" />
            </div>
            <div>
              {/* redirect to userData from google auth */}
              <button
                onClick={handleSignInWithGoogle}
                className="login-form-btn red-bg"
                type="submit"
              >
                <img
                  className="google-icon"
                  src={googleIcon}
                  alt="google-icon"
                />
                Sign in with Google
              </button>
            </div>
          </div>
        </form>
      </div>
  )
}

export default LoginForm;
