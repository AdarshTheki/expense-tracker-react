import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export default function Balance() {

  const { Transactions } = useContext(GlobalContext);

  const Amounts = Transactions.map(Transactions => Transactions.amount);
  const total = Amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id='balance'>${total}</h1>
    </>
  );
}
