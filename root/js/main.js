//document.getElementById("login_div").style.display = "none";
//document.getElementById("register_div").style.display = "block";

function reset_search(){
	document.getElementById("title_input").value = "";
	document.getElementById("author_input").value = "";
	document.getElementById("isbn_input").value = "";
	document.getElementById("subject_input").value = "--SELECT--";
	document.getElementById("genre_input").value = "--SELECT--";
	document.getElementById("input_date_from").value = "";
	document.getElementById("input_date_to").value = "";
}


////////ALL LEVEL FUNC//////////
//simply brings user back to login page
function logout(){
	location.replace("login.html");
}

function hp_preview(){
	document.getElementById("book_info_wrap").style.display = "none";
	document.getElementById("preview_wrap").style.display = "block";
}

function hp_preview_ret() {
	document.getElementById("preview_wrap").style.display = "none";
	document.getElementById("book_info_wrap").style.display = "block";
}

function turn_forward(){
	document.getElementById("page1").style.display = "none";
	document.getElementById("page3").style.display = "block";
	
	document.getElementById("page2").style.display = "none";
	document.getElementById("page4").style.display = "block";
	
	document.getElementById("preview_right_flip").style.visibility = "hidden";
	document.getElementById("preview_left_flip").style.visibility = "visible";
}

function turn_backward(){
	document.getElementById("page1").style.display = "block";
	document.getElementById("page3").style.display = "none";
	
	document.getElementById("page2").style.display = "block";
	document.getElementById("page4").style.display = "none";
	
	document.getElementById("preview_right_flip").style.visibility = "visible";
	document.getElementById("preview_left_flip").style.visibility = "hidden";
}

function to_hp_info() {
	document.getElementById("book_info_wrap").style.display = "block";
	document.getElementById("calendar_wrap").style.display = "none";
}

function hp_calendar_from_hp_info() {
	document.getElementById("book_info_wrap").style.display = "none";
	document.getElementById("calendar_wrap").style.display = "block";
}

function toNovFromDec() {
	document.getElementById("calendar_content").style.display = "none";
	document.getElementById("calendar_content2").style.display = "block";
}

function toDecFromNov() {
	document.getElementById("calendar_content").style.display = "block";
	document.getElementById("calendar_content2").style.display = "none";
}

function toJanFromDec() {
	document.getElementById("calendar_content").style.display = "none";
	document.getElementById("calendar_content3").style.display = "block";
}

document.getElementById("jan7th").onclick = function() {
	document.getElementById("jan7th").style.backgroundColor = "#997000";
}

document.getElementById("jan8th").onclick = function() {
	document.getElementById("jan8th").style.backgroundColor = "#997000";
}

document.getElementById("jan9th").onclick = function() {
	document.getElementById("jan9th").style.backgroundColor = "#997000";
}

document.getElementById("jan10th").onclick = function() {
	document.getElementById("jan10th").style.backgroundColor = "#997000";
}

function toCheckout_confirm() {
	document.getElementById("calendar_wrap").style.display = "none";
	document.getElementById("confirm_wrap").style.display = "block";
	document.getElementById("confirm_content").style.zIndex = "1000";
}

function decline() {
	document.getElementById("confirm_wrap").style.display = "none";
	document.getElementById("calendar_wrap").style.display = "block";
}

function confrim_cas_bas() {
	document.getElementById("confirm_btn_row").style.display = "none";
	document.getElementById("checkout_success").style.display = "block";

	
	setTimeout(function () {
			
			document.getElementById("confirm_wrap").style.display = "none";
			document.getElementById("casual_page1").style.display = "block";
			document.getElementById("dim1").style.display = "none";
	
			
	}, 2000);
}

function home_cas_bas() {
	document.getElementById("casual_page1").style.display = "block";
	
	document.getElementById("confirm_wrap").style.display = "none";
	document.getElementById("book_info_wrap").style.display = "none";
	document.getElementById("calendar_wrap").style.display = "none";
	document.getElementById("preview_wrap").style.display = "none";
	document.getElementById("query_cas_bas").style.display = "none";
	
}

function query_cas_bas() {
	document.getElementById("casual_page1").style.display = "none";
	
	document.getElementById("confirm_wrap").style.display = "none";
	document.getElementById("book_info_wrap").style.display = "none";
	document.getElementById("calendar_wrap").style.display = "none";
	document.getElementById("preview_wrap").style.display = "none";
	document.getElementById("query_cas_bas").style.display = "block";
	
}


////////////////////////////////



///////CASUAL LEVL FUNC/////////
function load_hp_info_casual() {
	document.getElementById("casual_page1").style.display = "none";
	document.getElementById("book_info_wrap").style.display = "block";
}

function casual1_return() {
	document.getElementById("book_info_wrap").style.display = "none";
	document.getElementById("casual_page1").style.display = "block";
}

function hp_calendar_from_hp_info() {
	document.getElementById("book_info_wrap").style.display = "none";
	document.getElementById("calendar_wrap").style.display = "block";
}


///////BEGINNER LEVL FUNC/////////
document.getElementById("tutorial_next1").onclick = function() {
	document.getElementById("tutorial_search").style.display = "none";
	document.getElementById("tutorial_result").style.display = "block";
}

document.getElementById("tutorial_next2").onclick = function() {
	document.getElementById("tutorial_nav").style.display = "none";
	document.getElementById("casual_page1").style.display = "none";
	document.getElementById("book_info_wrap").style.display = "block";
}

document.getElementById("tutorial_next3").onclick = function() {
	document.getElementById("tutorial_result").style.display = "none";
	document.getElementById("tutorial_nav").style.display = "block";
}

document.getElementById("tutorial_next4").onclick = function() {
	document.getElementById("tutorial_detail").style.display = "none";
	document.getElementById("book_info_wrap").style.display = "none";
	document.getElementById("preview_wrap").style.display = "block";
}

document.getElementById("tutorial_next5").onclick = function() {
	document.getElementById("tutorial_preview").style.display = "none";
	document.getElementById("preview_wrap").style.display = "none";
	document.getElementById("calendar_wrap").style.display = "block";
}

document.getElementById("tutorial_next6").onclick = function() {
	document.getElementById("tutorial_calendar").style.display = "none";
	document.getElementById("calendar_wrap2").style.zIndex = "1060";

	document.getElementById("calendar_wrap3").style.zIndex = "0";

}

document.getElementById("tutorial_next7").onclick = function() {
	document.getElementById("tutorial_confirm").style.display = "none";
	document.getElementById("confirm_content").style.zIndex = "1060";

}

/////////EXPERT LEVL FUNC///////
function exp_to_cal(){
	document.getElementById("result_wrap2").style.display = "none";
	document.getElementById("calendar_wrap").style.display = "block";
}

function load_hp_info_exp() {
	document.getElementById("result_wrap2").style.display = "none";
	document.getElementById("book_info_wrap").style.display = "block";
}

function ret_hp_exp(){
	document.getElementById("result_wrap2").style.display = "block";
	document.getElementById("book_info_wrap").style.display = "none";
}

function confrim_exp() {
	document.getElementById("confirm_btn_row").style.display = "none";
	document.getElementById("checkout_success").style.display = "block";
	
	setTimeout(function () {
			
			document.getElementById("confirm_wrap").style.display = "none";
			document.getElementById("result_wrap2").style.display = "block";
			
	}, 2000);
}

function home_exp() {
	document.getElementById("result_wrap2").style.display = "block";
	
	document.getElementById("confirm_wrap").style.display = "none";
	document.getElementById("book_info_wrap").style.display = "none";
	document.getElementById("calendar_wrap").style.display = "none";
	document.getElementById("preview_wrap").style.display = "none";
	document.getElementById("query_exp").style.display = "none";
}

function exp_query() {
	var search_query = document.getElementById('title_input').value;

	if(search_query==="harry potter"){

		document.getElementById("to_be_none").style.display="none";
		document.getElementById("to_be_none2").style.display="none";
	}
	

	else{
		document.getElementById("result_wrap2").style.display = "none";
		document.getElementById("confirm_wrap").style.display = "none";
		document.getElementById("book_info_wrap").style.display = "none";
		document.getElementById("calendar_wrap").style.display = "none";
		document.getElementById("preview_wrap").style.display = "none";
		
		document.getElementById("query_exp").style.display = "block";	
	}
	
}


function hp_search(){
	
}