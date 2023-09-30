import logo from "../../assets/m-calculator-logo.png";
import classes from "./InvestCalcHeader.module.css";

export default function MortgageCalcHeader() {
  return (
    <header className={classes.headerm}>
      <img src={logo} alt="mlogo" />
      <h1>Mortgage Calculator</h1>
    </header>
  );
}
