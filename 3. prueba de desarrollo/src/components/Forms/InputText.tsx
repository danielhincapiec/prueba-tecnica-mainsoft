import './_input-text.scss';

function InputText(props: any) {
	return (
		<div className="input-text">
			<label className="search-main__field__label">{props.label}</label>
			<div className="search-main__field__input">
				<input className="input-text__ui" type="text" name="" id="" defaultValue="Ciudad, Aeropuerto o Ciudad" />
			</div>
		</div>
	);
}
export default InputText;


