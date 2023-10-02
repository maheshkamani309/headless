
import React from "react";

export default function ServiceDetailsBlock() {
    return (
        <div className="grid gap-x-8 gap-y-8 grid-cols-3 secondry-background">
            <div className="service p-4">
                <div className="flex rounded-lg p-8 flex-col ">
                    <div className="w-40 h-40 mb-4 inline-flex items-center justify-center rounded-full text-white bg-black mr-5 flex-shrink-0 service-hover:animate-bounce">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-40 h-40" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                    </div>
                    <div className="flex-grow text-white">
                        <h2 className=" mb-3">Shooting Stars</h2>
                    </div>
                </div>
            </div>
            <div className="service p-4 col-span-2">
                <div className="flex rounded-lg p-8 flex-wrap items-center">
                    <div className="flex-grow text-white">
                        <h3>What is Lorem Ipsum?</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}