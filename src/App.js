import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Room from './components/Room/Room';
import Dining from './components/Dining/Dining';

function App() {
    return (
		<Router>
			<Header/>
			<Search/>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/rooms" component={Room}/>
				<Route exact path="/dining" component={Dining}/>
			</Switch>
		</Router>
  	);
}

export default App;
