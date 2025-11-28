import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const QuestionCard = ({
    question,
    currentQuestionIndex,
    totalQuestions,
    selectedOption,
    onOptionSelect,
    onNext,
    isAnswered
}) => {
    const progress = ((currentQuestionIndex) / totalQuestions) * 100;

    return (
        <div className="w-full max-w-2xl mx-auto p-4">
            {/* Progress Bar */}
            <div className="mb-6">
                <div className="flex justify-between text-white mb-2 text-sm font-medium">
                    <span>Question {currentQuestionIndex + 1}/{totalQuestions}</span>
                    <span>{Math.round(progress)}% Complete</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2.5 backdrop-blur-sm">
                    <div
                        className="bg-green-400 h-2.5 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
                    ></div>
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="p-8 md:p-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 leading-tight">
                        {question.question}
                    </h2>

                    <div className="space-y-4">
                        {question.options.map((option, index) => {
                            let buttonStyle = "border-2 border-gray-100 hover:border-indigo-200 hover:bg-indigo-50";
                            let icon = null;

                            if (isAnswered) {
                                if (option === question.answer) {
                                    buttonStyle = "border-green-500 bg-green-50 text-green-700";
                                    icon = <CheckCircle className="w-6 h-6 text-green-500" />;
                                } else if (option === selectedOption) {
                                    buttonStyle = "border-red-500 bg-red-50 text-red-700";
                                    icon = <XCircle className="w-6 h-6 text-red-500" />;
                                } else {
                                    buttonStyle = "border-gray-100 opacity-50";
                                }
                            } else if (selectedOption === option) {
                                buttonStyle = "border-indigo-500 bg-indigo-50";
                            }

                            return (
                                <button
                                    key={index}
                                    onClick={() => !isAnswered && onOptionSelect(option)}
                                    disabled={isAnswered}
                                    className={`w-full text-left p-6 rounded-xl transition-all duration-200 flex items-center justify-between group ${buttonStyle}`}
                                >
                                    <span className="text-lg font-medium">{option}</span>
                                    {icon}
                                </button>
                            );
                        })}
                    </div>

                    {isAnswered && (
                        <div className="mt-8 animate-fade-in-up">
                            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
                                <p className="text-blue-800 text-sm md:text-base">
                                    <span className="font-bold">Did you know?</span> {question.explanation}
                                </p>
                            </div>
                            <button
                                onClick={onNext}
                                className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
                            >
                                {currentQuestionIndex === totalQuestions - 1 ? 'Finish Quiz' : 'Next Question'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QuestionCard;
