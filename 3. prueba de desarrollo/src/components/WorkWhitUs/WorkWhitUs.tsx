import './_work-whit-us.scss';
import logoAlamo from './logo-alamo.png';
import logoBudget from './logo-budget.png';
import logoHerzt from './logo-herzt.png';


function WorkWhitUs() {
	return (
		<div className="work-whit-us container">
			<div className="container__inner">
				<img src={logoAlamo} alt="" />
				<img src={logoBudget} alt="" />
				<img src={logoHerzt} alt="" />
			</div>
		</div>
	);
}
export default WorkWhitUs;