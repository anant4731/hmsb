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
  const [address, setAddress] = React.useState(patientId);
  React.useEffect(() => {
    let name,
      gender,
      phone,
      age,
      sbp,
      dbp,
      pulse,
      respiratoryRate,
      temperature,
      oxygenSaturation,
      bloodGlucose;
    const fetchPatient = async () => {
      if (!patientId.startsWith("0000")) {
        const fetchedPatient = await patient(patientId);
        name = await fetchedPatient.methods.username().call();
        gender = await fetchedPatient.methods.gender().call();
        phone = await fetchedPatient.methods.phone().call();
        age = await fetchedPatient.methods.age().call();
        sbp = await fetchedPatient.methods.sbp().call();
        dbp = await fetchedPatient.methods.dbp().call();
        pulse = await fetchedPatient.methods.pulse().call();
        respiratoryRate = await fetchedPatient.methods.respiratoryRate().call();
        temperature = await fetchedPatient.methods.temperature().call();
        oxygenSaturation = await fetchedPatient.methods
          .oxygenSaturation()
          .call();
        bloodGlucose = await fetchedPatient.methods.bloodGlucose().call();
      } else {
        const email = patientId.substring(4);
        const res = await fetch(
          `/api/patients/fetch-patient/email?email=${email}`,
          {
            method: "GET",
          }
        );

        const data = await res.json();
        setAddress("FETCHED FROM DB NOT BLOCKCHAIN");
        gender = data.data.gender;
        name = data.data.username;
        gender = data.data.gender;
        phone = data.data.phoneNumber;
        age = data.data.age;
        sbp = data.data.sbp;
        dbp = data.data.dbp;
        pulse = data.data.pulse;
        respiratoryRate = data.data.respiratoryRate;
        temperature = data.data.temperature;
        oxygenSaturation = data.data.oxygenSaturation;
        bloodGlucose = data.data.bloodGlucose;
      }
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
          <h5>{address}</h5>
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
