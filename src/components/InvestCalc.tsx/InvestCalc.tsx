import { SetStateAction, useState } from "react";
import InvestCalcHeader from "../Headers/InvestCalcHeader";
import PlanParamInput from "../PlanParamInput/PlanParamInput";
import InvestCalcResultTable from "../InvestCalcResultTable/InvestCalcResultTable";
import InvestCalcApi from "../../apis/InvestCalcApi";

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

  return (
    <div className={classes.body}>
      <InvestCalcHeader />

      <PlanParamInput onCalculate={calculateHandler} />

      {userInput && (
        <InvestCalcResultTable resdata={InvestCalcApi(userInput)} />
      )}
    </div>
  );
}
