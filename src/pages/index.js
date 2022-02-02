/** Pages are the actual web pages/routes that a user navigates to.
 * Pages typically contains many features and/or components.
 * Pages may make queries and handle state, although it is best left to the components and features
 * within when possible.
 * **/

import Dashboard from "./Dashboard";
import FundList from "./Funds/FundList";
import FundDetail from "./Funds/FundDetail";
import UserHoldings from "./UserHoldings";
import CoinTracker from "./CoinTracker";
import UserBaskets from "./UserBaskets";

export { Dashboard, UserHoldings, FundDetail, FundList, CoinTracker, UserBaskets };
