export default function MortgagePaymentCalcApi(userInput: {
  mortgageAmount: number;
  interestRate: number;
  timePeriod: number;
}) {
  const interestRateRealM = Math.pow(
    1 + userInput.interestRate / 100 / 365,
    30
  );

  const interestPower = Math.pow(interestRateRealM, userInput.timePeriod * 12);

  return (
    (userInput.mortgageAmount * (interestRateRealM - 1) * interestPower) /
    (interestPower - 1)
  );
}
