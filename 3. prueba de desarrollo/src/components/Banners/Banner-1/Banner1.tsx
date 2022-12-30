import './Banner1.scss';
import image from './car-1.png';

function Banner1() {
	return (
		<div className="banner-1 container ">
			<div className="container__inner">
				<div className="banner-1__img"> <img src={image} alt="" /></div>
				<div className="banner-1__title"><span> ¡SEGURO DE <em> VIAJE </em> GRATIS! </span></div>
				<div className="banner-1__leyend">Con cobertura médica frente al Coronavirus de USD $100.000</div>
			</div>
		</div>
	);
}
export default Banner1;