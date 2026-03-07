import NavBar from "@/components/NavBar";
import Image from "next/image";

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
            <details className="mb-4">
                <summary className="cursor-pointer text-xl font-semibold">Department of Mining and Energy</summary>
                <p className="text-white bg-gray-800 p-4 rounded-lg mt-2">
                    In 2025, I was fortunate enough to be chosen for the 2025 Vacationer Program in the Northern Territory Government and later working part-time as a Project Officer while continuing my study at CDU. Here are the projects that I have done during my time working there.
                </p>
                <details className="inner">
                    <summary className="cursor-pointer text-xl font-semibold">PDF Extraction</summary>
                        <div className="text-white bg-gray-800 p-4 rounded-lg mt-2 flex flex-col items-center">
                        <p >
                        This project solves the problem of preliminary capturing of data from an standardised PDF Form that will then be manually input into an Excel sheet. My solution
                        was to develop a Excel Macro using VBA to first use Adobe Acrobat OCR Engine to scan the PDF, then use PowerQuery to extracts data from scanned tables and then finally populates
                        it onto the Excel sheet.
                        </p>
                        <Image
                        src="/pdf-form.png"
                        alt="PDF Form"
                        width={450}
                        height={200}
                        className="mt-4 flex-1 object-contain"
                        unoptimized
                        />
                        <figcaption>A page from the form that needs to be captured</figcaption>
                        </div>                        
                </details>
                <details className="inner">
                    <summary className="cursor-pointer text-xl font-semibold">PowerBI Dashboards</summary>
                    <div className="text-white bg-gray-800 p-4 rounded-lg mt-2 flex flex-col items-start text-left">
                            <div className="pl-2">
                                <p>
                                I created two working PowerBI Dashboards that helps NTGS to quickly query important infomation without having to submit information requests.
                                </p>
                                <li>
                                    Exploration and Mineral Expenditures in the NT during 2017 - 2025
                                </li>
                                <li>
                                    Geoscience Exploration and mining information system (GEMIS) Statistics
                                </li>
                            </div>
                        </div>     
                </details>
                <details className="inner">
                    <summary className="cursor-pointer text-xl font-semibold">Titles Adminstration System (TAS)</summary>
                    <div className="text-white bg-gray-800 p-4 rounded-lg mt-2 flex flex-col items-start text-left">
                            <div className="pl-2">
                                <p>
                                Helped maintaining and developing the new TAS software using Winforms(C#) and SQL. The tasks that I worked on are:
                                </p>
                                <li>
                                    Optimising legacy SQL queries
                                </li>
                                <li>
                                    Convert Oracle SQL to the new T-SQL used by SQL Server
                                </li>
                                <li>
                                    Improving logic and developing new functionalities as well as user interface enhancements
                                </li>
                                <li>
                                    Fixing bugs
                                </li>
                                <li>
                                    Requirements gathering and documentation
                                </li>
                                <li>
                                    Software testing
                                </li>
                            </div>
                        </div>     
                </details>
            </details>
        </main>
        </>
    );
}

