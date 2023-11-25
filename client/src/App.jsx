import Navbar from "./components/common/navigation/Navbar"
import styles from './App.module.css'
// import HeroSection from "./components/main/hero/HeroSection"
// import InfogramCards from "./components/main/users_infogram/InfogramCards"
// import Team from "./components/main/our_team/TeamCard"
// import Carusel from "./components/common/carusels/Carusel"
import Footer from "./components/common/footer/Footer"
// import InfogramModal from "./components/common/modals/InfogramModal"
import Gallery from "./components/gallery/Gallery"
// import Filters from "./components/gallery/Filters"
// import Search from "./components/gallery/Search"
// import CustomerTabs from "./components/customer/client/CustomerTabs"
// import MasterTabs from "./components/customer/master/MasterTabs"

function App() {


	return (
		<div className={styles['app-wrapper']}>
			<Navbar />

		{/* Main page */}
			{/* <HeroSection /> */}
			{/* <InfogramCards /> */}
			{/* <InfogramModal /> */}
			{/* <Team /> */}
			{/* <Carusel /> */}

		{/* Gallery */}
			{/* <Search /> */}
			{/* <Filters /> */}
			<Gallery />


		{/* Customer Page */}
			{/* <CustomerTabs /> */}
			{/* <MasterTabs /> */}


			<Footer />
		</div>
	)
}

export default App

