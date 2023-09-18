function getFormvalue() {
	const fname = document.getElementsByName("fname")[0].value;
	const lname = document.getElementsByName("lname")[0].value;
	const full = fname + " "  + lname;

	alert(full);
}
