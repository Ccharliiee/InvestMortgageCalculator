import classes from "./InvestCalcResultTable.module.css";

export default function InvestCalcResultTable(props: {
  resdata: {
    year: number;
    capitalInvested: number;
    annualInterest: number;
    totalInterest: number;
    totalSavings: number;
  }[];
}) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Capital Invested</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Total Savings</th>
        </tr>
      </thead>
      <tbody>
        {props.resdata.map(
          (yearData: {
            year: number;
            capitalInvested: number;
            annualInterest: number;
            totalInterest: number;
            totalSavings: number;
          }) => (
            <tr key={yearData.year}>
              {Object.entries(yearData).map(([k, v]) => (
                <td>{k !== "year" ? formatter.format(v) : v.toString()}</td>
              ))}
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}
