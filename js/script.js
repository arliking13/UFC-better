let user_data = null;

class UserData {
    constructor(username, avatar_path, net_profit) {
        this.username = username;
        this.avatar_path = avatar_path;
        this.net_profit = net_profit;
    }
}

function createUser(username, avatar_path, net_profit) {
    user_data = new UserData(username, avatar_path, net_profit);
}