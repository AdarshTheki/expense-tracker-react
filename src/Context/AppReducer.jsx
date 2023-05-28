
const AppReducer =  (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        Transactions: state.Transactions.filter(
          (Transactions) => Transactions.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        Transactions: [action.payload, ...state.Transactions]
      
      };
    default:
      return state;
  }
};
export default AppReducer;