import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"


import Navbar from "./components/common/navigation/Navbar"
import styles from './App.module.css'
import HeroSection from "./components/main/hero/HeroSection"
import InfogramCards from "./components/main/users_infogram/InfogramCards"
import Team from "./components/main/our_team/TeamCard"
import Carusel from "./components/common/carusels/Carusel"
import Footer from "./components/common/footer/Footer"
import Gallery from "./components/gallery/Gallery"
import CustomerTabs from "./components/customer/client/CustomerTabs"
import MasterTabs from "./components/customer/master/MasterTabs"
import Register from "./components/register/Register"
import Login from "./components/login/Login"


function App() {


	return (

		<div className={styles['app-wrapper']}>
			<Navbar />
			<Routes>
				<Route path="/" element={
					<>
						<HeroSection />
						<InfogramCards />
						<Team />
						<Carusel />
					</>
				} />

				<Route path="gallery" element={<Gallery />} />

				<Route path="/customer" element={<CustomerTabs />} />
				<Route path="/master" element={<MasterTabs />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App

