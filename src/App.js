import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Nav from "./Component/Nav/Nav";
import AddTravelSpot from "./Component/AddTravelSpot/AddTravelSpot";
import MyBooking from "./Component/MyBooking/MyBooking";
import ManageAllBooking from "./Component/ManageAllBooking/ManageAllBooking";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Login from "./Component/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/addSpot">
            <AddTravelSpot></AddTravelSpot>
          </Route>
          <Route path="/booking">
            <MyBooking></MyBooking>
          </Route>
          <Route path="/manage">
            <ManageAllBooking></ManageAllBooking>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
