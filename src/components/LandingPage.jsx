import React from 'react';
import { Globe, MapPin, Compass } from 'lucide-react';

const LandingPage = ({ onStart }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 flex items-center justify-center p-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 max-w-2xl w-full text-center shadow-2xl border border-white/20">
                <div className="flex justify-center mb-8 space-x-4">
                    <Globe className="w-12 h-12 text-blue-200 animate-pulse" />
                    <MapPin className="w-12 h-12 text-orange-300 animate-bounce delay-100" />
                    <Compass className="w-12 h-12 text-green-300 animate-spin-slow" />
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                    Countries & Cities
                </h1>

                <p className="text-xl md:text-2xl text-blue-100 mb-8 font-light">
                    Test your knowledge on the brightest cities in the world
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10 text-white/80">
                    <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        10 Questions
                    </span>
                    <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                        2 Minutes
                    </span>
                </div>

                <button
                    onClick={onStart}
                    className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-indigo-600 transition-all duration-200 bg-white font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-50 hover:scale-105 active:scale-95 shadow-lg"
                >
                    Start Quiz
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-red-500 rounded-full animate-ping"></div>
                </button>
            </div>
        </div>
    );
};

export default LandingPage;
