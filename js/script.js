<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function () {
    console.log("UFC Pixel Casino Loaded");

    // Load profile data if available
    if (document.getElementById("profile-name")) {
        loadProfile();
    }

    // Setup Terms & Conditions agreement enforcement
    if (document.getElementById("agreeCheckbox")) {
        setupTermsAgreement();
    }

    // Highlight the active page in navigation
    highlightActivePage();
});

/**
 * Loads user profile information from localStorage
 */
function loadProfile() {
    const username = localStorage.getItem("username") || "Guest";
    const avatar = localStorage.getItem("avatar") || "default-avatar.png"; // Replace with actual default image
    let balance = localStorage.getItem("balance") || 1000; // Default balance if not set

    // Update profile details
    document.getElementById("profile-name").textContent = `Name: ${username}`;
    document.getElementById("profile-avatar").src = avatar;

    // Update balance if the element exists
    const balanceElement = document.getElementById("profile-balance");
    if (balanceElement) {
        balanceElement.textContent = `Balance: $${balance}`;
    }
}

/**
 * Sets up Terms & Conditions agreement enforcement
 */
function setupTermsAgreement() {
    document.getElementById("agreeCheckbox").addEventListener("change", function () {
        document.getElementById("proceedButton").disabled = !this.checked;
    });

    document.getElementById("proceedButton").addEventListener("click", function () {
        window.location.href = "Profile.html";
    });
}

/**
 * Highlights the active page in the navigation menu
 */
function highlightActivePage() {
    let path = window.location.pathname.split("/").pop();
    let navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === path) {
            link.classList.add("active");
        }
    });
}

/**
 * Allows users to select an avatar and store it
 */
let selectedAvatar = "";

function selectAvatar(element) {
    document.querySelectorAll(".avatar-options img").forEach(img => img.classList.remove("selected"));
    element.classList.add("selected");
    selectedAvatar = element.src;
}

/**
 * Creates a user profile and redirects to the homepage
 */
function createProfile() {
    const username = document.getElementById("username").value;
    if (username && selectedAvatar) {
        localStorage.setItem("username", username);
        localStorage.setItem("avatar", selectedAvatar);
        localStorage.setItem("balance", 1000); // Default starting balance
        window.location.href = "Homepage.html";
    } else {
        alert("Please enter a username and select an avatar.");
    }
}

/**
 * Places a bet, deducts from balance, and stores it
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

    if (bets.length === 0) {
        betList.innerHTML = "<p>No bets placed yet.</p>";
        return;
    }

    betList.innerHTML = "";
    bets.forEach(bet => {
        let div = document.createElement("div");
        div.innerHTML = `<p>Bet: $${bet.amount} on ${bet.fighter} (${bet.fight})</p>`;
        betList.appendChild(div);
    });
}

// Load bets on the betting page
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("bet-list")) {
        loadBets();
    }
});
=======
console.log("hello")
>>>>>>> 461db20e940428eb16376d3f39dde520a406acb4
