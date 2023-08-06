import React from "react";
import classes from "./BasicDetails.module.css";
export default function VitalDetailsForm(props) {
  const [sbp, setSbp] = React.useState("");
  const [dbp, setDbp] = React.useState("");
  const [pulsePressure, setPulsePressure] = React.useState("");
  const [pulse, setPulse] = React.useState("");
  const [respiratoryRate, setRespiratoryRate] = React.useState("");
  const [temperature, setTemperature] = React.useState("");
  const [oxygenSaturation, setOxygenSaturation] = React.useState("");
  const [bloodGlucose, setBloodGlucose] = React.useState("");
  const saveDataHandler = () => {
    const data = {
      sbp,
      dbp,
      pulsePressure,
      pulse,
      respiratoryRate,
      temperature,
      oxygenSaturation,
      bloodGlucose,
    };
    props.onSaveData(data);
  };
  return (
    <>
      <div className={classes.container}>
        <h2>VITAL DETAILS</h2>
        <div className={classes.single_input__div}>
          <div className={classes.input__div}>
            <label htmlFor="sbp">SBP</label>
            <input
              type="number"
              onChange={(e) => setSbp(e.target.value)}
              name="sbp"
              id="sbp"
            />
          </div>
          <div className={classes.input__div}>
            <label htmlFor="dbp">DBP</label>
            <input
              type="number"
              onChange={(e) => setDbp(e.target.value)}
              name="dbp"
              id="dbp"
            />
          </div>
          <div className={classes.input__div}>
            <label htmlFor="pulse_pressure">PULSE PRESSURE</label>
            <input
              type="number"
              onChange={(e) => setPulsePressure(e.target.value)}
              name="pulse_pressure"
              id="pulse_pressure"
            />
          </div>
        </div>
        <div className={classes.single_input__div}>
          <div className={classes.input__div}>
            <label htmlFor="pulse">PULSE</label>
            <input
              type="number"
              onChange={(e) => setPulse(e.target.value)}
              name="pulse"
              id="pulse"
            />
          </div>
          <div className={classes.input__div}>
            <label htmlFor="respiratory_rate">RESPIRATORY RATE</label>
            <input
              type="number"
              onChange={(e) => setRespiratoryRate(e.target.value)}
              name="respiratory_rate"
              id="respiratory_rate"
            />
          </div>
          <div className={classes.input__div}>
            <label htmlFor="temperature">TEMPERTATURE</label>
            <input
              type="number"
              onChange={(e) => setTemperature(e.target.value)}
              name="temperature"
              id="temperature"
            />
          </div>
        </div>
        <div className={classes.single_input__div}>
          <div className={classes.input__div}>
            <label htmlFor="sbp">OXYGEN SATURATION</label>
            <input
              type="number"
              onChange={(e) => setOxygenSaturation(e.target.value)}
              name="oxygen_saturation"
              id="oxygen_saturation"
            />
          </div>
          <div className={classes.input__div}>
            <label htmlFor="blood_glucose">BLOOD GLUCOSE</label>
            <input
              type="number"
              onChange={(e) => setBloodGlucose(e.target.value)}
              name="blood_glucose"
              id="blood_glucose"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={saveDataHandler}
          className={classes.save}
        >
          SAVE
        </button>
      </div>
    </>
  );
}
