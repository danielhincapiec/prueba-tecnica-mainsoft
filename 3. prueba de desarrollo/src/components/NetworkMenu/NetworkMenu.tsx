import './NetworkMenu.scss';
import IconFacebook from './IconFacebook.svg';
import IconTwitter from './IconTwitter.svg';
import IconGplus from './IconGplus.svg';
import IconInstagram from './IconInstagram.svg';

function NetworkMenu() {
	return (
		<div className="network-menu">
			<h2 className="network-menu__title">SIGUENOS EN</h2>

			<ul className="network-menu__container">
				<li className="network-menu__item">
					<a href="" target="_blank" rel="noopener noreferrer">
						<img src={IconFacebook} alt="facebook" />
					</a>
				</li>
				<li className="network-menu__item">
					<a href="" target="_blank" rel="noopener noreferrer">
						<img src={IconTwitter} alt="twitter" />
					</a>
				</li>
				<li className="network-menu__item">
					<a href="" target="_blank" rel="noopener noreferrer">
						<img src={IconGplus} alt="twitter" />
					</a>
				</li>
				<li className="network-menu__item">
					<a href="" target="_blank" rel="noopener noreferrer">
						<img src={IconInstagram} alt="twitter" />
					</a>
				</li>
			</ul>
		</div>
	);
}

export default NetworkMenu;