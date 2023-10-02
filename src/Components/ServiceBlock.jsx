
import React from "react";

export default function ServiceBlock() {
    return (
        <div className="service p-4 md:w-full hover:shadow-lg secondry-background">
            <div className="flex rounded-lg p-8 flex-wrap items-center">
                <div className="w-16 h-16 mb-4 inline-flex items-center justify-center rounded-full text-white bg-black mr-5 flex-shrink-0 service-hover:animate-bounce">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                </div>
                <div className="flex-grow text-white">
                    <h2 className=" mb-3">Shooting Stars</h2>
                </div>
            </div>
        </div>
    )
}