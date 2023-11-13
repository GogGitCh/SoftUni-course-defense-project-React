import Navbar from "./components/navigation/Navbar"
import styles from './App.module.css'
import HeroSection from "./components/hero/HeroSection"
import InfogramCards from "./components/users_infogram/InfogramCards"
import Team from "./components/our_team/TeamCard"
import Carusel from "./components/common/carusels/Carusel"
import Footer from "./components/footer/Footer"
import ModalBootstrap from "./components/common/modals/ModalBootstrap"


function App() {


	return (
		<div className={styles['app-wrapper']}>
			<Navbar />
			<HeroSection />
			<InfogramCards />
			<ModalBootstrap />
			<Team />
			<Carusel />
			<Footer />
		</div>
	)
}

export default App

