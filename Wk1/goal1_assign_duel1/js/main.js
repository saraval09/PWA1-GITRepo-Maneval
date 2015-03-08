
 /*
Sara Maneval
03/07/2015
ANALYZE Duel #1
 */

 //self-executing function- contains all of the content for the program
 (function(){

  //Make sure the HTML and js file are connected
 console.log("FIGHT!");


 /* Sparky Player One */
 var playerOne = "Sparky";
 var playerOneHealth = 100;
 var playerOneDamage = 20;

 /* Fido Player Two */
 var playerTwo = "Fido";
 var playerTwoHealth = 100;
 var playerTwoDamage = 20;

  /* Keep track of different rounds the player is in */
 var round=0;

  /* The Fighting Function */

 function fight() {

  //Making sure it goes into the fight function
  console.log("In the fight function");

 //Alert user of the players names and health and that they are ready to start
  alert(playerOne + ":" + playerOneHealth + " *START* " + playerTwo + ":" + playerTwoHealth);

 /* Making sure there is only 10 rounds for the fight */
  for (var i = 0; i < 10; i++) {

   //random formula is - Math.floor(Math.random()*(max-min+min);

   var minDamage1 = playerOneDamage * .5;
   var minDamage2 = playerTwoDamage * .5;
   var f1 = Math.floor(Math.random() * (playerOneDamage - minDamage1) + minDamage1);
   var f2 = Math.floor(Math.random() * (playerTwoDamage - minDamage2) + minDamage2);


   //inflict damage by minusing the new random number to the players health
   playerOneHealth -= f1;
   playerTwoHealth -= f2;

   //Check and see what each of the players health is
   console.log(playerOne + ":" + playerOneHealth + " " + playerTwo + ":" + playerTwoHealth);

   //check for winner
   var result = winnerCheck();
   console.log(result);

   // if the result is no winner than go onto the next round
   if (result === "no winner") {
    round++;

    //alert the user what round they are on and where the players health is at
    alert(playerOne + ":" + playerOneHealth + " *ROUND " + round +" OVER* " + playerTwo + ":" + playerTwoHealth);

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
   if (playerOneHealth < 1 && playerTwoHealth < 1) {
    result = "You Both Die";

   //if player ones health is less than one player two wins
   } else if (playerOneHealth < 1) {
    result = playerTwo + " WINS!!!"

    //if player twos health is less than one, player one wins
   } else if (playerTwoHealth < 1) {
    result = playerOne + " WINS!!!"
   };

   //show results
   return result;
  };

  /* Fight Starts Below */

  fight();

})();