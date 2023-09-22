import ResultItem from "./ResultItem";
import style from "./Result.module.css"
const Result = (props) => {
  let result = [];
  const calculateHandler = () => {
    let currentSavings = props.data.currentSavings;
    let yearlySaving = props.data.yearlySaving;
    let expectedReturn = props.data.expectedInterest / 100;
    let duration = props.data.investmentDuration;
    let totalInvestedCapital = currentSavings;
    let totalInterestGained = 0;
    console.log(currentSavings);
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      totalInterestGained += yearlyInterest;
      currentSavings += yearlyInterest + yearlySaving;
      totalInvestedCapital += yearlySaving; 

      result.push({
        year: i + 1,
        toralSavings: Math.round(currentSavings*100)/100,
        interestGainedYear: Math.round(yearlyInterest*100)/100 ,
        yearlyContribution: Math.round(yearlySaving*100)/100,
        totalInterestGained:  Math.round(totalInterestGained*100)/100,
        totalInvestedCapital: Math.round(totalInvestedCapital*100)/100,
        key: Math.random().toString(),
      });
    }
  };

  calculateHandler();
  console.log(result)  
  return (
    <table className = {style.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((item) => (
          <ResultItem
            year={item.year}
            toralSavings={item.toralSavings}
            interestGainedYear={item.interestGainedYear}
            totalInterestGained={item.totalInterestGained}
            totalInvestedCapital={item.totalInvestedCapital}
            key={item.key}
          />
        ))}
      </tbody>
    </table>
  );
};
export default Result;
