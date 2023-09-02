"use client";

import React from "react";
import factory from "@/app/ethereum/factory";
import patient from "@/app/ethereum/patient";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation'
import "react-toastify/dist/ReactToastify.css";
import classes from "./SearchPatient.module.css";

export default function SearchPatient() {
    const Router = useRouter();

  const [address, setAddress] = React.useState("");

  const addressInvalidToast = () => {
    toast.error("Invalid User Address!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };
  const findPatientHandler = async () => {
    let allPatients = [];
    allPatients = await factory.methods.getAllPatients().call();
    if (allPatients.includes(address)) {
      Router.push(`/dashboard/${address}`)
    } else {
      addressInvalidToast();
    }
  };
  return (
    <div className={classes.container}>
      <form className={classes.form__div}>
        <div>
          <label>Enter the address : </label>
          <input type="text" onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div>
          <button onClick={findPatientHandler} type="button">
            SEARCH
          </button>
        </div>
      </form>
    </div>
  );
}
