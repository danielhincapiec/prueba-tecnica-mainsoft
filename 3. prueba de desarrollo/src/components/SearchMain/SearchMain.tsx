import InputCheckbox from '../Forms/InputCheckbox';
import InputDate from '../Forms/InputDate';
import InputText from '../Forms/InputText';
import IconCar from './IconCar.svg';
import IconReceived from './IconReceived.svg';
import IconReturn from './IconReturn.svg';
import IconSend from './IconSend.svg';
import './SearchMain.scss';

function SearchMain() {
	return (
		<div className="search-main container container--no-gap">
			<div className="container__inner">

				<h1>Alquiler de carros Miami</h1>

				<div className="search-main__box">

					<div className="search-main__field">
						<div className="search-main__field__icon">
							<img src={IconCar} alt="" />
						</div>
						<InputText label="Localidad de Retiro" />
					</div>
				</div>

				<div className=" search-main__field--simple">
					<InputCheckbox />
				</div>

				<div className="search-main__box search-main__dates">

					<div className="search-main__field">
						<div className="search-main__field__icon">
							<img src={IconReceived} alt="" />
						</div>
						<label className="search-main__field__label">Recogida</label>

						<InputDate />
					</div>

					<div className="search-main__field">
						<div className="search-main__field__icon">
							<img src={IconReturn} alt="" />
						</div>
						<label className="search-main__field__label">Devolución</label>

						<InputDate />
					</div>

				</div>

				<div className="search-main__field--simple">
					<button className="search-main__submit">
						<img src={IconSend} alt="" />
					</button>
				</div>

			</div>
		</div>
	);
}
export default SearchMain;