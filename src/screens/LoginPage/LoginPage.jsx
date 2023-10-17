import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./style.css";
import logo from "../../assets/Logo.svg";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginPageComponents/LoginFrom";
import PopupForm from "../../components/LoginPageComponents/PopupForm";

export default function LoginPage() {
  const [data, setData] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedAge, setSelectedAge] = useState(28);
  const [gender, setGender] = useState("Uomo");
  const [token, setToken] = useState("");
  const [isNewCustomer, setIsNewCustomer] = useState(true)

  const apiUrl = process.env.REACT_APP_BASE_URL;

  const navigate = useNavigate();
  let userEmail;
  const ageOptions = [];
  for (let i = 5; i <= 99; i++) {
    ageOptions.push(i.toString());
  }
  const handleAgeChange = (event) => {
    setSelectedAge(event.target.value);
  };
  if (token) {
    const decodedData = jwt_decode(token);
    
  }

  /////

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenJwt = urlParams.get("token");
    setIsNewCustomer (urlParams.get("isNewUser")); 
    if (tokenJwt) {
      setToken(tokenJwt);
      const decodedData = jwt_decode(tokenJwt);
      if (isNewCustomer) {
        sessionStorage.setItem("userEmail", decodedData.email);
        console.log(isNewCustomer)
        navigate("/customer");
      } else {
        console.log(isNewCustomer);
        openPopup();

      }
      setData(decodedData);
    }
  }, []);
  
  /////
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("invalid email"),
      password: Yup.string().min(4, "min length 4 characters"),
    }),
    onSubmit: async (values) => {
      console.log(data.email, '=> formik email')
      values.age = selectedAge;
      values.gender = gender;
      closePopup();
      console.log(values,'data from inputs');
    },
  });
  //
  const formikPopup = useFormik({
    initialValues: {
      age: selectedAge,
      gender: gender,
    },
    onSubmit: (values) => {
      setSelectedAge(values.age);
      setGender(values.gender);
      const dataToSend = {
        ...data,
        email: formik.values.email || data.email,
        password: formik.values.password,
        age: values.age,
        gender: values.gender,
      };

      //send data to server
      sendUserData(dataToSend);
      closePopup();
      console.log(dataToSend, "=> dataToSend");
      navigate("/customer");
      userEmail = sessionStorage.setItem("userEmail", dataToSend.email);
    },
  });

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const onOptionChange = (e) => {
    setGender(e.target.value);
  };

  const handleSignInWithGoogle = async () => {
    window.location.href = apiUrl+'/auth/google';
  };
// /complete-data
  const sendUserData = async (values) => {
    try {
      // let sendDataUrl; 
      // if(values.password) {
      //   console.log('send data with form')
      // } else {
      //    sendDataUrl = apiUrl+'/complete-data'
      // }
      const sendDataUrl = apiUrl+'/complete-data';
      const response = await axios.post(sendDataUrl, values);
      console.log("server response:", response.data);
    } catch (error) {
      console.error("error sending data", error);
    }
  };
  console.log(data);
  console.log(gender, selectedAge);
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
      <LoginForm
        formik={formik}
        openPopup={openPopup}
        handleSignInWithGoogle={handleSignInWithGoogle}
      />
      {/* Login Popup (selected age, gender) */}
      <PopupForm
        formikPopup={formikPopup}
        ageOptions={ageOptions}
        selectedAge={selectedAge}
        gender={gender}
        handleAgeChange={handleAgeChange}
        onOptionChange={onOptionChange}
        isPopupOpen={isPopupOpen}
        closePopup={closePopup}
      />
    </div>
  );
}