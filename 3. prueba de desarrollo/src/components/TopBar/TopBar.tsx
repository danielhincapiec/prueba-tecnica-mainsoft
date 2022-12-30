import Country from '../Country/Country';
import MainLogo from '../Logos/MainLogo';
import Money from '../Money/Money';
import ButtonSideBar from '../ButtonSideBar/ButtonSideBar';
import './TopBar.scss';

function TopBar(props: any) {

	return (
		<div className="top-bar container">

			<div className="container__inner">
				<ButtonSideBar isOpenSideBar={props.isOpenSideBar} setIsOpenSideBar={props.setIsOpenSideBar} />
				<MainLogo />
				<Money />
				<Country />
			</div>

		</div>
	);
}

export default TopBar;