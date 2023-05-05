import { Profile } from "./profile/Profile";
import user from "./profile/user.json";
import { Statistics } from "./statistics/Statistics";
import data from "./statistics/data.json";
import { FriendList } from "./friendList/FriendList";
import friends from "./friendList/friends.json"
import { TransactionHistory } from "./transactions/TransactionHistory";
import transactions from "./transactions/transactions.json"




export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        color: '#010101',
      }}
    >
      <Profile items={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions}/>
    </div>
  );
};
