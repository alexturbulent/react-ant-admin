import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";

// import { checkJWTToken } from "./utils";

import 'antd/dist/antd.css';


function App() {
    // const isAuthenticated = checkJWTToken();
    const isAuthenticated = true;

    return (
        <Router>
            <Switch>
                <Route path='/'>
                    {
                        isAuthenticated ? <Dashboard /> : <Login />
                    }
                </Route>
            </Switch>
        </Router>
    );
}

export default App;