import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Page_WeddingInfomation from "./components/Page_WeddingInfomation";
import Page_FromUs from "./components/Page_FromUs";
import Page_GuestInfomation from "./components/Page_GuestInfomation";

export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/info">
            <Page_WeddingInfomation />
          </Route>
          <Route path="/fromus">
            <Page_FromUs />
          </Route>
          <Route path="/guest_info">
            <Page_GuestInfomation />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
