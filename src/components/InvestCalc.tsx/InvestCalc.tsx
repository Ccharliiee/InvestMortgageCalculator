import { SetStateAction, useState } from "react";
import InvestCalcHeader from "../Headers/InvestCalcHeader";
import PlanParamInput from "../PlanParamInput/PlanParamInput";
import InvestCalcResultTable from "../InvestCalcResultTable/InvestCalcResultTable";

import classes from "./InvestCalc.module.css";

export default function InvestCalc() {
  const [userInput, setUserInput] = useState({
    currentSavings: 10000,
    annualContribution: 1000,
    expectedROIRate: 4,
    timePeriod: 20,
  });

  const calculateHandler = (
    userInput: SetStateAction<{
      currentSavings: number;
      annualContribution: number;
      expectedROIRate: number;
      timePeriod: number;
    }>
  ) => {
    setUserInput(userInput);
  };

  const resData = [];

  if (userInput) {
    let currentSavings = +userInput.currentSavings;
    const annualContribution = +userInput.annualContribution;
    const expectedReturn = +userInput.expectedROIRate / 100;
    const timePeriod = +userInput.timePeriod;

    for (let i = 0; i < timePeriod; i++) {
      const annualInterest = currentSavings * expectedReturn;
      currentSavings += annualInterest + annualContribution;
      resData.push({
        year: i + 1,
        capitalInvested:
          userInput.currentSavings + annualContribution * (i + 1),
        annualInterest,
        totalInterest:
          currentSavings -
          userInput.currentSavings -
          annualContribution * (i + 1),
        totalSavings: currentSavings,
      });
    }
  }

  return (
    <div className={classes.body}>
      <InvestCalcHeader />

      <PlanParamInput onCalculate={calculateHandler} />

      {userInput && <InvestCalcResultTable resdata={resData} />}
    </div>
  );
}
