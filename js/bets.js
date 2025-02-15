/**
 * Places a bet and updates user balance
 */
function placeBet(fight, fighter) {
    let amount = prompt(`Enter your bet amount for ${fighter}:`);
    if (!amount || isNaN(amount) || amount <= 0) {
        alert("Invalid bet amount.");
        return;
    }

    let balance = parseInt(localStorage.getItem("balance")) || 1000;
    if (amount > balance) {
        alert("Insufficient balance!");
        return;
    }

    balance -= amount; // Deduct balance
    localStorage.setItem("balance", balance);

    let bets = JSON.parse(localStorage.getItem("bets")) || [];
    bets.push({ fight, fighter, amount });
    localStorage.setItem("bets", JSON.stringify(bets));

    alert(`Bet placed: $${amount} on ${fighter}`);

    // Update profile balance if on profile page
    const balanceElement = document.getElementById("profile-balance");
    if (balanceElement) {
        balanceElement.textContent = `Balance: $${balance}`;
    }
}

/**
 * Loads placed bets from local storage
 */
function loadBets() {
    let betList = document.getElementById("bet-list");
    let bets = JSON.parse(localStorage.getItem("bets")) || [];

}