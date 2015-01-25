(function(){
  var foot = { footerText1:  "I'm a 3rd year student at the University of California, Irvine, and expect to graduate in 2016." 
  			, footerText2: "I've worked on numerous game projects. I currently serve as Vice President of the Video Game Development Club (VGDC) at UCI."
  			, footerText3: "I've picked up web development through participating in hackathons and app jams; and made this website to showcase my work."
  			, footerText4: "My tools used include Materialize (check below!), github for hosting, HTML/CSS/Javascript as languages, Firebase for stats-tracking/client-side development, and Angular.js."
  			, name1: "Linkedin"
  			, name2: "Github"
  			, name3: "Medium"
  			, name4: "Facebook"
  			, link1: "https://www.linkedin.com/in/jasonthechiu"
  			, link2: "https://github.com/foreza"
  			, link3: "https://medium.com/@jasonchiu"
  			, link4: "https://www.facebook.com/dizzyKey"


};
  var app = angular.module('footerGem', []);
  
  app.controller('FooterController', function(){
    this.data = foot;
  });
  
})();