async function getFighterByName(fighterName) {
    const apiUrl = 'https://api.octagon-api.com/fighters';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Convert the data object into an array of fighters
        const fighters = Object.values(data);

        // Search for the fighter by name (case-insensitive)
        const fighter = fighters.find(f =>
            f.name.toLowerCase() === fighterName.toLowerCase()
        );

        if (fighter) {
            console.log(`Fighter found: ${fighter.name}`);
            console.log(fighter);
            return fighter;
            // Process and display the fighter data as needed
        } else {
            console.log(`Fighter named "${fighterName}" not found.`);
            return null;
        }
    } catch (error) {
        console.error('Error fetching fighter data:', error);
        return null;
    }
}