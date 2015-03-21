 /*
Sara Maneval
03/20/2015
ANALYZE Duel #2
 */

 //self-executing function- contains all of the content for the program
 (function(){



  /* The Fighting Function */



       //Make sure the HTML and js file are connected
 console.log("FIGHT!");


 /* Sparky Player One, Health, Damage*/
playerOne = {name:"Sparky", health:100, damage:20};

 /* Fido Player Two, Healthy, Damage */
playerTwo = {name:"Fido", health:100, damage:20};


  /* Keep track of different rounds the player is in */
 var round=0;
     
  //Making sure it goes into the fight function

     function fight() {
         console.log("In the fight function");

 /* Making sure there is only 10 rounds for the fight */
  for (var i = 0; i < 10; i++) {

   //random formula is - Math.floor(Math.random()*(max-min+min);

   var minDamage1 = playerOne["damage"] * .5;
   var minDamage2 = playerTwo["damage"] * .5;
   var f1 = Math.floor(Math.random() * (playerOne["damage"] - minDamage1) + minDamage1);
   var f2 = Math.floor(Math.random() * (playerTwo["damage"] - minDamage2) + minDamage2);


   //inflict damage by minusing the new random number to the players health
   playerOne["health"] -= f1;
   playerTwo["health"] -= f2;

   //Check and see what each of the players health is
   console.log(playerOne["name"] + ":" + playerOne["health"] + " " + playerTwo["damage"] + ":" + playerTwo["health"]);

   //check for winner
   var result = winnerCheck();
   console.log(result);

   // if the result is no winner than go onto the next round
   if (result === "no winner") {
    round++;


       
    document.getElementById("kabal").querySelector("p").innerHTML = playerOne["health"];
    document.getElementById("kratos").querySelector("p").innerHTML = playerTwo["health"];
       

    //if there is a winner alert the user the results and end the game
   } else {

    document.getElementById("kabal").querySelector("p").innerHTML = playerOne["health"];
    document.getElementById("kratos").querySelector("p").innerHTML = playerTwo["health"];
    break;
   };
  };
     document.querySelector(".buttonblue").removeEventListener("click", fight, false);
     
 };

  function winnerCheck() {
   var result = "no winner";
   //if both players have a health less than 1 they both die
   if (playerOne["health"] < 1 && playerTwo["health"] < 1) {
    result = "You Both Die";

   //if player ones health is less than one player two wins
   } else if (playerOne["health"] < 1) {
    result = playerTwo["name"] + " WINS!!!"

    //if player twos health is less than one, player one wins
   } else if (playerTwo["health"] < 1) {
    result = playerOne["name"] + " WINS!!!"
   };

   //show results
   return result;
  };

 document.querySelector(".buttonblue").addEventListener("click", fight, false);

})();