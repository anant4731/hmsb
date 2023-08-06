import React from "react";
import classes from "./BasicDetails.module.css";
export default function BasicDetailsForm(props) {
  const [username, setUsername] = React.useState("");
  const [age, setAge] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [gender, setGender] = React.useState("");
  const saveDataHandler = () => {
    const data = {
      username,
      age,
      phoneNumber : Number(phoneNumber), 
      gender,
    };
    props.onSaveData(data);
  };
  return (
    <>
      <div className={classes.container}>
        <h2>PERSONAL DETAILS</h2>
        <div className={classes.single_input__div}>
          <div className={classes.input__div}>
            <label htmlFor="username">USERNAME : </label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              id="username"
            />
          </div>
          <div className={classes.input__div}>
            <label htmlFor="age">AGE : </label>
            <input
              onChange={(e) => setAge(e.target.value)}
              id="age"
              type="number"
              name="age"
            />
          </div>
        </div>
        <div className={classes.single_input__div}>
          <div className={classes.input__div}>
            <label htmlFor="phone_number">PHONE NUMBER : </label>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              id="phone_number"
              type="number"
              name="phone_number"
            />
          </div>
          <div className={classes.input__div}>
            <label htmlFor="gender">GENDER : </label>
            <br></br>
            <select
              id="gender"
              name="gender"
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">SELECT</option>
              <option value="male">MALE</option>
              <option value="female">FEMALE</option>
              <option value="others">OTHERS</option>
            </select>
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
