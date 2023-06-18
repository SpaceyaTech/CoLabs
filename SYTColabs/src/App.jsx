import "./App.css";
import Details from "./Components/Home/Details";
import HeroSection from "./Components/Home/HeroSection";
import NavBar from "./Components/Home/NavBar";
import { styles } from "./style";

export default function App() {
	return (
		<div className='bg-primary w-full overflow-hidden'>
			<div className={`${styles.paddingX} ${styles.flexCenter} bg-gray-300`}>
			<div className={`${styles.boxWidth}`}>
				<NavBar />
      </div>
      </div>
				<HeroSection />
				<Details />
		</div>
	);
}
