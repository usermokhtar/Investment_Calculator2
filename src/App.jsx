import Header from './Components/Header';
import UserInput from './Components/UserInput';
import Results from './Components/Results';
import { useState } from 'react';
import { useEffect } from 'react';

import './index.css';
function App() {
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
    <>
      <Header />
      <UserInput onHandel={handleInput} userInput={userInput} />
      <Results userInput={userInput} />
    </>
  );
}

export default App;
