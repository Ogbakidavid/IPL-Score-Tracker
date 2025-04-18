import Home from "../components/Home";
import PlayerRankings from "../components/PlayerRanking";
import Stat from "../components/Stat";
import Footer from "../components/Footer";
import StadiumImage from "../assets/stadium.jpg";


function HomePage() {
    return(
        <div 
        className="min-h-screen bg-cover bg-center bg-fixed" 
        style={{ backgroundImage: `url(${StadiumImage})` }} 
        >
            <div className="min-h-screen bg-black/40">
                <div className="space-y-12">
                    <div className="bg-opacity-90">
                        <Home />
                    </div>

                    <div className="bg-opacity-90">
                        <PlayerRankings />
                    </div>

                    <div className="bg-opacity-90">
                        <Stat />
                    </div>

                    <div className="bg-opacity-90">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;