import { Dispatch } from "redux";
import { ActionModalType } from "../ActionModal/ActionModal";
import { BankActionTypes } from "../ActionTypes/BankActionTypes";

export const DepositMoney = (amount: number) => {
  return (dispatch: Dispatch<BankActionTypes>) => {
    dispatch({
      type: ActionModalType.DepositMoney,
      payload: amount,
    });
  };
};

export const WithdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<BankActionTypes>) => {
    dispatch({
      type: ActionModalType.WithdrawMoney,
      payload: amount,
    });
  };
};

export const ResetBank = () => {
  return (dispatch: Dispatch<BankActionTypes>) => {
    dispatch({
      type: ActionModalType.ResetBank,
    });
  };
};
