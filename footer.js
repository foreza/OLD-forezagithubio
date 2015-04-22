(function(){
  // Footer
  var foot = { footerText1:  "I'm a 3rd year student at the University of California, Irvine, and expect to graduate in 2016." 
  			, footerText2: "Tools for this site include Materialize, github for hosting, HTML/CSS/Javascript as languages, and Angular.js. © 2015 Design by Jason Chiu"
  			, footerText3: ""
  			, footerText4: ""
  			, name1: "Linkedin"
  			, name2: "Github"
  			, name3: "Medium"
  			, name4: "Facebook"
  			, link1: "https://www.linkedin.com/in/jasonthechiu"
  			, link2: "https://github.com/foreza"
  			, link3: "https://medium.com/@jasonchiu"
  			, link4: "https://www.facebook.com/dizzyKey"


};

  var nav = { nav1Link: "index"
,nav2Link: "projects"
,nav3Link: "projectsOther"
,nav4Link: "clubsOrgs"
,nav1Name:  "Jason Chiu"
,nav2Name:  "Game Projects"
,nav3Name:  "Other Projects/Work"
,nav4Name:  "Clubs/Orgs"


  }
  var app = angular.module('footerGem', []);
  
  app.controller('FooterController', function(){
    this.data = foot;
    this.nav = nav;
    this.resumeLink = "resume.pdf";
  });
  
})();