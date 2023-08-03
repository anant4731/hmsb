import React from "react";
import classes from "./Button.module.css";
import Link from "next/link";

const Button = ({ title, to }) => {
  return (
    <div>
      <Link href={to} className={classes.box}>
        <p className={classes.text_button}>{title}</p>
      </Link>
    </div>
  );
};

export default Button;
