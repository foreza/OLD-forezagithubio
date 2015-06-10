
// Using this JS file to simulate SSI, since Github pages doesn't afford such luxury.


(function(){

	// Navigation bar info goes here.
	var nav = { nav1Link: "index"
		,nav2Link: "projects"
		,nav3Link: "about"
		,nav4Link: "process"
		,nav1Name:  ""
		,nav2Name:  "Projects"
		,nav3Name:  "About"
		,nav4Name:  "Process"
	};



  // Footer Info goes here.
  var foot = { footerText1:  "I'm a 3rd year student at the University of California, Irvine, and expect to graduate in 2016." 
  			, footerText2: "Tools for this site include Materialize, github for hosting, HTML/CSS/Javascript as languages, and Angular.js. © 2015 Design by Jason Chiu"
  			, footerText3: ""
  			, footerText4: ""
  			, name1: "Linkedin"
  			, name2: "Github"
  			, name3: "Blog"
  			, name4: "Facebook"
  			, link1: "https://www.linkedin.com/in/jasonthechiu"
  			, link2: "https://github.com/foreza"
  			, link3: "https://medium.com/@jasonchiu"
  			, link4: "https://www.facebook.com/dizzyKey"
  };



	// Using angular. All pages that wish to use it must include the "gem"
  var app = angular.module('gem', []);
  
  	app.controller('FooterController', function(){
    	this.data = foot;
    	this.nav = nav;
    	this.resumeLink = "resume.pdf";
  	});
  
	}
)();