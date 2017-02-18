import React, { Component } from 'react';
import '../../styles.css';

class Button extends Component {
	refsBtn() {
		return this.refs.btn;
	}
	render() {
		const { iconClass, classBtn, disabled, style, label, onClick } = this.props;

		const isDisabled = disabled ? "disabled" : "";
		const classValueIcon = `fa ${iconClass}`;
		const classValueBtn = `btn ${classBtn}`;

		const icon = iconClass ? 
									<i className={classValueIcon}></i> : null;
		return (
			<button 
				className={classValueBtn}
				ref="btn" 
				disabled={isDisabled} 
				style={style}
				onClick={onClick}>
				{icon} {label}
			</button>
		);
	}
}

Button.defaultProps = {
  classBtn: 'btn-primary',
  disabled: false,
  ref: null,
  style: {},
  iconClass: null
};

export default Button;