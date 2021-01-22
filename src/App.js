import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Room from './components/Room/Room';

function App() {
    return (
		<Router>
			<Header/>
			<Search/>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/rooms" component={Room}/>
			</Switch>
		</Router>
  	);
}

export default App;
