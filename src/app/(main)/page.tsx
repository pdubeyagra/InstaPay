import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
export default function Home() {
  const LoggedIn = { firstName: "Pradyumn", lastName: "Dubey", email: "pdubey.agra@gmail.com" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={LoggedIn ? LoggedIn.firstName : "user"}
            subtext="Manage your account from anywhere through instapay"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={98668.94}
          />
        </header>
        Recent Transaction
      </div>
      <RightSidebar user={LoggedIn} transactions={[]} banks={[{currentBalance: "2000"}, {currentBalance: "4895"}]} />
    </section>
  );
}
