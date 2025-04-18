import React from "react";
import { Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

function Footer() {
    return(
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* IPL Score Tracker Section */}
            <div>
                <h3 className="text-xl font-bold mb-4">IPL Score Tracker</h3>
                <p className="text-gray-300">
                The ultimate destination for IPL cricket fans to stay updated with
                live scores, team standings, and match schedules.
                </p>
            </div>

            {/* Quick Links Section */}
            <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                <li>
                    <a href="/live-scores" className="text-gray-300 hover:text-white transition-colors">
                    Live Scores
                    </a>
                </li>
                <li>
                    <a href="/schedule" className="text-gray-300 hover:text-white transition-colors">
                    Schedule
                    </a>
                </li>
                <li>
                    <a href="/teams" className="text-gray-300 hover:text-white transition-colors">
                    Teams
                    </a>
                </li>
                <li>
                    <a href="/stats" className="text-gray-300 hover:text-white transition-colors">
                    Stats
                    </a>
                </li>
                <li>
                    <a href="/news" className="text-gray-300 hover:text-white transition-colors">
                    News
                    </a>
                </li>
                </ul>
            </div>

            {/* Connect With Us Section */}
            <div>
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <div className="flex space-x-4 mb-6">
                <a href="https://twitter.com/iplscoretracker" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors">
                    <Twitter size={20} />
                </a>
                <a href="https://facebook.com/iplscoretracker" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors">
                    <Facebook size={20} />
                </a>
                <a href="https://instagram.com/iplscoretracker" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors">
                    <Instagram size={20} />
                </a>
                <a href="https://youtube.com/iplscoretracker" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors">
                    <Youtube size={20} />
                </a>
                </div>
                <p className="text-gray-300">
                Download our mobile app for a better experience
                </p>
            </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
            © {new Date().getFullYear()} IPL Score Tracker. All rights reserved.
            </div>
        </div>
        </footer>
    );
}

export default Footer;