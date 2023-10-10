import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./style.css";
import logo from "../assets/Logo.svg";
import googleIcon from "../assets/googleIcon.svg";
import Popup from "reactjs-popup";

export default function LoginPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedAge, setSelectedAge] = useState(28);
  const [gender, setGender] = useState("Uomo");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("invalid email").required("required"),
      password: Yup.string()
        .min(4, "min length 4 characters")
        .required("required"),
    }),
    onSubmit: async (values) => {
      values.age = selectedAge;
      values.gender = gender;
      //sending data
      // try {
      //   const apiUrl = "https://your-backend-url.com";
      //   const response = await axios.post(apiUrl, values);
      //   console.log("Server Response:", response.data);
      // } catch (error) {
      //   console.error("Error sending data to the server:", error);
      // }
      closePopup();
      console.log(values);
    },
  });
  const formikPopup = useFormik({
    initialValues: {
      age: 28,
      gender: "Uomo",
    },
    onSubmit: (values) => {
      setSelectedAge(values.age);
      setGender(values.gender);
      closePopup();
    },
  });
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const generateNumbers = () => {
    const numbers = [];
    for (let i = selectedAge - 4; i <= selectedAge + 4; i++) {
      numbers.push(i);
    }
    return numbers;
  };
  const onOptionChange = (e) => {
    setGender(e.target.value);
  };
  const numbers = generateNumbers();

  //   async function fetchUserDataFromBackend(apiUrl) {
  //   try {
  
  //     const response = await axios.get(apiUrl);
  //     console.log('response', response.data);
  //     return response.data;
  //   } catch (error) {
  
  //     console.error('response error:', error);
  
  
  //     throw new Error('response error');
  //   }
  // }
  
  // const apiUrl = 'http://localhost:8080/auth/google'; 
  // fetchUserDataFromBackend(apiUrl)
  //   .then(data => {
  //     console.log('get data', data);
  //   })
  //   .catch(error => {
  //     console.error('error', error.message);
  //   });

  
  
  // useEffect(() => {
  //   const currentURL = window.location.href;
  //   const decodedURL = decodeURIComponent(currentURL);
  //   const userDataStartIndex = decodedURL.indexOf('=') + 1;
  //   const userDataString = decodedURL.slice(userDataStartIndex);
  //   try {
  //     const userData = JSON.parse(userDataString);
  //     console.log(userData);
  //   } catch (error) {
  //     console.error("Помилка розбору JSON:", error);
  //   }
  // }, []);
  
  return (
    <div className="login-container">
      <div className="left-login-block">
        <div className="logo footer-logo">
          <img src={logo} alt="logo" />
          <div className="logo-txt">
            <p>MILANO DELIVERY </p>
            <p>QUICK FASHION DELIVERY </p>
          </div>
        </div>
        <div className="login-title-box">
          <h3 className="login-title">Welcome!</h3>
          <p className="login-descr">
            Unisciti alla nostra community, registerati per esplorare ed
            abbracciare il mondo della moda su misura per te.
          </p>
        </div>
      </div>


{/* Login Form */}


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
              onClick={openPopup}
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
              onClick={
                () => (window.location.href = 'http://localhost:8080/auth/google')
              }
              className="login-form-btn red-bg" type="submit">
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


{/* Login Popup */}

      <Popup open={isPopupOpen} onClose={closePopup}>

        <div className="popup-content">
          <h2 className="form-title">Log In</h2>
          <p className="form-descr">
            Inserisci le tue credenziali per accedere
          </p>
          <h3 className="modal-subtitle">Età</h3>
          <div className="age-selector">
            <div className="age-carousel">
              {numbers.map((number, index) => {
                const distanceFromCenter = Math.abs(selectedAge - number);
                const opacity = 1 - distanceFromCenter * 0.22;
                const fontSize = 2.5 - distanceFromCenter * 0.3;

                return (
                  <div
                    key={index}
                    className={`age-item ${
                      number === selectedAge ? "active" : ""
                    }`}
                    onClick={() => setSelectedAge(number)}
                    style={{ opacity, fontSize: `${fontSize}rem` }}
                  >
                    {number}
                  </div>
                );
              })}
            </div>
          </div>
          <h3 className="modal-subtitle">Identità</h3>
          <div className="gender-container">
            <div>
              <input
                type="radio"
                name="gender"
                value="Donna"
                id="donna"
                checked={gender === "Donna"}
                onChange={onOptionChange}
              />
              <label className="gender-label" htmlFor="donna">
                Donna
              </label>
            </div>

            <div>
              <input
                type="radio"
                name="gender"
                value="Uomo"
                id="uomo"
                checked={gender === "Uomo"}
                onChange={onOptionChange}
              />
              <label className="gender-label" htmlFor="Uomo">
                Uomo
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                value="Preferisco non rispondere"
                id="noGender"
                checked={gender === "Preferisco non rispondere"}
                onChange={onOptionChange}
              />
              <label className="gender-label" htmlFor="noGender">
                Preferisco non rispondere
              </label>
            </div>
          </div>
          <button className="login-form-btn" onClick={closePopup}>Сompleta il login &rarr;</button>
        </div>
      </Popup>
    </div>
  )}








