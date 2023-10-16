import React from 'react'
import Popup from "reactjs-popup";

export default function PopupForm({
    formikPopup,
    ageOptions,
    selectedAge,
    gender,
    handleAgeChange,
    onOptionChange,
    isPopupOpen,
    closePopup,
  }) {
  return (
    <Popup open={isPopupOpen} onClose={closePopup}>
    <form onSubmit={formikPopup.handleSubmit} className="popup-content">
      <h2 className="form-title">Log In</h2>
      <p className="form-descr">
        Inserisci le tue credenziali per accedere
      </p>
      <div className="age-selector">
        <label htmlFor="ageSelect"></label>
        <select
          className="dropdown-list"
          id="ageSelect"
          name="age"
          value={selectedAge}
          onChange={handleAgeChange}
        >
          <option className="modal-title" value="Età">
            Età
          </option>
          {ageOptions.map((age) => (
            <option key={age} value={age}>
              {age}
            </option>
          ))}
        </select>
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
      <button
        // onClick={() =>  checkAuthUser()}
        className="login-form-btn"
      >
        Сompleta il login &rarr;
      </button>
    </form>
  </Popup>
  )
}
