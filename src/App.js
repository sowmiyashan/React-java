import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
    return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home}/>
			</Switch>
		</Router>
  	);
}

export default App;
