import React from "react";
import BasicDetailsForm from "./BasicDetailsForm";
import classes from "./NewPatientForm.module.css";

import web3 from "@/app/web3";
import factory from "@/app/ethereum/factory";
import patient from "@/app/ethereum/patient";

export default function NewPatientForm() {
  const [page, setPage] = React.useState(1);
  const [formData, setFormData] = React.useState({});
  const handleSaveData = (data) => {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
  };

  const submitFormHandler = async () => {
    console.log(formData);
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createNewPatient()
        .send({ from: accounts[0] });
      const allPatients = await factory.methods.getAllPatients().call();
      const newPatientAddress = allPatients[allPatients.length - 1];
      const newPatient = patient(newPatientAddress);
      await newPatient.methods
        .setUsername(formData.username)
        .send({ from: accounts[0] });
      await newPatient.methods
        .setGender(formData.gender)
        .send({ from: accounts[0] });
      // await newPatient.methods
      //   .setPhone(
      //     +formData.phoneNumber)
      //   .send({ from: accounts[0] });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.container}>
      {page == 1 && <BasicDetailsForm onSaveData={handleSaveData} />}
      <div className={classes.form_footer}>
        <button
          type="button"
          onClick={() => setPage(page - 1)}
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
          onClick={() => setPage(page + 1)}
          className={classes.page_change__button}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
