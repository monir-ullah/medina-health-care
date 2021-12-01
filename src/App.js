// This is use for Import Components and React Router from React router DOm

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

import Home from './pages/Home/Home';
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Details from "./pages/Services/Details/Details";
import Services from "./pages/Services/Services";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";
import Login from "./pages/Shared/Login/Login";
import PrivateRoute from "./pages/Shared/Login/PrivateRoute/PrivateRoute";

// This is the mai App
function App() {
  return (
    <div >
      {/* THis is the AUthPRovider. For this AuthPRovide i will get all info of the login in mail or name */}
      <AuthProvider>

{/* This is Route. In This use for change the route properly */}
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          {/* This is use for dynamic service button nd Private Route */}
          <PrivateRoute path="/services/:serviceId">
            <Details></Details>
          </PrivateRoute>
          {/* This is use for Page Not Found */}
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
