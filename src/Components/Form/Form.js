import { useState } from "react";
import Actions from "../Actions/Actions";
import Error from "../Error/Error"
import style from "./Form.module.css"
const Form = (props) => {
  
  let [errorMessage,setErrorMessage] = useState("");

  const [currentSavings,setCurrentSavings] =  useState("");
  const [yearlySaving, setyearlySavings] = useState("");
  const [expectedInterest, setExpectedInterest] = useState("");
  const [investmentDuration, setInvestmentDuration] = useState("")

  const [isErrorOcureted, errorOcureted] = useState(false)

  const resetHandler = () => {
    setCurrentSavings("");
    setyearlySavings("");
    setExpectedInterest("");
    setInvestmentDuration("");
  };
  const currentSavingsChangeHandler = (event) =>{
    errorOcureted(false)
    setCurrentSavings(event.target.value)
  }
  const yearlySavingChangeHandler = (event) =>{
    errorOcureted(false)
    setyearlySavings(event.target.value)
  }
  const expectedInterestChangeHandler = (event)=>{
    errorOcureted(false)
    setExpectedInterest(event.target.value)
  }
  const investmentDurationChangeHandler = (event) =>{
    errorOcureted(false)
    setInvestmentDuration(event.target.value)
  }

  const setErrorEmpthyParameter = () =>{  
    setErrorMessage("All parameters must be filled") 
    errorOcureted(true)
  }
  const setErrorLessOne = () =>{
    setErrorMessage("All parameters must be more than zero") 
    errorOcureted(true)
  }
  const submitHandler = (event) => {
    event.preventDefault();
    const dataObject = {
      currentSavings : Number(currentSavings),
      yearlySaving : Number(yearlySaving),
      expectedInterest :Number(expectedInterest),
      investmentDuration: Number(investmentDuration),
      
    }

    if(currentSavings === "" || yearlySaving === "" || expectedInterest === "" || investmentDuration === "") {setErrorEmpthyParameter()}
    else if (Number(currentSavings) < 0 || Number(yearlySaving) <0 || Number(expectedInterest) <0 || Number(investmentDuration) <0 ) {setErrorLessOne()}
    else {
      resetHandler();
      props.saveDate(dataObject);
    }
  };
  return (
    <form onSubmit={submitHandler} className={style.form}>
      <div className={style.inputGroup}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input value={currentSavings} type="number" id="current-savings" onChange={currentSavingsChangeHandler} />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input value={yearlySaving} type="number" id="yearly-contribution" onChange={yearlySavingChangeHandler}/>
        </p>
      </div>
      <div className={style.inputGroup}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input value={expectedInterest} type="number" id="expected-return" onChange={expectedInterestChangeHandler}/>
        </p>
        <p>
          <label htmlFor="duration">Investment Duration  (years)</label>
          <input value={investmentDuration} type="number" id="duration" onChange={investmentDurationChangeHandler} />
        </p>
      </div>
      {isErrorOcureted ? <Error errorMessage = {errorMessage}/> : ""}
      <Actions reset={resetHandler}/>
    </form>
  );
};
export default Form;
