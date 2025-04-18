import React from "react";
// import { motion } from "framer-motion";
// import { useNavigation } from "react-router-dom";
import Button from "../ui/Button";

function Home() {
    return(
        <div className="relative overflow-hidden py-[60px] md:py-[80px] bg-gradient-to-b from-orange-200 to-blue-20">
            <div className="container mx-auto px-[4px] relative z-10 ">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-center text-white text-[30px] md:text-[25px] font-bold mb-[6px] leading-normal">
                        IPL 2025 <span className="text-blue-400"> Live Score</span>
                    </h1>
                    <p className="text-xl text-gray-700 mb-8">
                    Track live scores, team standings, player stats, 
                    and more for the current Indian Premier League season.
                    </p>

                    <div className="flex flex-wrap justify-center gap-[4px] ">
                        <Button variant="primary" size="lg" >
                            Live Score
                        </Button>

                        <Button variant="outline" size="lg" >
                            Schedule
                        </Button>
                    </div>
                </div>
            </div>

            {/* Bat  */}
            <div className="absolute top-20 right-[10%] w-[16px] h-[16px] rounded-full bg-gray-600 hidden md:block" />
            <div className="absolute bottom-10 left-[5%] w-[8px] h-[64px] bg-gradient-to-b from-cyan-900 to-cyan-700 rounded-b-lg hidden md:block" />
        </div>
    );
};

export default Home;