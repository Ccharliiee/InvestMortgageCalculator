export default function InvestCalcApi(userInput: {
  currentSavings: number;
  annualContribution: number;
  expectedROIRate: number;
  timePeriod: number;
}) {
  const investProjectData = [];

  let currentSavings = +userInput.currentSavings;
  const annualContribution = +userInput.annualContribution;
  const expectedReturn = +userInput.expectedROIRate / 100;
  const timePeriod = +userInput.timePeriod;

  for (let i = 0; i < timePeriod; i++) {
    const annualInterest = currentSavings * expectedReturn;
    currentSavings += annualInterest + annualContribution;
    investProjectData.push({
      year: i + 1,
      capitalInvested: userInput.currentSavings + annualContribution * (i + 1),
      annualInterest,
      totalInterest:
        currentSavings -
        userInput.currentSavings -
        annualContribution * (i + 1),
      totalSavings: currentSavings,
    });
  }
  return investProjectData;
}
