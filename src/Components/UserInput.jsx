import React, { useState, useEffect } from 'react';

const UserInput = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  useEffect(() => {
    console.log('Initial userInput state:', userInput);
  }, []);

  const handleInput = (identifier, value) => {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [identifier]: +value };
    });
  };

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
              handleInput('initialInvestment', event.target.value)
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
              handleInput('annualInvestment', event.target.value)
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
            onChange={(event) =>
              handleInput('expectedReturn', event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration (years)</label>

          <input
            type='number'
            id='duration'
            required
            value={userInput.duration}
            onChange={(event) => handleInput('duration', event.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
