import { useState } from "react";
import classes from "./PlanParamInput.module.css";

const initialUserInput = {
  currentSavings: 10000,
  annualContribution: 1000,
  expectedReturn: 4,
  timePeriod: 20,
};

export default function PlanParamInput(props: {
  onCalculate: (arg0: {
    currentSavings: number;
    annualContribution: number;
    expectedReturn: number;
    timePeriod: number;
  }) => void;
}) {
  const [planParam, setPlanParam] = useState(initialUserInput);

  const submitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    props.onCalculate(planParam);
  };

  const resetHandler = () => {
    setPlanParam(initialUserInput);
  };

  const inputChangeHandler = (input: string, value: string) => {
    setPlanParam((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="currentSavingss">Current Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("currentSavings", event.target.value)
            }
            value={planParam.currentSavings}
            type="number"
            id="currentSavings"
          />
        </p>
        <p>
          <label htmlFor="annualContribution">Annual Contribution ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("annualContribution", event.target.value)
            }
            value={planParam.annualContribution}
            type="number"
            id="annualContribution"
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expectedReturn">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              inputChangeHandler("expectedReturn", event.target.value)
            }
            value={planParam.expectedReturn}
            type="number"
            id="expectedReturn"
          />
        </p>
        <p>
          <label htmlFor="investmentDuration">
            Investment Duration (years)
          </label>
          <input
            onChange={(event) =>
              inputChangeHandler("timePeriod", event.target.value)
            }
            value={planParam.timePeriod}
            type="number"
            id="investmentDuration"
          />
        </p>
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
