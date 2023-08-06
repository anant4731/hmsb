import React from "react";
import BasicDetailsForm from "./BasicDetailsForm";
import classes from "./NewPatientForm.module.css";

import web3 from "@/app/web3";
import factory from "@/app/ethereum/factory";
import VitalDetailsForm from "./VitalsForm";

export default function NewPatientForm() {
  const [page, setPage] = React.useState(1);

  const increasePageHandler = () => {
    if(page >= 2) {
      setPage(2);
      return;
    }
    setPage((prevPage) => (prevPage + 1));
  }
  const decreasePageHandler = () => {
    if(page <= 1) {
      setPage(1);
      return;
    }
    setPage((prevPage) => (prevPage - 1));
  }

  const [formData, setFormData] = React.useState({});
  const handleSaveData = (data) => {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
  };

  const submitFormHandler = async () => {
    console.log(formData);
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createNewPatient(
          formData.username,
          formData.gender,
          formData.phoneNumber
        )
        .send({ from: accounts[0] });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.container}>
      {page == 1 && <BasicDetailsForm onSaveData={handleSaveData} />}
      {page == 2 && <VitalDetailsForm onSaveData={handleSaveData} />}
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
