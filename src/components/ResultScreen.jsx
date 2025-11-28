import React from 'react';
import { Share2, Plane } from 'lucide-react';

const ResultScreen = ({ score, totalQuestions, onRestart }) => {
    const percentage = (score / totalQuestions) * 100;

    let message = "";
    let subMessage = "";
    let emoji = "";

    if (score >= 9) {
        message = "Geography Master!";
        subMessage = "You know the world like the back of your hand!";
        emoji = "🌍";
    } else if (score >= 7) {
        message = "Travel Expert!";
        subMessage = "Impressive knowledge of global cities!";
        emoji = "✈️";
    } else if (score >= 5) {
        message = "World Explorer!";
        subMessage = "You're on your way to becoming a pro!";
        emoji = "🗺️";
    } else {
        message = "Adventure Awaits!";
        subMessage = "Time to pack your bags and explore more!";
        emoji = "🧭";
    }

    const handleShare = async () => {
        const shareData = {
            title: 'Countries & Cities Quiz',
            text: `I scored ${score}/${totalQuestions} on the Countries & Cities Quiz! Can you beat my score?`,
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(shareData.text + ' ' + shareData.url);
                alert('Result copied to clipboard!');
            }
        } catch (err) {
            console.error('Error sharing:', err);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center animate-fade-in-up">
                <div className="text-6xl mb-6 animate-bounce">{emoji}</div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    {message}
                </h2>
                <p className="text-gray-600 mb-8">{subMessage}</p>

                <div className="relative w-48 h-48 mx-auto mb-8">
                    <svg className="w-full h-full transform -rotate-90">
                        <circle
                            cx="96"
                            cy="96"
                            r="88"
                            stroke="#e5e7eb"
                            strokeWidth="12"
                            fill="none"
                        />
                        <circle
                            cx="96"
                            cy="96"
                            r="88"
                            stroke="#4f46e5"
                            strokeWidth="12"
                            fill="none"
                            strokeDasharray={2 * Math.PI * 88}
                            strokeDashoffset={2 * Math.PI * 88 * (1 - percentage / 100)}
                            className="transition-all duration-1000 ease-out"
                        />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <span className="text-5xl font-bold text-gray-800">{score}</span>
                        <span className="text-gray-400 text-xl font-medium">/{totalQuestions}</span>
                    </div>
                </div>

                <div className="space-y-4">
                    <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`I scored ${score}/${totalQuestions} on the Countries & Cities Quiz! Can you beat my score? 🌍✈️`)}&url=${encodeURIComponent('https://xcursionquiz2.vercel.app/')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-[#1DA1F2] text-white py-3 rounded-xl font-bold hover:bg-[#1a91da] transition-colors"
                    >
                        <Share2 className="w-5 h-5" />
                        Share Result on Twitter
                    </a>

                    <a
                        href="#"
                        onClick={(e) => e.preventDefault()} // Placeholder link
                        className="block w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white py-4 rounded-xl font-bold text-lg hover:from-orange-500 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 mt-6"
                    >
                        <div className="flex items-center justify-center gap-2">
                            <Plane className="w-6 h-6 animate-pulse" />
                            Book Your December Trip
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ResultScreen;
