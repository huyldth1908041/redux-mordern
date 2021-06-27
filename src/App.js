import {ListStudent} from "./pages/ListStudent";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,

} from "react-router-dom";
import {CreateStudent} from "./pages/CreateStudent";
import history from "./history";

function App() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/student"/>
                </Route>
            </Switch>
            <Switch>
                <Route exact path="/student/create" component={CreateStudent}/>
            </Switch>
            <Switch>
                <Route exact path="/student" component={ListStudent}/>
            </Switch>
        </Router>
    )
}

export default App;
