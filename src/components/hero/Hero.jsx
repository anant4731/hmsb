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
            <Image height={400} alt="hero" src={heroAnimation} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
