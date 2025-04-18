import axios from "axios";

const API_URL = "https://cricket-live-line1.p.rapidapi.com";
const HEADERS = {
    'x-rapidapi-key': '8633250eeamsh02a4b8baa9954a3p12ee0djsn7f581094ab86',
    'x-rapidapi-host': 'cricket-live-line1.p.rapidapi.com'
};

export const getPlayerRankings = async() => {
    const options = {
        method: "GET",
        url: `${API_URL}/playerRanking/1`,
        headers: HEADERS,
    }

    try {
        const response = await axios.request(options);
        console.log("player rankings data", response.data);

        if (!response.data?.status || !response.data?.data) {
            throw new Error("Invalid player rankings data format");
        }

        return response.data.data.map(player => ({
            rank: player.rank,
            name: player.name,
            country: player.country,
            rating: player.rating,
            image: player.img,
            playerId: player.player_id
        }));
    } catch (error) {
        console.error("There was an error fetching player rankings data", error);
        throw error;
    }
}


