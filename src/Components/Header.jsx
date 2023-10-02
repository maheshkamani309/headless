import { Link, NavLink } from "react-router-dom"
import { React, useState, useEffect } from "react"
export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [active, setActive] = useState('');

    const menus = [
        {
            name: 'Home',
            route: '/'
        },
        {
            name: 'About',
            route: '/about'
        },
        {
            name: 'Services',
            route: '/services'
        },
        {
            name: 'Blogs',
            route: '/blogs'
        },
        {
            name: 'Contact us',
            route: '/contact'
        },
    ]

    useEffect(() => {
        let active = '/' + window.location.pathname.split('/').at(-1);
        setActive(active)
    }, [window])

    return (
        <header className="sticky top-0 py-5 border-b-4 primary-background  secondry-border-color z-20">
            <div className="container mr-auto ml-auto flex flex-wrap flex-col sm:flex-row max-sm:flex-row items-center">
                <Link to="/" className="flexitems-center max-sm:w-9/12">
                    <img src='../public/logo-the-webcoder.png' className='w-9/12 max-md:w-9/12' />
                </Link>
                <nav className="md:ml-auto max-sm:w-2/12 rtl text-white font-500 flex flex-wrap items-center text-base justify-center nav-links">
                    <section className="flex xl:hidden">
                        <div className="space-y-2" onClick={() => setIsNavOpen((prev) => !prev)}>
                            <span className="block h-0.5 w-8 animate-pulse secondry-background "></span>
                            <span className="block h-0.5 w-5 animate-pulse secondry-background "></span>
                            <span className="block h-0.5 w-8 animate-pulse secondry-background "></span>
                        </div>
                        <div className={isNavOpen ? "show-menu-nav px-5 duration-150" : "duration-150 px-5 show-menu-nav hide-menu-nav"}>
                            <div className="min-h-[119px]  flex flex-col justify-center">
                                <div className="space-y-2 z-40" onClick={() => setIsNavOpen((prev) => !prev)}>
                                    <span className={isNavOpen ? 'duration-500 block h-0.5 w-8 secondry-background translate-y-2.5 rotate-45' : 'duration-500 block h-0.5 w-8 secondry-background'}></span>
                                    <span className={isNavOpen ? 'duration-500 block h-0.5 w-5 secondry-background opacity-0' : 'duration-500 block h-0.5 w-5 secondry-background'}> </span>
                                    <span className={isNavOpen ? 'duration-500 block h-0.5 w-8 secondry-background -translate-y-2.5 -rotate-45' : 'duration-500 block h-0.5 w-8 secondry-background'}></span>
                                </div>
                            </div>
                            <ul className="flex ml-0 flex-col justify-between min-h-[250px] list-none">
                                {
                                    menus.map((item) => <li key={`${item.route}-mobile`}>
                                        <NavLink activeclassname="active" to={item.route} className={`mr-5`}>{item.name}</NavLink>
                                    </li>)
                                }
                            </ul>
                        </div>
                    </section>
                    <ul className="hidden space-x-8 xl:flex list-none">
                        {
                            menus.map((item) => <li key={`${item.route}-web`}>
                                <NavLink to={item.route} className={`mr-5`}>{item.name}</NavLink>
                            </li>)
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}