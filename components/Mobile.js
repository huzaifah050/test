import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

const Mobile = () => {
	const [showButton, setShowButton] = useState(true);
	const [showMessage, setShowMessage] = useState(false);
	return (
		<div className="bg-green-400 h-auto">
			{showButton && (
				<button onClick={() => setShowMessage(true)} size="lg">
					Show Message
				</button>
			)}
			<CSSTransition
				in={showMessage}
				timeout={300}
				classNames="alert"
				unmountOnExit
				onEnter={() => setShowButton(false)}
				onExited={() => setShowButton(true)}
			>
				<div onClose={() => setShowMessage(false)}>
					<p>Animated alert message</p>
					<p>This alert message is being transitioned in and out of the DOM.</p>
					<button onClick={() => setShowMessage(false)}>Close</button>
				</div>
			</CSSTransition>
		</div>
	);
};

export default Mobile;
