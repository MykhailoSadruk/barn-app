import React from 'react';
import './style.css';
import logo from '../../assets/Logo.svg';
import userIcon from '../../assets/user 1.svg'

export default function Header({ title, subtitle, headerStyleContainer,  email=null }) {
    
    return (
        <>
            <div className={headerStyleContainer}>
                <div>
                    <div className="header-navigation">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                            <div className="logo-txt">
                                <p>MILANO DELIVERY </p>
                                <p>QUICK FASHION DELIVERY </p>
                            </div>
                        </div>
                        {email ? (
                            <div className="customer-email"><img className='user-icon' src={userIcon} alt="user" /><div>{email}</div></div>
                        ) : (
                            <button
                                className="login-btn"
                                onClick={() => (window.location.href = '/login')}
                            >
                                Log in
                            </button>
                        )}
                    </div>
                    <div className="header-txt">
                        <h1 className="header-title">{title}</h1>
                        <h2 className="header-subtitle">{subtitle}</h2>
                    </div>
                </div>
            </div>
        </>
    );
}