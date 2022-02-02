import "antd/dist/antd.css";
import "../src/styles/_main.scss";
import { AppRouter } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import { history } from "../src/helpers";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
