(function(){
  var blood = { 
         pictureLink: ""
         ,controls: ""
         ,description: "TESTING BLOOD"
         ,playableLink: ""
         ,screenshot1: ""
         ,screenshot2: ""
         ,screenshot3: ""

};

var foodRun = { 
         pictureLink: ""
         ,controls: ""
         ,description: "TESTING FOODRUN"
         ,playableLink: ""
         ,screenshot1: ""
         ,screenshot2: ""
         ,screenshot3: ""

};




  var app = angular.module('gameGem', []);
  
// I plan to switch between data1 and data2 for different games.

  app.controller('GameController', function(){ 
    this.datablood = blood;// this is for project blood
     this.datafood = foodRun;// this is for project blood
  });




  
})();