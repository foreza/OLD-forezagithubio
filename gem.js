
// Using this JS file to simulate SSI, since Github pages doesn't afford such luxury.


(function(){

	// Navigation bar info goes here.
	var nav = { nav1Link: "index"
		,nav2Link: "projects"
		,nav3Link: "about"
		,nav4Link: "clubsOrgs"
		,nav1Name:  "Jason Chiu"
		,nav2Name:  "My Projects"
		,nav3Name:  "Work/Other"
		,nav4Name:  "Extracurriculars"
	};



  // Footer Info goes here.
  var foot = { footerText1:  "I'm a senior at the University of California, Irvine. Expected to graduate in 2016."
  			, footerText2: "Tools for this site include Materialize for the style, Github for hosting and the pages service, HTML/CSS/Javascript as languages, and Angular.js. © 2015 Design by Jason Chiu"
  			, footerText3: ""
  			, footerText4: ""
  			, name1: "Linkedin"
  			, name2: "Github"
  			, name3: "Blog"
  			, link1: "https://www.linkedin.com/in/jasonthechiu"
  			, link2: "https://github.com/foreza"
  			, link3: "https://medium.com/@jasonchiu"
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