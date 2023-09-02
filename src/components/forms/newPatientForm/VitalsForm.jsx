import React from "react";
import { toast } from "react-toastify";

import classes from "./BasicDetails.module.css";
import "react-toastify/dist/ReactToastify.css";

export default function VitalDetailsForm(props) {
  const sbpInvalidToast = () => {
    toast.error("Invalid SBP!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const dbpInvalidToast = () => {
    toast.error("Invalid DBP!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const pulsePressureInvalidToast = () => {
    toast.error("Invalid Pulse Pressure!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const pulseInvalidToast = () => {
    toast.error("Invalid Pulse!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const respiratoryRateInvalidToast = () => {
    toast.error("Invalid Respiratory Rate!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const temperatureRateInvalidToast = () => {
    toast.error("Invalid Temperature!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const oxygenSaturationInvalidToast = () => {
    toast.error("Invalid Oxygen Saturation!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const bloodGlucoseInvalidToast = () => {
    toast.error("Invalid Blood Glucose!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const [sbp, setSbp] = React.useState("");
  const [dbp, setDbp] = React.useState("");
  const [pulsePressure, setPulsePressure] = React.useState("");
  const [pulse, setPulse] = React.useState("");
  const [respiratoryRate, setRespiratoryRate] = React.useState("");
  const [temperature, setTemperature] = React.useState("");
  const [oxygenSaturation, setOxygenSaturation] = React.useState("");
  const [bloodGlucose, setBloodGlucose] = React.useState("");
  const saveDataHandler = () => {
    if (
      Number(sbp) > 500 ||
      Number(sbp) < 0 ||
      Number(sbp) === NaN ||
      sbp.trim() === ""
    ) {
      sbpInvalidToast();
      return;
    }
    if (
      Number(dbp) > 500 ||
      Number(dbp) < 0 ||
      Number(dbp) === NaN ||
      dbp.trim() === ""
    ) {
      dbpInvalidToast();
      return;
    }
    if (
      Number(pulsePressure) > 500 ||
      Number(pulsePressure) < 0 ||
      Number(pulsePressure) === NaN ||
      pulsePressure.trim() === ""
    ) {
      pulsePressureInvalidToast();
      return;
    }
    if (
      Number(pulse) > 500 ||
      Number(pulse) < 0 ||
      Number(pulse) === NaN ||
      pulse.trim() === ""
    ) {
      pulseInvalidToast();
      return;
    }
    if (
      Number(respiratoryRate) > 500 ||
      Number(respiratoryRate) < 0 ||
      Number(respiratoryRate) === NaN ||
      respiratoryRate.trim() === ""
    ) {
      respiratoryRateInvalidToast();
      return;
    }
    if (
      Number(temperature) > 500 ||
      Number(temperature) < 0 ||
      Number(temperature) === NaN ||
      temperature.trim() === ""
    ) {
      temperatureRateInvalidToast();
      return;
    }
    if (
      Number(oxygenSaturation) > 500 ||
      Number(oxygenSaturation) < 0 ||
      Number(oxygenSaturation) === NaN ||
      oxygenSaturation.trim() === ""
    ) {
      oxygenSaturationInvalidToast();
      return;
    }
    if (
      Number(bloodGlucose) > 500 ||
      Number(bloodGlucose) < 0 ||
      Number(bloodGlucose) === NaN ||
      bloodGlucose.trim() === ""
    ) {
      bloodGlucoseInvalidToast();
      return;
    }
    const saveSuccessfulToast = () => {
      toast.success("Data Saved!", {
        position: toast.POSITION.TOP_CENTER,
      });
    };
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
    saveSuccessfulToast();
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
