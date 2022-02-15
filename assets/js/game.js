var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    //Alert players that they are starting the round
    window.alert ("Welcome to Robot Gladiators");

    //subtract the value of playerattack from the values of enemyhealth
    enemyHealth = enemyHealth - playerAttack;

    //log resulting message tot he console so we can know that it worked
    console.log(playerName + " attacked " + enemyName + ".  " + enemyName +" now has " + enemyHealth + " health remaining");

    //check enemies health
    if (enemyHealth <=0) {
        window.alert (enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left");
    }

    //subtract value of enemyattack from the value of playerhealth
    playerHealth = playerHealth - enemyAttack;

    //log a resulting message tot he console so we know that it worked
    console.log(enemyName + " attacked " + playerName + ".  " + playerName + " now has " + playerHealth + " health remaining");

        //check enemies health
        if (playerHealth <=0) {
            window.alert (playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left");
        }
};

fight();