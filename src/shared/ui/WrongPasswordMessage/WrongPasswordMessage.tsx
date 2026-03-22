const WrongPasswordMessage = () => {
	return (
		<ul className="authentication__error">
			The password must match the following criteria:
			<li>At least 6 characters long</li>
			<li>Contains a lowercase letter</li>
			<li>Contains an uppercase letter</li>
			<li>Contains a number</li>
			<li>Valid passwords will only be alphanumeric characters.</li>
		</ul>
	);
};

export default WrongPasswordMessage;
