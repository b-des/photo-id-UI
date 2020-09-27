import { Component, h} from 'preact';
import { List } from './list';

class Welcome extends Component{
	constructor() {
		super();
	}

	render(props, state, context) {
		return(
			<div>
				<List tips={this.props.tips} />
			</div>
		)
	}
}
export default Welcome;