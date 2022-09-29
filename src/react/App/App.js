import React, {useState} from "react";
import FetchAndDisplayData from "../components/fetchData/index";
import './App.css';

const App = ()=> {
	const [shape, setShape] = useState(false)
	return (
		<>
			<FetchAndDisplayData/>	
		</>
		
	);
}

export default App;
