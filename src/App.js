/** @jsxImportSource @emotion/react */
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Booking from './pages/Booking'
import Home from './pages/Home'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/booking">
          <Booking />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
