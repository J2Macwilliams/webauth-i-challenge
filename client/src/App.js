import React from 'react';
import { Route } from 'react-router-dom';
import Splash from './components/Splash';
import Home from './components/HomePage'
// import './App.css';

function App() {
	return (
		<div className='App'>
			<Route exact path='/' component={Splash} />
      <Route exact path='/home-page' 
                render={(props) =>
                <Home {...props} />}
            />
		</div>
	);
}

export default App;
