import React from 'react';
import coreClasses from "../core.css";
import styleClasses from "../style.css";

const NavBar = () => {
    return (
        <>
            <div>
                <div className="header">
                    <div className="header_container">
                        <img className="logo_img" src="/harry_potter_logo.png" alt="Логотип Harry Potter" />
                        <div className="links">
                            <h2>Star wars</h2>
                            <h2>Karate kid</h2>
                            <h2>Films</h2>
                            <h2>Tokyo Revengers</h2>
                            <h2>Windbreaker</h2>
                        </div>
                        <div className="buttonsHeader">
                            <button className="btn_reg">LOGIN</button>
                            <button className="btn_reg">SIGN UP</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
