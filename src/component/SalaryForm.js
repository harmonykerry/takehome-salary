import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SalaryForm({ handleFormError, handleFormSuccess, handleCalculation }) {
  const [taxYear, setTaxYear] = useState("2022-2023");
  const [grossSalary, setGrossSalary] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (grossSalary && grossSalary > 0) {
      handleFormSuccess();
      handleCalculation(taxYear, grossSalary);

      //handleCalculation here only if you have a value form
    }
    //handle error
    else {
      handleFormError();
    }
  };

  const handleChange = ({ currentTarget }) => {
    if (currentTarget.name === "taxYear") {
      setTaxYear(currentTarget.value);
    }
    if (currentTarget.name === "grossSalary") {
      //urinary operator Number.parseFloat(+currentTarget.value) as it gives a string
      setGrossSalary(+currentTarget.value);
    }
  };

  return (
    <Form className="border p-3 rounded-3 mb-3" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Select Tax Year</Form.Label>
        <Form.Select onChange={handleChange} name="taxYear" value={taxYear}>
          <option>Select Tax Year</option>
          <option value="2021-2022">2021-2022</option>
          <option value="2022-2023">2022-2023</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Gross Annual Salary</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter your Gross Annual Salary"
          onChange={handleChange}
          name="grossSalary"
          value={grossSalary}
        />
      </Form.Group>
      <Form.Group className="mb-3 text-center">
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}

export default SalaryForm;
