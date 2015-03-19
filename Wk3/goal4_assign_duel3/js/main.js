
 /*
Sara Maneval
03/13/2015
ANALYZE Duel #2
 */

 //self-executing function- contains all of the content for the program
 (function(){

  //Make sure the HTML and js file are connected
 console.log("FIGHT!");


 /* Sparky Player One, Health, Damage*/
 var playerOne = ["Sparky", 100, 20];

 /* Fido Player Two, Healthy, Damage */
 var playerTwo = ["Fido", 100, 20];


  /* Keep track of different rounds the player is in */
 var round=0;

  /* The Fighting Function */

 function fight() {

  //Making sure it goes into the fight function
  console.log("In the fight function");

 //Alert user of the players names and health and that they are ready to start
  alert(playerOne[0] + ":" + playerOne[1] + " *START* " +playerTwo[0] + ":" + playerTwo[1]);

 /* Making sure there is only 10 rounds for the fight */
  for (var i = 0; i < 10; i++) {

   //random formula is - Math.floor(Math.random()*(max-min+min);

   var minDamage1 = playerOne[2] * .5;
   var minDamage2 = playerTwo[2] * .5;
   var f1 = Math.floor(Math.random() * (playerOne[2] - minDamage1) + minDamage1);
   var f2 = Math.floor(Math.random() * (playerTwo[2] - minDamage2) + minDamage2);


   //inflict damage by minusing the new random number to the players health
   playerOne[1] -= f1;
   playerTwo[1] -= f2;

   //Check and see what each of the players health is
   console.log(playerOne[0] + ":" + playerOne[1] + " " + playerTwo[0] + ":" + playerTwo[1]);

   //check for winner
   var result = winnerCheck();
   console.log(result);

   // if the result is no winner than go onto the next round
   if (result === "no winner") {
    round++;

    //alert the user what round they are on and where the players health is at
    alert(playerOne[0] + ":" + playerOne[1] + " *ROUND " + round +" OVER* " + playerTwo[0] + ":" + playerTwo[1]);

    //if there is a winner alert the user the results and end the game
   } else {
    alert(result);
    break;
   };
  };
 };

  function winnerCheck() {
   var result = "no winner";
   //if both players have a health less than 1 they both die
   if (playerOne[1] < 1 && playerTwo[1] < 1) {
    result = "You Both Die";

   //if player ones health is less than one player two wins
   } else if (playerOne[1] < 1) {
    result = playerTwo[0] + " WINS!!!"

    //if player twos health is less than one, player one wins
   } else if (playerTwo[1] < 1) {
    result = playerOne[0] + " WINS!!!"
   };

   //show results
   return result;
  };

  /* Fight Starts Below */

  fight();

})();