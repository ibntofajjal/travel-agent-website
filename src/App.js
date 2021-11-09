import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import Nav from "./Component/Nav/Nav";
import AddTravelSpot from "./Component/AddTravelSpot/AddTravelSpot";
import MyBooking from "./Component/MyBooking/MyBooking";
import ManageAllBooking from "./Component/ManageAllBooking/ManageAllBooking";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Login from "./Component/Login/Login";
import NotFound from "./Component/NotFound/NotFound";
import Footer from "./Component/Footer/Footer";
import TravelSpot from "./Component/Home/TravelSpot/TravelSpot";
import Services from "./Component/Services/Services";
import Carousel from "./Component/Home/Carousel/Carousel";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Component/Login/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Nav></Nav>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/addSpot">
              <AddTravelSpot></AddTravelSpot>
            </PrivateRoute>
            <Route path="/travelSpots">
              <TravelSpot></TravelSpot>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <MyBooking></MyBooking>
            </PrivateRoute>
            <PrivateRoute path="/manage">
              <ManageAllBooking></ManageAllBooking>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
