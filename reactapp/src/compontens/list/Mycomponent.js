import './Mycomponent.css';
 function card(props) {

 	return (
		<div className="card">
			<div className="card-header">
				<div>{props.title}</div>
				<div>{props.title}</div>
				<div>{props.title}</div>
			</div>	
		</div>
	)
}

export default card;
	