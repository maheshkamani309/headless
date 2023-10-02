import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import LoadingSpinner from '../Components/Spinner'
import ServiceBlock from '../Components/ServiceBlock'
import parse from 'html-react-parser'

export default function Home() {
    const [page, setPage] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let pageLoaded = true;
        fetch('https://dev.the-webcoder.com/wp-json/wp/v2/pages/10')
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
            <section className="w-full hero-bg h-[30rem] ">
                <div className="container ml-auto mr-auto items-center flex flex-row max-lg:flex-wrap justify-evenly ">
                    <div className="w-6/12 max-lg:w-full h-full flex flex-col  justify-center z-10 ">
                        <div className="py-20 text-white body-copy">
                            <h1 className="title-font mb-8 text-white">Website design and Development</h1>
                            <p>Are you looking for Web or App Development ? Or want to hire an offshore developers team for your agency or startup?</p>
                            <Link to="/contact" className="inline-flex w-auto mt-5 text-white secondry-background py-2 px-8 focus:outline-none">Request a quote</Link>

                        </div>
                    </div>
                    <div className="w-6/12 max-lg:w-full h-full flex flex-col justify-center  z-10  align-center">
                    </div>
                </div>
            </section>

            <section className="w-full secondry-background">
                <div className="container ml-auto mr-auto items-center ">
                    <div className="py-20 text-white w-3/4 74 body-copy">
                        <h2 className="title-font mb-8 text-white">{page.title ? parse(page.title.rendered) : "The Web Coder"}</h2>
                        {page.content ? parse(page.content.rendered) : ""}
                    </div>
                </div>
            </section>
            <section className="body-font">
                <div className="container py-20 mx-auto flex flex-wrap">

                    <div className="body-copy mb-2">
                        <h2 className="title-font ">Services</h2>
                        <p>We provide the best in class services for out customers</p>
                    </div>

                    <div className="grid gap-x-8 gap-y-4 grid-cols-3">
                        <ServiceBlock/>
                        <ServiceBlock/>
                        <ServiceBlock/>
                    </div>
                </div>
            </section>
        </>
    )
}