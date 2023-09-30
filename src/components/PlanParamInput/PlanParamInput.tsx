import { useState } from "react";
import classes from "./PlanParamInput.module.css";

import InputComponent from "./InputComponent";

const initialUserInput = {
  currentSavings: 10000,
  annualContribution: 1000,
  expectedROIRate: 4,
  timePeriod: 20,
};

export default function PlanParamInput(props: {
  onCalculate: (arg0: {
    currentSavings: number;
    annualContribution: number;
    expectedROIRate: number;
    timePeriod: number;
  }) => void;
}) {
  const [planParam, setPlanParam] = useState(initialUserInput);

  const planInputAttrs = [
    {
      id: "currentSavings",
      name: "Current Savings ($)",
      value: planParam.currentSavings,
    },
    {
      id: "annualContribution",
      name: "Annual Contribution ($)",
      value: planParam.annualContribution,
    },
    {
      id: "expectedROIRate",
      name: " Expected Annual Interest Rate %",
      value: planParam.expectedROIRate,
    },
    {
      id: "investmentDuration",
      name: "Investment Duration (years)",
      value: planParam.timePeriod,
    },
  ];

  const submitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    props.onCalculate(planParam);
  };

  const resetHandler = () => {
    setPlanParam(initialUserInput);
  };

  const inputChangeHandler = (inputID: string, value: string) => {
    setPlanParam((prevInput) => {
      return {
        ...prevInput,
        [inputID]: +value,
      };
    });
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes["input-group"]}>
        {planInputAttrs.map((ia) => {
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
