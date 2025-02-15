const apiUrl = "https://api.example.com/ufc/fights";

async function fetchFights() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log("Fights:", data);
    } catch (error) {
        console.error("Error fetching fights:", error);
    }
}

fetchFights();

