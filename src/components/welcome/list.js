import { Component, h } from 'preact';

export class List extends Component {
	render(props, state, context) {
		return (
			<ul className={'list-group list-group-flush'}>
				{this.props.tips.map((tip, key) => (
					<li class={'list-group-item list-group-item-action'} key={key}>

						<div class="d-flex w-100 justify-content-start">
							{tip.icon &&
								<div>
									<img src={tip.icon} alt={tip.title} style={{width:'50px'}} class='mr-4 img-thumbnail'/>
								</div>
							}
							<div >
								<h5 class="mb-1">{tip.title}</h5>
								{tip.text ? <p class="mb-1">{tip.text}</p> : ''}
							</div>
						</div>

					</li>
				))}
			</ul>
		);
	}
}