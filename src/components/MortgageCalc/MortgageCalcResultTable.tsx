import classes from "../InvestCalcResultTable/InvestCalcResultTable.module.css";

export default function MortgageCalcResultTable(props: {
  monthlyPayment: number;
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
          <th>MonthlyPayment</th>
        </tr>
      </thead>
      <tbody>{formatter.format(props.monthlyPayment)}</tbody>
    </table>
  );
}
