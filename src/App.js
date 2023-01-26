import './App.css';
import Carousel from './components/Carousel';
import { countries } from './components/Data';

function App() {
	return (
		<div className="App">
			<div className="topContent">
				<h2>Place to meet</h2>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
			</div>
			{/* Carousel */}
			<Carousel images={countries} />
		</div>
	);
}

export default App;
