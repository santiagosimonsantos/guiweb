import { useState, useEffect } from "react"
import Head from "next/head"
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs"
import {
    AiFillTwitterCircle,
    AiFillGithub,
    AiFillInstagram,
} from "react-icons/ai"
import { Card } from "@componentsCard"
import { GuidaysList } from "@componentsGuidaysList"
import Link from "next/link"

export default function Home() {
    const [theme, setTheme] = useState(null)

    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }, [])

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <div>
            <Head>
                <title>GUI</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-white dark:bg-zinc-900 px-10">
                <section className="min-h-screen">
                    <nav className="py-10 flex text-center justify-between dark:bg-zinc-900 px-10">
                        <h1 className=" text-5xl font-jetbrains dark:text-white">
                            GUI
                        </h1>
                        <div className="flex items-center ">
                            <Link
                                href="/"
                                className=" dark:text-white p-4 text-zinc-900 text-lg font-semibold hover:underline"
                            >
                                GUIDAYS
                            </Link>
                            <Link
                                href="/guidays"
                                className=" dark:text-white p-4 text-zinc-900 text-lg font-semibold hover:underline"
                            >
                                VISTA
                            </Link>
                        </div>
                        <ul className="flex items-center">
                            <li>
                                <button
                                    className="dark:bg-white bg-zinc-900 rounded-md ml-8 px-4 py-2 dark:text-zinc-900 text-white transition-colors"
                                    onClick={toggleTheme}
                                >
                                    {theme === "dark" ? (
                                        <BsFillSunFill />
                                    ) : (
                                        <BsFillMoonStarsFill />
                                    )}
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <div className="relative grid justify-center gap-12 py-3 mx-auto pattern-">
                        {GuidaysList.map(
                            ({ theme, Icon, title, description, colors }) => (
                                <Card
                                    key={theme}
                                    title={title}
                                    description={description}
                                    icon={<Icon />}
                                    color={colors}
                                />
                            )
                        )}
                    </div>
                    <div className="sticky top-[100vh] text-5xl flex justify-center gap-16 py-6 text-gray-500 ">
                        <a href="https://twitter.com/GUI_UVa">
                            <AiFillTwitterCircle />
                        </a>
                        <a href="https://instagram.com/guiuva?igshid=YmMyMTA2M2Y=">
                            <AiFillInstagram />
                        </a>
                        <a href="https://github.com/GUI-UVa">
                            <AiFillGithub />
                        </a>
                    </div>
                </section>
            </main>
        </div>
    )
}
