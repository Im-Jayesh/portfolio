import Nav from "../components/Nav";
// import TiltCard from "../components/TiltCard";

let projects = [
    {
        name : "PySpective - A python code visualizer.",
        discription : "A Python code visualizer that let's you step thourght program execution and visualize the data structures like Linked Lists, Trees, stacks, list, etc. It basically creates a dry run for the program.",
        tack_stack : ['React', 'python', 'Node'],
        github : 'https://github.com/Im-Jayesh/PySpective-python-visual-debugger',
        website: 'https://pyspective.netlify.app/',
        skills_earned : ['React', 'Recursion']
    },
    {
        name : "Clowder.",
        discription : "E-learning platform with intuitive course structure, AI generated quiz, interactive Compiler, interactive coding execises in between the lessons.",
        tack_stack : ['React', 'Node', 'MongoDB', 'Express', 'Gen AI'],
        github : 'https://github.com/Im-Jayesh/AI-SANDBOX',
        skills_earned : ['DB', 'Gen AI']
    },
    {
        name : "RottenBrain.reels.",
        discription : "AI learing content reels generator, generates educational reels based on user prompt, with ai voiceover, content, captions, etc.",
        tack_stack : ['Gen AI', 'cloud blob storage', 'google chirp', 'google gemini', 'React', 'Node', 'MongoDB', 'Express'],
        github : 'https://github.com/Im-Jayesh/rottenbrain.reels',
        skills_earned : ['Gen AI', 'AI agents']
    }
];

const Projects = () => {
    return (
        <>
            <Nav/>
                <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="py-10 px-10 m-4 w-full h-full overflow-auto md:w-full md:h-screen overflow-y-scroll 
                        [scrollbar-width:none] 
                        [-ms-overflow-style:none] 
                        [&::-webkit-scrollbar]:hidden">
                            <h3 className="p-2 font-poppins font-medium text-lg">Projects</h3>
                            {projects?.map((project, index) => (
                                <a href={project.website ? project.website : project.github }>
                                    <div key={index} className="relative flex flex-col justify-between border-2 border-black rounded-lg m-2 p-4 hover:bg-black hover:text-white translate-all easy-out duration-300">
                                        <h2 className="font-poppins font-semibold px-2">{project.name}</h2>
                                        <p className="px-2">{project.discription}</p>
                                        <h3 className="px-2">
                                            Links:
                                        </h3>
                                        <ul className="px-2">
                                            
                                           {project.github ? (
                                               <li>
                                                   <a href={project.github} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-400">GitHub</a>
                                               </li>
                                           ) : null }

                                           {project.website ? (
                                               <li>
                                                   <a href={project.website} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-400">Check It out here.</a>
                                               </li>
                                           ) : null }
                                                

                                        </ul>
                                        <div className="flex flex-wrap gap-2 p-2 font-poppins">
                                            Tech Stack:
                                            {project.tack_stack?.map((tech, techIndex) => (
                                            <span key={techIndex} className="bg-black text-white rounded-full px-2 border-white border hover:bg-white hover:text-black translate-all easy-out duration-300">{tech}</span>
                                            ))} 
                                        </div>
                                        <div className="flex flex-wrap gap-2 p-2 font-poppins">
                                            Skills Learned:
                                            {project.skills_earned?.map((tech, techIndex) => (
                                            <span key={techIndex} className="bg-black text-white rounded-full px-2 border-white border hover:bg-white hover:text-black translate-all easy-out duration-300">{tech}</span>
                                            ))} 
                                        </div>
                                        <span className="ml-auto text-3xl hover:text-4xl translate-all easy-out duration-300">→</span>
                                    </div>
                                </a>
                                ))}
            
            
                        </div>
                    </div>
                </section>
        </>
    );
}

export default Projects;