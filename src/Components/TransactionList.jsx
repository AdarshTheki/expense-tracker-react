import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const TransactionList = () => {

  const { Transactions, deleteTransaction } = useContext(GlobalContext);
  // console.log(Transactions);
  // const sign = (Transactions.amount < 0 ) ? '+' : '-';

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {Transactions.map((Transactions) => (
          <li key={Transactions.id} className={Transactions.amount < 0 ? "minus" : "plus"}>
          {Transactions.text}
          <span>{Transactions.amount}$</span>
          <button
            className='delete-btn'
            onClick={() => deleteTransaction(Transactions.id)}>
            X
          </button>
        </li>
        ))}
      </ul>
    </>
  );
}
export default TransactionList;