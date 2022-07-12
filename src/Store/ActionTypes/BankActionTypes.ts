import { ActionModalType } from "../ActionModal/ActionModal";

interface IDepositMoney {
  type: ActionModalType.DepositMoney;
  payload: number;
}

interface IWithdrawMoney {
  type: ActionModalType.WithdrawMoney;
  payload: number;
}

interface IResetBank {
  type: ActionModalType.ResetBank;
}

export type BankActionTypes = IDepositMoney | IWithdrawMoney | IResetBank;
