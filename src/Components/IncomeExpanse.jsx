import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export default function IncomeExpanse() {
  const { Transactions } = useContext(GlobalContext);

  const Amounts = Transactions.map((Transaction) => Transaction.amount);

  const income = Amounts.filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    Amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p id='money-plus' className='money plus'>
          ${income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id='money-minus' className='money minus'>
          ${expense}
        </p>
      </div>
    </div>
  );
}
