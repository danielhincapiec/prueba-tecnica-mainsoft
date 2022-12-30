
import { useState } from 'react';
import MainMenu from '../MainMenu/MainMenu';
import NetworkMenu from '../NetworkMenu/NetworkMenu';
import './SideBar.scss';

function Sidebar() {

	return (
		<div className="side-bar container">
			<div className="container__inner">
				<MainMenu />
				<NetworkMenu />
			</div>
		</div>
	);
}

export default Sidebar;