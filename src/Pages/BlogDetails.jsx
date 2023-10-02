import { React, useEffect, useState } from "react";
import LoadingSpinner from '../Components/Spinner'
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser'


export default function BlogDetails() {
    const [isLoading, setIsLoading] = useState(false);
    const [post, setPost] = useState({})
    const { slug } = useParams();

    useEffect(() => {
        let pageLoaded = true;
        fetch('https://dev.the-webcoder.com/wp-json/wp/v2/posts/' + slug)
            .then(response => response.json())
            .then(json => {
                setPost(json);
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
                    <h1 className="title-font text-white">{post.title?.rendered ? post.title.rendered : ''}</h1>
                </div>
            </section>
            <section className="body-copy">
                <div className="container px-5 py-24 mx-auto">
                    {post.content?.rendered ? parse(post.content.rendered) : ''}
                </div>
            </section>
        </>
    )
}