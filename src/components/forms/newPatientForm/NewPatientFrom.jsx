import React from "react";
import BasicDetailsForm from "./BasicDetailsForm";
import VitalDetailsForm from "./VitalsForm";

import classes from "./NewPatientForm.module.css";
import web3 from "@/app/web3";
import factory from "@/app/ethereum/factory";
import { CircularProgress } from "@mui/material";

export default function NewPatientForm() {
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);

  const increasePageHandler = () => {
    if (page >= 2) {
      setPage(2);
      return;
    }
    setPage((prevPage) => prevPage + 1);
  };
  const decreasePageHandler = () => {
    if (page <= 1) {
      setPage(1);
      return;
    }
    setPage((prevPage) => prevPage - 1);
  };

  const [formData, setFormData] = React.useState({});
  const handleSaveData = (data) => {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
  };

  const submitFormHandler = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/patients/newPatient", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ data: formData }),
      });
      console.log(res);
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createNewPatient(
          formData.username,
          formData.gender,
          formData.phoneNumber,
          formData.age,
          formData.sbp,
          formData.dbp,
          formData.pulsePressure,
          formData.pulse,
          formData.respiratoryRate,
          formData.temperature,
          formData.oxygenSaturation,
          formData.bloodGlucose
        )
        .send({ from: accounts[0] });
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <div className={classes.container}>
      {loading ? (
        <CircularProgress />
      ) : (
        <React.Fragment>
          {page == 1 && <BasicDetailsForm onSaveData={handleSaveData} />}
          {page == 2 && <VitalDetailsForm onSaveData={handleSaveData} />}
        </React.Fragment>
      )}
      <div className={classes.form_footer}>
        <button
          type="button"
          onClick={decreasePageHandler}
          className={classes.page_change__button}
        >
          PREVIOUS
        </button>
        <button
          type="button"
          onClick={submitFormHandler}
          className={classes.submit__button}
        >
          SUBMIT
        </button>
        <button
          type="button"
          onClick={increasePageHandler}
          className={classes.page_change__button}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
