/*

items


*/

class UserData {
    constructor(username, avatar_path, net_profit) {
        this.username = username;
        this.avatar_path = avatar_path;
        this.net_profit = net_profit;
    }
    add(num) {
        this.net_profit += num;
    }
}

class Fight {
    constructor(fighter1, fighter2, winner, result, bet_amount, profit) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.winner = winner;
        this.result = result;
        this.bet_amount = bet_amount;
        this.profit = profit;
    }
}

let user_data = null;
let fights = [];

if (localStorage.getItem("user_data")) {
    user_data_json = JSON.parse(localStorage.getItem("user_data"));
    console.log(user_data_json);
    user_data = new UserData(user_data_json['username'], user_data_json['avatar_path'], parseFloat(user_data_json['net_profit'])); 
}
else {
    user_data = new UserData(null, null, 0);
}

if (localStorage.getItem("fights")) {
    let fights_json = JSON.parse(localStorage.getItem("fights"));
    console.log(fights_json);
    fights_json.forEach(f => {
        fights.push(new Fight(f['fighter1'], f['fighter2'], f['winner'], f['result'], f['bet_amount'], f['profit']))
    });
}


console.log(user_data);
console.log(fights);

window.addEventListener("beforeunload", function () {
    console.log("tab closing");
    // save data to local storage
    localStorage.setItem("user_data", JSON.stringify(user_data));
    localStorage.setItem("fights", JSON.stringify(fights));
});


/*
if (!localStorage.getItem("user_data_exists")) {
    let user_data = null;
}

function createUser(username, avatar_path, net_profit) {
    user_data = new UserData(username, avatar_path, net_profit);
}

// tab tracking
window.addEventListener("load", function () {
    let openTabs = Number(localStorage.getItem("openTabs")) || 0;

    // If no tabs were open before, this is the first tab
    if (openTabs === 0) {
        console.log("🚀 First tab opened!");
        localStorage.setItem("user_data_exists", true);

        if (localStorage.getItem("user_data") != null) {
            
            
        }
    }

    // Increase tab count
    localStorage.setItem("openTabs", openTabs + 1);
});

window.addEventListener("load", function () {
    let openTabs = Number(localStorage.getItem("openTabs")) || 0;
    localStorage.setItem("openTabs", openTabs + 1);
});

window.addEventListener("beforeunload", function () {
    let openTabs = Number(localStorage.getItem("openTabs")) || 1;
    localStorage.setItem("openTabs", Math.max(0, openTabs - 1));

    if (this.localStorage.getItem("openTabs") === 0) {
        // last tab stuff
    }
});
*/