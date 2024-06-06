import React from "react";
import classes from "./Hero.module.css";
import Button from "../button/Button";
import heroAnimation from "@/helpers/assets/hero_animation.json"
import Lottie from "lottie-react";
const Hero = () => {
  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.heroLeftContent}>
            <h1 className={classes.heading}>
              Empowering Healthcare with <br />
              Trustworthy Data!
            </h1>
            <p className={classes.intro}>
              A Blockchain-Powered Patient Records Solution.
            </p>
            <Button to={"/dashboard"} title="DASHBOARD" />
          </div>
          <div className={classes.heroanimation}>
            <Lottie animationData={heroAnimation} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
