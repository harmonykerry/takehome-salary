import React, { useState } from "react";
import "./App.css";

import Banner from "./component/Banner";
import SalaryForm from "./component/SalaryForm";
import ErrorMessage from "./component/ErrorMessage";
import SalaryCard from "./component/SalaryCard";

import Container from "react-bootstrap/Container";

function App() {
  const [error, setError] = useState(false);
  const [salary, setSalary] = useState();

  //if you want to change the usTATE IN A PARENT DO IT THROUGH A FUNCTION
  const handleFormError = () => {
    setError(true);
  };
  const handleFormSuccess = () => {
    setError(false);
  };

  const handleCalculation = (taxYear, annualIncome) => {
    console.log(taxYear, annualIncome);
    if (annualIncome > 12500) {
      let taxPercentage;

      if (taxYear === "2021-2022") {
        if (annualIncome > 12500 && annualIncome <= 100000) {
          taxPercentage = 20;
        } else if (annualIncome > 40000 && annualIncome <= 40000) {
          taxPercentage = 40;
        } else {
          taxPercentage = 45;
        }
      }

      if (taxYear === "2022-2023") {
        if (annualIncome > 12500 && annualIncome <= 100000) {
          taxPercentage = 18;
        } else if (annualIncome > 40000 && annualIncome <= 40000) {
          taxPercentage = 35;
        } else {
          taxPercentage = 40;
        }
      }

      const taxableIncome = annualIncome - 12500;
      const tax = taxPercentage / 100;
      const taxAmount = taxableIncome * tax;
      
      const takeHomeSalary = annualIncome - taxAmount;
      const takeHomeMonthly = takeHomeSalary / 12;

      //salary is passed to salarycard
      const salary = {
        annualIncome,
        taxableIncome,
        taxPercentage,
        taxAmount,
        takeHomeMonthly,
        takeHomeSalary,
      };

      setSalary(salary);
    } else {
      //no tax deduction
      const salary = {
        annualIncome,
        taxableIncome:0,
        taxPercentage:0,
        taxAmount:0,
        takeHomeMonthly: annualIncome/ 12,
        takeHomeSalary:annualIncome,
      };

      setSalary(salary);
    }
  };

  return (
    <Container>
      <Banner />
      <SalaryForm
        handleFormError={handleFormError}
        handleFormSuccess={handleFormSuccess}
        handleCalculation={handleCalculation}
      />
      {/* if error then render error message */}
      {error && <ErrorMessage />}
      {/* only if there is a salary show the salaryCard */}
      {!error && salary && <SalaryCard salary={salary} />}
    </Container>
  );
}

export default App;
