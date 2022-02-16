var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0){
    
    //Alert players that they are starting the round
    //window.alert ("Welcome to Robot Gladiators");

    var promptfight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT' or 'SKIP' to choose");

        //If a player chooses to fight, then they shal fight
        if (promptfight === "skip" || promptfight === "SKIP") {
            //confirm the player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit");
        
            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip the fight");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney)
                break;
            }
        }
        //subtract the value of playerattack from the values of enemyhealth
        enemyHealth = enemyHealth - playerAttack;

        //log resulting message tot he console so we can know that it worked
        console.log(playerName + " attacked " + enemyName + ".  " + enemyName +" now has " + enemyHealth + " health remaining");

        //check enemies health
        if (enemyHealth <=0) {
            window.alert (enemyName + " has died!");
            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left");
        }

        //subtract value of enemyattack from the value of playerhealth
        playerHealth = playerHealth - enemyAttack;

        //log a resulting message tot he console so we know that it worked
        console.log(enemyName + " attacked " + playerName + ".  " + playerName + " now has " + playerHealth + " health remaining");

        //check players health
        if (playerHealth <=0) {
            window.alert (playerName + " has died!");
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left");
        }
    }
};

for(var i =0; i <enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth=50;
    fight(pickedEnemyName)
}