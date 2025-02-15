const bets = [];

function placeBet(fight, amount) {
    if (!amount || isNaN(amount)) {
        alert("Invalid bet amount.");
        return;
    }
    bets.push({ fight, amount });
    alert(`Bet placed: $${amount} on ${fight}`);
    localStorage.setItem("bets", JSON.stringify(bets));
}

function loadBets() {
    const storedBets = localStorage.getItem("bets");
    if (storedBets) {
        console.log("Loaded bets:", JSON.parse(storedBets));
    }
}

document.addEventListener("DOMContentLoaded", loadBets);

