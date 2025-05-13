import NavBar from "@/components/NavBar";

export default function Projects() {
    return (
        <>
        <div>
            <NavBar />
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

