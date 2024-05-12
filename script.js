function validEmail(str) {
  //your JS code here.
	const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

	return emailRegex.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str)); 
   