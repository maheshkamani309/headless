import { React, useEffect, useState } from "react";
import parse from 'html-react-parser'
import LoadingSpinner from '../Components/Spinner'

export default function About() {
    const [page, setPage] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://dev.the-webcoder.com/wp-json/wp/v2/pages/14')
            .then(response => response.json())
            .then(json => {
                setPage(json);
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });
    }, [])
    return (
        <>
            {isLoading ? <LoadingSpinner /> : ''}
            <section className="w-full secondry-background h-[7rem] ">
                <div className="container ml-auto h-full mr-auto items-center flex flex-row justify-evenly ">
                    <h1 className="title-font text-white">{page.title ? parse(page.title.rendered) : "About Us"}</h1>
                </div>
            </section>
            <section className="w-full">
                <div className="container ml-auto mr-auto items-center flex flex-row justify-evenly ">
                    <div className="body-copy my-20">
                        {page.content ? parse(page.content.rendered) : ""}
                    </div>
                </div>
            </section>

        </>
    )
}