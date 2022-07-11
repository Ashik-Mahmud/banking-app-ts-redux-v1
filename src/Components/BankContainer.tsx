import BankAction from "./BankAction";
import BankDashboard from "./BankDashboard";
import BankHeader from "./BankHeader";

const BankContainer = () => {
  return (
    <div>
      <BankHeader />
      <BankAction />
      <BankDashboard />
    </div>
  );
};

export default BankContainer;
