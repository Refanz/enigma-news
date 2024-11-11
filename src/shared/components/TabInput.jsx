import {Component} from 'react';
import PropTypes from "prop-types";

class TabInput extends Component {
    render() {
        return (
            <input type="radio" name="news_tab" role="tab" className="tab" aria-label={this.props.label}/>
        );
    }
}

export default TabInput;

TabInput.propTypes = {
    label: PropTypes.string
}