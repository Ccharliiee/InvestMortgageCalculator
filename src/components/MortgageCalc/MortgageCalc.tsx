import { SetStateAction, useState } from "react";
import MortgageCalcHeader from "../Headers/MortgageCalcHeader";
import MPlanParamInput from "./MPlanParamInput";
import MortgageCalcResultTable from "./MortgageCalcResultTable";
import MortgagePaymentCalcApi from "../../apis/MortgagePaymentCalcApi";

import classes from "../InvestCalc.tsx/InvestCalc.module.css";

export default function MortgageCalc() {
  const [userInput, setUserInput] = useState({
    mortgageAmount: 300000,
    interestRate: 4,
    timePeriod: 25,
  });

  const calculateHandler = (
    userInput: SetStateAction<{
      mortgageAmount: number;
      interestRate: number;
      timePeriod: number;
    }>
  ) => {
    setUserInput(userInput);
  };

  return (
    <div className={classes.body}>
      <MortgageCalcHeader />

      <MPlanParamInput onCalculate={calculateHandler} />

      {userInput && (
        <MortgageCalcResultTable
          monthlyPayment={MortgagePaymentCalcApi(userInput)}
        />
      )}
    </div>
  );
}
