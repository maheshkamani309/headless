import { React, useEffect, useState } from "react";
import LoadingSpinner from '../Components/Spinner'
import BlogBlock from "../Components/BlogBlock";

export default function Blogs() {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <>
            {isLoading ? <LoadingSpinner /> : ''}
            <section className="w-full secondry-background h-[7rem] ">
                <div className="container ml-auto h-full mr-auto items-center flex flex-row justify-evenly ">
                    <h1 className="title-font text-white">Blogs</h1>
                </div>
            </section>
            <section class="body-copy">
                <div class="container px-5 py-24 mx-auto">
                    <p class="pb-5">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
                    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <BlogBlock />
                        <BlogBlock />
                        <BlogBlock />
                        <BlogBlock />
                        <BlogBlock />
                        <BlogBlock />
                        <BlogBlock />
                        <BlogBlock />
                        <BlogBlock />
                        <BlogBlock />
                        <BlogBlock />
                    </div>
                </div>
            </section>
        </>
    )
}