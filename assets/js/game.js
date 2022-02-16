var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0){
    
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

var endGame = function() {
    //player is still alive
    if (playerHealth > 0){
        window.alert("Great Job, you are not dead.  You still have" + playerMoney + ".");
    }
    else {
        window.alert("You died");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm){
        //restart game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators!  Play again soon");
    }
};

var shop = function(){
    //ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: REFILL, UPGRADE, or LEAVE"
    );

    //use switch to carry out action
    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
            if (playerMoney >=7){
            window.alert("Refilling player's health by 20 for 7 dollars.");

            //increaes health and decrease money
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money");
            }

            break;
        case "upgrade":
        case "UPGRADE":
            if (playerMoney >= 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars");

            //increaes attacl and decrease money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            }
            else{
                window.alert("You don't have enough money");
            }
            break;
        case "leave":
        case "LEAVE":
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option.  Try again");
        shop();
        break;    
    }
};

var startGame = function(){
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10

    for(var i =0; i <enemyNames.length; i++) {
        if (playerHealth > 0) {
            // Let player know what round they are in
                window.alert("Welcome to Robot Gladiators! Round " + (i+1));
        
            //pick new enemy to fight based on index of hte enemyNames array
            var pickedEnemyName = enemyNames[i];
        
            //reset enemy health to 50
            enemyHealth=50;
        
            // use debugger for debuggin
            //debugger;
        
            //pass the picked enemies name to the fight function
            fight(pickedEnemyName)
            
            // if we're not at the last enemy in the array
            if (playerHealth > 0 && i <enemyNames.length -1){
                
                //ask the player if the want to enter the shop
                var storeConfirm = window.confirm('The fight is over, visit the store before the next round?');

                //if yes, take them to the store function
                if (storeConfirm){
                shop();    
                }
            }
        // if player isn't alive, stop the game
        else {
            window.alert("You is dead :( Game Over!");
        break;
        }
    }

    //playagain
    endGame();
}

}

startGame();