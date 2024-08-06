import React, { useState, useEffect } from 'react';

const UserInput = ({ onHandel, userInput }) => {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label>Initial Investment</label>

          <input
            type='number'
            id='initialInvestment'
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onHandel('initialInvestment', event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>

          <input
            type='number'
            id='annualInvestment'
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onHandel('annualInvestment', event.target.value)
            }
          />
        </p>
        <p>
          <label>Expected Return (%)</label>

          <input
            type='number'
            id='expectedReturn'
            required
            value={userInput.expectedReturn}
            onChange={(event) => onHandel('expectedReturn', event.target.value)}
          />
        </p>
        <p>
          <label>Duration (years)</label>

          <input
            type='number'
            id='duration'
            required
            value={userInput.duration}
            onChange={(event) => onHandel('duration', event.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
