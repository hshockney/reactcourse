import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyCl8T6xCUrX_a2d407B8OiwmXDbjnX-9ak';
//Create a new component that produces html
const App = () => {
  return (
	<div> 
	  <SearchBar />
	</div>
  );
}


//Take this component's generated html and put it on the page.(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));