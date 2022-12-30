import React from 'react';
import './ButtonSideBar.scss';
import IconMenuLines from './IconMenuLines.svg';
import IconMenuBack from './IconMenuBack.svg';

function ButtonSidebar(props: any) {

	const onClick2 = React.useCallback(() => {
		props.setIsOpenSideBar(!props.isOpenSideBar)
	}, [props.isOpenSideBar]);

	return (
		<button onClick={onClick2} className="button-side-bar js-side-bar-trigger">
			<div className="button-side-bar__line">
				<img src={IconMenuLines} alt="" />
			</div>
			<div className="button-side-bar__back">
				<img src={IconMenuBack} alt="" />
			</div>
		</button>
	);
}

export default ButtonSidebar;