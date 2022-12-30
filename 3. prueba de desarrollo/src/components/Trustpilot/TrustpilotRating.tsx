import './TrustpilotRating.scss';
import logo from './logo-trustpilot.png';

function TrustpilotRating(props: any) {
	return (
		<div className="trustpilot container" style={{ '--rating': props.rating } as React.CSSProperties}  >
			<div className="container__inner">
				<div className="trustpilot__logo">
					<img src={logo} alt="" />
				</div>
				<div className="trustpilot__rating"> {props.rating} / 5 </div>
				<div className="trustpilot__stars">
					<svg xmlns="http://www.w3.org/2000/svg" width="95" height="21" viewBox="0 0 95 21">
						<path id="Unión_15" data-name="Unión 15"
							d="M0,21V0H95V21H0Zm76.4-2.038H93.691V1.669H76.4Zm-18.733,0H74.957V1.669H57.664Zm-18.734,0H56.223V1.669H38.93Zm-18.734,0H37.49V1.669H20.2Zm-18.734,0H18.755V1.669H1.462Zm83.582-5.454,2.63-.666,1.1,3.386Zm-18.733,0,2.63-.666,1.1,3.386Zm-18.734,0,2.63-.666,1.1,3.386Zm-18.734,0,2.63-.666,1.1,3.386Zm-18.734,0,2.63-.666,1.1,3.386Zm72.629-1.675-3.747-2.7h4.63l1.423-4.359L86.467,9.13H91.1l-3.729,2.7L85.063,13.49l-3.747,2.7Zm-18.733,0-3.747-2.7h4.63l1.423-4.359L67.734,9.13h4.63l-3.729,2.7L66.329,13.49l-3.747,2.7Zm-18.734,0-3.747-2.7h4.629l1.423-4.359L49,9.13h4.63l-3.729,2.7L47.595,13.49l-3.747,2.7Zm-18.734,0L22.79,9.13h4.63l1.424-4.359L30.266,9.13H34.9l-3.73,2.7L28.86,13.49l-3.747,2.7Zm-18.734,0L4.057,9.13H8.686L10.11,4.772,11.533,9.13h4.63l-3.73,2.7L10.127,13.49l-3.747,2.7Z"
							fill="#fff" />
					</svg>
				</div>
				<div className="trustpilot__leyend">Basado en {props.numberComments} comentarios</div>
			</div>
		</div >
	);
}
export default TrustpilotRating;