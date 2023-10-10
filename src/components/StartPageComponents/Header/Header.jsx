import React from 'react';
import './style.css';
import logo from '../../../assets/Logo.svg';

export default function Header() {
    return (
        <>
            <div className="header-container">
                <div>
                    <div className="header-navigation">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                            <div className="logo-txt">
                                <p>MILANO DELIVERY </p>
                                <p>QUICK FASHION DELIVERY </p>
                            </div>
                        </div>
                        <button
                            className="login-btn"
                            onClick={() => (window.location.href = '/login')}
                        >
                            Log in
                        </button>
                    </div>
                    <div className="header-txt">
                        <h1 className="header-title">
                            QUICK FASHION <br /> DELIVERY
                        </h1>
                        <h2 className="header-subtitle">
                            Goditi un’esperienza di shopping senza stress con la
                            nostra <br /> efficiente consegna in un’ora
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
}
