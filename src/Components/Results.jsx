import React from 'react';
import { calculateInvestmentResults } from '../util/investment.js';
import { formatter } from '../util/investment.js';

const Results = ({ userInput }) => {
  console.log('user Input in Results :', userInput);

  const resultsData = calculateInvestmentResults(userInput);

  if (!resultsData || resultsData.length === 0) {
    return <p>No results available. Please check your input.</p>;
  }

  console.log('ResultsData : ', resultsData);

  return (
    <div id='result'>
      <h2>Results</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Annual Investment</th>
          </tr>
        </thead>
        <tbody>
          {resultsData.map((data) => (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(data.annualInvestment)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>
        Total investment value after {userInput.duration} years:{' '}
        {formatter.format(resultsData[resultsData.length - 1].valueEndOfYear)}
      </p>
    </div>
  );
};

export default Results;
