import { useState, useEffect } from "react";
import { getPlayerRankings } from "../services/Api";
import LoadingSpinner from "../ui/Loader";

export default function PlayerRankings() {
    const [rankings, setRankings] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlayerRankings = async() => { 
            try { 
                const data = await getPlayerRankings();
                setRankings(data);
            } catch (error) {
                console.error("Error fetching player rankings:", error)
                setError("We are unable to load the rankings data");
            } finally {
                setLoading(false);
            }
        };
        fetchPlayerRankings();
    }, []);

    if (loading) {
        return( 
            <div className="flex items-center justify-center min-h-screen">
                <LoadingSpinner size="lg" />
            </div>
        );
    }

    if (error) {
        return(
            <div className="text-center text-red-500 p-4">{error}</div>
        );
    }

    return(
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-6">Player Rankings</h3>
            
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="bg-gray-400 border-b">
                            <th className="py-3 px-4 text-left">Rank</th>
                            <th className="py-3 px-4 text-left">Player</th>
                            <th className="py-3 px-4 text-left">Country</th>
                            <th className="py-3 px-4 text-right">Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rankings.map((player) => (
                            <tr key={player.playerId} className="border-b hover:bg-gray-50">
                                <td className="py-3 px-4">{player.rank}</td>
                                <td className="py-3 px-4">
                                    <div className="flex items-center">
                                        <img 
                                            src={player.image} 
                                            alt={player.name}
                                            className="h-10 w-10 rounded-full mr-3 object-cover"
                                            onError={(e) => {e.target.src = "https://via.placeholder.com/40"}}
                                        />
                                        <span>{player.name}</span>
                                    </div>
                                </td>
                                <td className="py-3 px-4">{player.country}</td>
                                <td className="py-3 px-4 text-right">{player.rating}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

