
function User_Info(username, pass, user_type, student_ID) {
	this.username = username;
	this.pass = pass;
	this.user_type = user_type;
	this.student_ID = student_ID;
}

var page_data = [
new User_Info("casualcate", "1","Casual", "907082678"), 
new User_Info("expertethan", "1","Expert", "907082677"),
new User_Info("beginnerbob", "1","Beginner", "907082676")
];

function do_login(){
	//based off hardcoded user and password values will load new page main.html
	
	var input_data = document.getElementById("login_info");
	
	var user = input_data[0].value;
	var pass = input_data[1].value;
	
	var login_success = false;
	var curr_user;
	
	for(i=0; i<page_data.length; i++) {
		if(user === page_data[i].username &&
			pass === page_data[i].pass) {
			login_success = true;
			curr_user = page_data[i];
		}
	}
	
	if(login_success) {
		if(curr_user.user_type === "Casual"){
			location.replace("main_casual.html");
		}else if(curr_user.user_type === "Beginner"){
			location.replace("main_beginner.html");
		}else {
			location.replace("main_expert.html");
		}
	} else {
		//login_warning
		document.getElementById("login_warning").style.visibility = "visible";
	}

}

function do_register(){
	document.getElementById("login_div").style.display = "none";
	document.getElementById("register_div").style.display = "block";
	
	document.getElementById("login_warning").style.visibility = "hidden";
}

function confrim_register(){
	
	var input_data = document.getElementById("regist_info");
	
	var user = input_data[0].value;
	var pass = input_data[1].value;
	var student_ID = input_data[2].value;
	var user_level = input_data[3].value;
	
	var regist_success = true;
	
	for(i=0; i<page_data.length; i++) {
		if(user === page_data[i].username) {
			regist_success = false;
		}
	}
	
	if(regist_success){
		page_data.push(new User_Info(user, pass,user_level,student_ID));
		
		document.getElementById("regist_success").style.display = "block";
		
		setTimeout(function () {
			
			
			document.getElementById("login_div").style.display = "block";
			document.getElementById("register_div").style.display = "none";
		
			document.getElementById("regist_warning").style.display = "none";document.getElementById("regist_success").style.display = "none";
		}, 1500);
	
	} else {
		document.getElementById("regist_warning").style.display = "block";
	}
	
}