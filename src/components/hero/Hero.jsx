import React from "react";
import classes from "./Hero.module.css";
import Button from "../button/Button";
import heroAnimation from "@/helpers/assets/Hero_Animation.png";
import Image from "next/image";
const Hero = () => {
  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.heroLeftContent}>
            <h1 className={classes.heading}>Donate Blood, <br/> save life!</h1>
            <p className={classes.intro}>
              At BPositiv, we are dedicated to ensuring that patients in need have access to life-saving blood products.
            </p>
            <Button to={'/dashboard'} title="DASHBOARD"/>
          </div>
          <div className={classes.heroanimation}>
            <Image height={400} alt="hero" src={heroAnimation}/>
          </div>
        </div>
      </div>
    </React.Fragment>
    
  );
};

export default Hero;
