var login = document.getElementById("landing-joinus");
var modalBg = document.querySelector(".login-modal-bg");
var modalClose = document.querySelector(".close");
var navbar = document.querySelector("nav");
var OTP = document.getElementById("OTP");
var phoneNumber = document.getElementById("phoneNumber");
var loginContinue = document.getElementById("loginContinue");
var phoneDiv = document.getElementById("phoneDiv");
var loginModal = document.querySelector(".login-modal");
var modalBackOTP = document.getElementById("backOTP");
var modalBackName = document.getElementById("backName");
var infoBg = document.querySelector(".info-modal-bg");
var nameDiv = document.getElementById("name");
var confirmLogin = document.getElementById("confirmLogin");

phoneDivActive = () => {
    phoneDiv.style.display = "block";
    OTP.style.display = "none";
	nameDiv.style.display = "none";
    phoneNumber.innerHTML = "";
    phoneDiv.style.display = "flex";
	loginModal.style.height = "auto"
};

OTPDivActive = () => {
    phoneDiv.style.display = "none";
    OTP.style.display = "block";
    phoneNumber.classList.add("phone");
	loginModal.style.height = "340px"
	nameDiv.style.display = "none";
};

nameDivActive = () => {
	phoneDiv.style.display = "none";	
	OTP.style.display = "none";
	nameDiv.style.display = "block";
	loginModal.style.height = "auto"
}

modalCloseFunction = () => {
    modalBg.classList.remove("bg-active");
    phoneDivActive();
    document.getElementById("otp-div").reset();
};

modalInfoCloseFunction = () => {
    infoBg.classList.remove("info-bg-active");
	console.log(classList)
};

modalOpenFunction = () => {
    modalBg.classList.add("bg-active");
    navbar.style.zIndex = "0";
};

login.addEventListener("click", function() {
    modalOpenFunction();
});

modalClose.addEventListener("click", function() {
    modalCloseFunction();
});

// modalCloseSend.addEventListener("click", function() {
//     modalInfoCloseFunction();
// });

loginContinue.addEventListener("click", function() {
	let inputText = parseInt(document.querySelector("#inputPhoneNo").value);
    phoneNumber.innerHTML = inputText;
    OTPDivActive();
})

confirmLogin.addEventListener("click", function() {
	nameDivActive();
})

modalBackOTP.onclick = function() {
    phoneDivActive();
};

modalBackName.onclick = function() {
	OTPDivActive();	
}

// code for otp input
let in1 = document.getElementById('otp-1'),
    ins = document.querySelectorAll('input[type="number"]'),
	 splitNumber = function(e) {
		let data = e.data || e.target.value; 
		if ( ! data ) return; 
		if ( data.length === 1 ) return; 
		
		popuNext(e.target, data);
	},
	popuNext = function(el, data) {
		el.value = data[0]; 
		data = data.substring(1); 
		if ( el.nextElementSibling && data.length ) {
			popuNext(el.nextElementSibling, data);
		}
	};

ins.forEach(function(input) {
	input.addEventListener('keyup', function(e){
		if (e.keyCode === 16 || e.keyCode == 9 || e.keyCode == 224 || e.keyCode == 18 || e.keyCode == 17) {
			 return;
		}
		
		if ( (e.keyCode === 8 || e.keyCode === 37) && this.previousElementSibling && this.previousElementSibling.tagName === "INPUT" ) {
			this.previousElementSibling.select();
		} else if (e.keyCode !== 8 && this.nextElementSibling) {
			this.nextElementSibling.select();
		}
		
		if ( e.target.value.length > 1 ) {
			splitNumber(e);
		}
	});
	
	input.addEventListener('focus', function(e) {
		if ( this === in1 ) return;
		
		if ( in1.value == '' ) {
			in1.focus();
		}
		
		if ( this.previousElementSibling.value == '' ) {
			this.previousElementSibling.focus();
		}
	});
});


in1.addEventListener('input', splitNumber);
