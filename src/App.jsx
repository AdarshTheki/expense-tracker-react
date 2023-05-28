import Header from "./Components/Header";
import Balance from "./Components/Balance";
import IncomeExpanse from "./Components/IncomeExpanse";
import TransactionList from "./Components/TransactionList";
import AddTransaction from "./Components/AddTransaction";
import "./App.css";
import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpanse />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
