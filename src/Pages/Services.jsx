import { React, useEffect, useState } from "react";
import LoadingSpinner from '../Components/Spinner'
import ServiceBlock from "../Components/ServiceBlock";
import ServiceDetailsBlock from "../Components/ServiceDetailsBlock";
export default function Services() {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <>
            {isLoading ? <LoadingSpinner /> : ''}
            <section className="w-full secondry-background h-[7rem] ">
                <div className="container ml-auto h-full mr-auto items-center flex flex-row justify-evenly ">
                    <h1 className="title-font text-white">Service</h1>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto">
                    <div className="grid gap-x-8 gap-y-4 grid-cols-3">
                        <ServiceBlock />
                        <ServiceBlock />
                        <ServiceBlock />
                        <ServiceBlock />
                        <ServiceBlock />
                        <ServiceBlock />
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto">

                    <ServiceDetailsBlock />

                </div>
            </section>
        </>
    )
}