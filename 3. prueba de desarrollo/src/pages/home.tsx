import { useEffect, useState } from "react";
import SideBar from "../components/ButtonSideBar/SideBar";
import TopBar from '../components/TopBar/TopBar';
import SearchMain from '../components/SearchMain/SearchMain';
import Banner1 from '../components/Banners/Banner-1/Banner1';
import TrustpilotRating from '../components/Trustpilot/TrustpilotRating';
import WorkWhitUs from '../components/WorkWhitUs/WorkWhitUs';
import '../components/Global/scss/Global.scss';
import '../components/Global/fonts/stylesheet.css';

const TRUST_PILOT: { rating: number | undefined, numberComments: number | undefined } = {
	rating: undefined,
	numberComments: undefined
}

function Home() {

	const [trustPilot, setTrustPilot] = useState(TRUST_PILOT)
	const [isOpenSideBar, setIsOpenSideBar] = useState(false)

	useEffect(() => {
		setTrustPilot({
			rating: 4.3,
			numberComments: 3030
		});
	}, []);

	return (
		<div className={isOpenSideBar ? 'js-side-panel-open' : ''}  >
			<SideBar />
			<TopBar isOpenSideBar={isOpenSideBar} setIsOpenSideBar={setIsOpenSideBar} />
			<SearchMain />
			<Banner1 />
			<TrustpilotRating rating={trustPilot.rating} numberComments={trustPilot.numberComments} />
			<WorkWhitUs />
		</div>
	);
}

export default Home;