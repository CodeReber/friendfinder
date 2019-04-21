var friendData = require("../data/friends.js")

module.exports = function(app) {

app.get("/api/friends", function(req, res) {
    res.json(friendData);
  })

  app.post("/api/friends", function(req, res) {
 var userData = req.body;
 console.log(userData)
 friendData.push(userData);
//  res.json(bestfriend);newFriend



 //compare the current user submitted score with other users
 // add up current user score array
 // pull one of my previous users score arrays and add them together
 // subtract the two numbers to get a compared_score
 // if compated_score is less then current lowest friend
var diff;
var bestdiff = 100;
var bestfriend = {name:"",photo:""};
   for( var j = 0; j < friendData.length; j++){
      diff = 0;
      

        for (var i = 0; i < friendData[j].scores.length; i++){
      diff += Math.abs(parseInt(userData.scores[i]) - parseInt(friendData[j].scores[i]));
        }
      //  console.log(diff);
      //  console.log(bestdiff);
        if(diff < bestdiff ){
          bestfriend.name = friendData[j].name;
          bestfriend.photo = friendData[j].photo;
          bestdiff=diff;
          
        }
        
    }
    
   //push newfriend to the friend data array "this is you friends.js array" 
   //send best friend as json to the client
   //(on the client side so not on this file lol use the json to populate the popup)

    console.log(bestfriend);
  })
}
  




