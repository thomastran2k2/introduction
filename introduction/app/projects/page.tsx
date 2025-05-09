export default function Projects() {
    return (
        <>
        <div>
            <nav className="flex justify-between p-4 bg-gray-100">
            <div className=" text-black font-bold text-xl">Projects page</div>
            <ul className="flex list-none gap-4 m-0 p-0">
                <li>
                <a href="/" className="bg-gray-300 rounded-full px-4 py-2 text-black cursor-pointer">Home</a>
                </li>
                <li>
                <a href="/projects" className="bg-gray-300 rounded-full px-4 py-2 text-black cursor-pointer">Projects</a>
                </li>
                <li>
                <a href="/contact" className="bg-gray-300 rounded-full px-4 py-2 text-black cursor-pointer">Contact</a>
                </li>  
            </ul>
            </nav>
        </div>
        <main className="p-4">
            <section className="mb-8">
            <h1 className="text-3xl font-bold mb-4">My Projects</h1>
            <p className="text-white bg-gray-800 p-4 rounded-lg">
                Here are some of the projects I have worked on:
            </p>
            </section>
            <details className="mb-4">
                <summary className="cursor-pointer text-xl font-semibold">Northern Territory Criminal Data Analysed</summary>
                <p className="text-white bg-gray-800 p-4 rounded-lg mt-2">
                    This project involved analysing the Northern Territory criminal data to identify trends and patterns in crime rates. The analysis was done using Python and SQL, and the results were visualised using Tableau.
                </p>
            </details>
        </main>
        </>
    );
}

