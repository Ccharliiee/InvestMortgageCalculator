import logo from "../../assets/investment-calculator-logo.png";
import classes from "./InvestCalcHeader.module.css";

export default function InvestCalcHeader() {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
