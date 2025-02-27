import React from "react";
import style from "./LandingPage.module.css";
const LandingPage = () => {
  return <div className={style.container}>
    <div className={style.navbar}>
   <div className={style.firstMenu}>
    <div className={menuContent}>
        <p>Features</p>
        <p>Pricing</p>
        <p>Testimonials</p>
        <p>Resources</p>
    </div>

   </div>
   <div className={style.logo}>

   </div>
   <div className={style.secondMenu}>
   <div className={menuContent}>
        <p>Company</p>
        <p>Contact</p>
       <button>Login</button>
    </div>
   </div>
    </div>

    <div className={style.coverPage}>

    </div>
  </div>;
};

export default LandingPage;
