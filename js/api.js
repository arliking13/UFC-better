async function getFighterByName(fighterName) {
    const apiUrl = 'https://api.octagon-api.com/fighters';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const fighters = Object.values(data);
        const fighter = fighters.find(f =>
            f.name.toLowerCase() === fighterName.toLowerCase()
        );

        if (fighter) {
            console.log(`Fighter found: ${fighter.name}`);
            console.log(fighter);
            return fighter;
        } else {
            console.log(`Fighter named "${fighterName}" not found.`);
            return null;
        }
    } catch (error) {
        console.error('Error fetching fighter data: ', error);
        return null;
    }
}