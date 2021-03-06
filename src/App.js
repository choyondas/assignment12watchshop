
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Pages/Home/Home/Home';

import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AllProducts from './Pages/Home/AllProducts/AllProducts';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Error from './Pages/Error/Error';

import ShowReview from './Pages/Home/Home/ShowReview/ShowReview';
import UpdateOrder from './Pages/Dashboard/UpdateOrder/UpdateOrder';

function App() {
  return (
    <div >
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <PrivateRoute path="/orders/update/:id">
              <UpdateOrder></UpdateOrder>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/allproducts">
              <AllProducts></AllProducts>
            </Route>
            <Route path="/review">
              <ShowReview></ShowReview>
            </Route>

            <PrivateRoute exact path="/placeorder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>



            <Route path='*'>
              <Error></Error>

            </Route>

          </Switch>

        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
