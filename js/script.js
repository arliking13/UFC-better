/*

items


*/

class UserData {
    constructor(username, avatar_path, net_profit) {
        this.username = username;
        this.avatar_path = avatar_path;
        this.net_profit = net_profit;
    }
}

let user_data = null;

if (localStorage.getItem("user_data")) {
    user_data_json = JSON.parse(localStorage.getItem("user_data"));
    user_data = new UserData(user_data_json['username'], user_data_json['avatar_path'], user_data_json['net_profit']); 
}
else {
    user_data = new UserData(null, null, 0);
}

console.log(user_data);

window.addEventListener("beforeunload", function () {
    console.log("❌ Tab is closing. Saving data...");
    // save data to local storage
    localStorage.setItem("user_data", JSON.stringify(user_data));
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