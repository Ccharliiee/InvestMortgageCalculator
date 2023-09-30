import { useState } from "react";
import classes from "../PlanParamInput/PlanParamInput.module.css";

import InputComponent from "../PlanParamInput/InputComponent";

const initialUserInput = {
  mortgageAmount: 300000,
  interestRate: 4,
  timePeriod: 25,
};

export default function MPlanParamInput(props: {
  onCalculate: (arg0: {
    mortgageAmount: number;
    interestRate: number;
    timePeriod: number;
  }) => void;
}) {
  const [mPlanParam, setMPlanParam] = useState(initialUserInput);

  const mPlanInputAttrs = [
    {
      id: "mortgageAmount",
      name: "Mortgage Amount ($)",
      value: mPlanParam.mortgageAmount,
    },
    {
      id: "interestRate",
      name: "Annual Interest Rate %",
      value: mPlanParam.interestRate,
    },
    {
      id: "timePeriod",
      name: "Mortgage Amortization (years)",
      value: mPlanParam.timePeriod,
    },
  ];

  const submitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    props.onCalculate(mPlanParam);
  };

  const resetHandler = () => {
    setMPlanParam(initialUserInput);
  };

  const inputChangeHandler = (inputID: string, value: string) => {
    setMPlanParam((prevInput) => {
      return {
        ...prevInput,
        [inputID]: +value,
      };
    });
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes["input-group"]}>
        {mPlanInputAttrs.map((ia) => {
          return <InputComponent {...{ ...ia, inputChangeHandler }} />;
        })}
      </div>
      <p className={classes.actions}>
        <button
          onClick={resetHandler}
          type="reset"
          className={classes.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}
