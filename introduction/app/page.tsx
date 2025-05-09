

export default function Home() {
  return (
    <>
    <div>
      <nav className="flex justify-between p-4 bg-gray-100">
        <div className=" text-black font-bold text-xl">Introduction page</div>
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
      <h1 className="text-3xl font-bold mb-4">Welcome to the my page</h1>
      <p className="text-white bg-gray-800 p-4 rounded-lg">
        Hi I'm Thomas Tran. I am a data analyst with a passion for analysing data and web development. I love analysing data and use it to tell stories. In my free time, I enjoy learning new technologies and improving my skills.
      </p>
      </section>
      <section>
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <ul className="list-disc list-inside">
        <li className="mb-2">
          <strong>Master of Data Science</strong> - Charles Darwin University (2024 - Present)
        </li>
        <li className="mb-2">
          <strong>Bachelor of Computer Science</strong> - Monash University (2021 - 2024)
        </li>
        
      </ul>
      
      </section>
    </main>
    </>
  );
}
