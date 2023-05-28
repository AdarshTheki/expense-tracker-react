import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// 1. Initial state
const initialState = {
  Transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

// 2. create context
export const GlobalContext = createContext(initialState);

// 3. Provider components
// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // 4. Actions
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  const addTransaction = (Transactions) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: Transactions
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        Transactions: state.Transactions,
        deleteTransaction,
        addTransaction
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
