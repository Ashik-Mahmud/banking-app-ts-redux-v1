import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { BankActionCreator } from "../Store";
import { State } from "../Store/Reducers";

const BankDashboard = () => {
  const banks = useSelector((state: State) => state.bank);
  const dispatch = useDispatch();
  const { DepositMoney, WithdrawMoney, ResetBank } = bindActionCreators(
    BankActionCreator,
    dispatch
  );
  return (
    <div>
      <h1>Bank Dashboard</h1>
      <h4>{banks}</h4>
      <button onClick={() => DepositMoney(1000)}>Deposit 1000tk</button>
      <button onClick={() => WithdrawMoney(1000)}>Withdraw 1000tk</button>
      <button onClick={() => ResetBank()}>Bankrupt</button>
    </div>
  );
};

export default BankDashboard;
