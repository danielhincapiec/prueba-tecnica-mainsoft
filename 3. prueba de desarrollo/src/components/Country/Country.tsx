import './Country.scss';
import flag from './flag-co.png';

function Country() {
	return (
		<div className="country">
			<a href=""><img src={flag} alt="" /></a>
		</div>
	);
}

export default Country