import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function SalaryCard({ salary }) {
  const {
    annualIncome,
    taxableIncome,
    taxPercentage,
    taxAmount,
    takeHomeMonthly,
    takeHomeSalary,
  } = salary;
  return (
    <ListGroup>
      <ListGroup.Item>
        <div className="d-flex justify-content-between">
          <div>Annual Salary</div>
          <div>{annualIncome}</div>
        </div>
      </ListGroup.Item>
      <ListGroup.Item>
        <div className="d-flex justify-content-between">
          <div>Taxable Income</div>
          <div>{taxableIncome}</div>
        </div>
      </ListGroup.Item>
      <ListGroup.Item>
        <div className="d-flex justify-content-between">
          <div>Tax Percentage</div>
          <div>{taxPercentage} %</div>
        </div>
      </ListGroup.Item>
      <ListGroup.Item>
        <div className="d-flex justify-content-between">
          <div>Tax Payable</div>
          <div>{taxAmount}</div>
        </div>
      </ListGroup.Item>
      <ListGroup.Item>
        <div className="d-flex justify-content-between">
          <div>Take Home Monthly</div>
          <div>{takeHomeMonthly}</div>
        </div>
      </ListGroup.Item>
      <ListGroup.Item>
        <div className="d-flex justify-content-between fs-4 bg-success p-2 text-dark bg-opacity-25">
          <div>Take Home Salary</div>
          <div>{takeHomeSalary}</div>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default SalaryCard;
