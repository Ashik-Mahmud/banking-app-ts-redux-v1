import { ActionModalType } from "../ActionModal/ActionModal";
import { BankActionTypes as Action } from "../ActionTypes/BankActionTypes";

const initState = 0;
const BankReducer = (state: number = initState, action: Action) => {
  switch (action.type) {
    case ActionModalType.DepositMoney:
      return state + action.payload;
    case ActionModalType.WithdrawMoney:
      return state - action.payload;
    case ActionModalType.ResetBank:
      return 0;
    default:
      return state;
  }
};

export default BankReducer;
