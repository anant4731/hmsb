"use client";
import classes from "./page.module.css";
import patient from "@/app/ethereum/patient";
import React from "react";

export default function Page({ params }) {
  const [username, setUsername] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [age, setAge] = React.useState("");
  const [sbp, setSbp] = React.useState("");
  const [dbp, setDbp] = React.useState("");
  const [pulse, setPulse] = React.useState("");
  const [respiratoryRate, setRespiratoryRate] = React.useState("");
  const [temperature, setTemperature] = React.useState("");
  const [oxygenSaturation, setOxygenSaturation] = React.useState("");
  const [bloodGlucose, setBloodGlucose] = React.useState("");
  const patientId = params.patientId;
  React.useEffect(() => {
    const fetchPatient = async () => {
      const fetchedPatient = await patient(patientId);
      const name = await fetchedPatient.methods.username().call();
      const gender = await fetchedPatient.methods.gender().call();
      const phone = await fetchedPatient.methods.phone().call();
      const age = await fetchedPatient.methods.age().call();
      const sbp = await fetchedPatient.methods.sbp().call();
      const dbp = await fetchedPatient.methods.dbp().call();
      const pulse = await fetchedPatient.methods.pulse().call();
      const respiratoryRate = await fetchedPatient.methods
        .respiratoryRate()
        .call();
      const temperature = await fetchedPatient.methods.temperature().call();
      const oxygenSaturation = await fetchedPatient.methods
        .oxygenSaturation()
        .call();
      const bloodGlucose = await fetchedPatient.methods.bloodGlucose().call();
      setUsername(name.toUpperCase());
      setGender(gender.toUpperCase());
      setPhone(Number(phone));
      setAge(Number(age));
      setSbp(Number(sbp));
      setDbp(Number(dbp));
      setPulse(Number(pulse));
      setRespiratoryRate(Number(respiratoryRate));
      setTemperature(Number(temperature));
      setOxygenSaturation(Number(oxygenSaturation));
      setBloodGlucose(Number(bloodGlucose));
    };
    fetchPatient();
  });

  return (
    <div className={classes.container}>
      <div className={classes.main__div}>
        <h3>{username} Record</h3>
        <div className={classes.single_field}>
          <p>CONTRACT ADDRESS</p>
          <h5>{patientId}</h5>
        </div>
        <div className={classes.single_field}>
          <p>NAME</p>
          <h5>{username}</h5>
        </div>
        <div className={classes.single_field}>
          <p>GENDER</p>
          <h5>{gender}</h5>
        </div>
        <div className={classes.single_field}>
          <p>PHONE</p>
          <h5>{phone}</h5>
        </div>
        <div className={classes.single_field}>
          <p>AGE</p>
          <h5>{age}</h5>
        </div>
        <div className={classes.single_field}>
          <p>SBP</p>
          <h5>{sbp}</h5>
        </div>
        <div className={classes.single_field}>
          <p>DBP</p>
          <h5>{dbp}</h5>
        </div>
        <div className={classes.single_field}>
          <p>PULSE</p>
          <h5>{pulse}</h5>
        </div>
        <div className={classes.single_field}>
          <p>RESPIRATORY RATE</p>
          <h5>{respiratoryRate}</h5>
        </div>
        <div className={classes.single_field}>
          <p>TEMPERATURE</p>
          <h5>{temperature}</h5>
        </div>
        <div className={classes.single_field}>
          <p>OXYGEN SATURATION</p>
          <h5>{oxygenSaturation}</h5>
        </div>
        <div className={classes.single_field}>
          <p>BLOOD GLUCOSE</p>
          <h5>{bloodGlucose}</h5>
        </div>
      </div>
    </div>
  );
}
