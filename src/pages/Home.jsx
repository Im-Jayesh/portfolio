import Nav from "../components/Nav";
import ModelViewer from "../components/ModelViewer";
import { Link } from 'react-router-dom';
import PageLoader from "../components/PageLoader";
import { useState } from "react";

import { Instagram, Linkedin, Github } from 'lucide-react';
import MasonryGallery from "../components/MasonryGallery";
import TiltCard from "../components/TiltCard";
import SkillsStrip from "../components/SkillsStrip";

const modelUrl = '/model.glb';

const images = [
    'hack1.jpeg',
    'hack2.jpeg',
    'hack3.jpeg',
    'hack4.jpeg',
    'hack5.jpeg',
    'hack6.jpeg',
    'hack7.jpeg',
    'hack8.jpeg',
    'hack9.jpeg',
    'hack10.jpeg'
]

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

export default function Home() {

    const [loadingDone, setLoadingDone] = useState(false);

    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = "/resume.pdf"; // from public folder
        link.download = "jayesh_suthar_resume.pdf"; // download filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


  return (
    <>
    {!loadingDone && <PageLoader onFinish={() => setLoadingDone(true)} />}
    <Nav/>
    {/* Hero section */}
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="px-2 font-mono">Jai Shri Laxmi Narayan</h3>
        <div className="flex flex-col md:flex-row items-center justify-between">
            {/* left side */}
            <div className="py-16 md:py-28 w-full md:w-[50%] md:h-full">
                <h1 className="font-poppins font-bold text-5xl p-2">
                    Jayesh Suthar.
                </h1>
                <p className="font-mono font-normal text-lg p-2">
                    "I am a passionate final-year developer at Parul University, skilled in MERN stack, Flask, Python, and Java. I enjoy exploring Generative AI and software design patterns to build creative, maintainable, and impactful applications."
                </p>
                <button onClick={downloadResume} className="bg-gray-900 hover:bg-white hover:border-2 hover:border-black text-white hover:text-black rounded-md px-3 py-2 m-2 text-sm font-medium transition-all ease-out duration-300">Download Resume</button>
                <Link to={'/projects'}>
                  <button className="bg-gray-900 hover:bg-white hover:border-2 hover:border-black text-white hover:text-black rounded-md px-3 py-2 m-2 text-sm font-medium transition-all ease-out duration-300">Projects</button>
                </Link>
                <div className="flex space-x-4 text-gray-900 p-2">
                    <a href="https://www.linkedin.com/in/jayesh-suthar-07a1322b5/" aria-label="LinkedIn" className="hover:bg-gray-900 hover:text-white p-1 rounded-sm transition-all ease-out duration-300">
                        <Linkedin className="w-6 h-6 hover:text-white" />
                    </a>
                    <a href="https://github.com/Im-Jayesh/" aria-label="GitHub" className="hover:bg-gray-900 hover:text-white p-1 rounded-sm transition-all ease-out duration-300">
                        <Github className="w-6 h-6 hover:text-white" />
                    </a>
                    <a href="https://instagram.com/im__jayesh_" aria-label="Instagram" className="hover:bg-gray-900 hover:text-white p-1 rounded-sm transition-all ease-out duration-300">
                        <Instagram className="w-6 h-6 hover:text-white" />
                    </a>
                </div>
            </div>

            {/* Right Side */}
            <div className="pt-6 md:py-28 w-full md:w-[50%] h-[50vh] md:h-[65vh]">
                <ModelViewer modelName={'model-draco'}/>
            </div>
        </div>
    </section>

    {/* More about me. */}

    {/* <div className="border-black border-b-2 w-[100vw] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"/> */}
    <SkillsStrip className="py-6" />
    
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
            {/* Left Side */}
            <div className="py-10 px-6 m-4 w-full h-[50vh] md:w-[50%] md:h-screen overflow-auto overflow-y-scroll 
            [scrollbar-width:none] 
            [-ms-overflow-style:none] 
            [&::-webkit-scrollbar]:hidden">
                <div>
                    <MasonryGallery imageNames={images} />
                </div>
            </div>

            {/* Right Side */}
            <div className="py-16 md:py-24 px-6 w-full md:w-[50%]">
                <h1 className="font-poppins font-bold text-5xl p-2 text-right">
                    Experience.
                </h1>
                <p className="font-mono font-normal text-lg p-2 text-right">
                    "I am a Fresher. I don't have any real experience but I have participated in many hackathons and made many unique projects. Here are some of my pics for yall to see."
                </p>
                <ModelViewer modelName={'saturn-draco'} color={'#F6E0EB'}/>
            </div>

        </div>
    </section>

    <div className="border-black border-b-2 w-[100vw] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"/>

    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
            {/* Left Side */}
            <div className="py-16 md:py-24 px-6 w-full md:w-[40%]">
                <h1 className="font-poppins font-bold text-5xl p-2">
                    Projects.
                </h1>
                <p className="font-mono font-normal text-lg p-2">
                    "I love working on interesting yet unique projects."
                </p>
                <TiltCard className="p-4" />
            </div>

            {/* Right Side */}
            
            <div className="py-10 px-6 w-full h-[70vh] md:w-[60%] md:h-screen overflow-auto overflow-y-scroll 
            [scrollbar-width:none] 
            [-ms-overflow-style:none] 
            [&::-webkit-scrollbar]:hidden">
                <h3 className="p-2 font-poppins font-medium text-lg">Projects</h3>
                {projects?.map((project, index) => (
                    <a key={index} href={project.website ? project.website : project.github }>
                        <div className="relative flex flex-col justify-between border-2 border-black rounded-lg m-2 p-4 hover:bg-black hover:text-white transition-all ease-out duration-300">
                            <h2 className="font-poppins font-semibold">{project.name}</h2>
                            <p>{project.discription}</p>
                            <div className="flex flex-wrap gap-2 p-2 font-poppins">
                                {project.tack_stack?.map((tech, techIndex) => (
                                <span key={techIndex} className="bg-black text-white rounded-full px-2 border-white border hover:bg-white hover:text-black transition-all ease-out duration-300">{tech}</span>
                                ))} 
                            </div>
                            <span className="ml-auto text-3xl hover:text-4xl transition-all ease-out duration-300">→</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </section>

    <footer className="flex flex-wrap mx-auto px-4 py-4 sm:px-6 lg:px-8 bg-gray-900 h-full w-full">
        <div class="w-[207px]">
        <h3 class="font-poppins font-semibold text-2xl text-white p-4">
            Jayesh Suthar.
        </h3>
        <p class="font-poppins font-normal text-sm text-white p-4">If it works, don't touch it.</p>
    </div>
            <div>
                
                    <div className="flex space-x-4 p-4">
                    <a href="https://www.linkedin.com/in/jayesh-suthar-07a1322b5/" aria-label="LinkedIn" className="text-white hover:bg-white hover:text-black p-1 rounded-sm transition-all ease-out duration-300">
                        <Linkedin className="w-6 h-6 hover:text-black" />
                    </a>
                    <a href="https://github.com/Im-Jayesh/" aria-label="GitHub" className="text-white hover:bg-white hover:text-black p-1 rounded-sm transition-all ease-out duration-300">
                        <Github className="w-6 h-6 hover:text-black" />
                    </a>
                    <a href="https://instagram.com/im__jayesh_" aria-label="Instagram" className="text-white hover:bg-white hover:text-black p-1 rounded-sm transition-all ease-out duration-300">
                        <Instagram className="w-6 h-6 hover:text-black" />
                    </a>
                    </div>
                <ul className="p-4 text-white">
                    <li><Link to="/" className="p-2">Home</Link></li>
                    <li><Link to="/projects" className="p-2">Projects</Link></li>
                    <li><Link to="/contact" className="p-2">Constact me</Link></li>
                </ul>
            </div>

            <div >
                <ul className="p-4 text-white">
                    <li className="font-semibold">Credits and references</li>
                    <li className="">Sound Effect by <a href="https://pixabay.com/users/ronkoster2023-25675699/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=178392">RonKoster2023</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=178392">Pixabay</a></li>
                    <li className="">Self 3D model by <a href="https://poly.cam/">PolyCam</a></li>
                    <li className=""><a href="https://skfb.ly/o6rNw">Saturn 3D model</a></li>
                </ul>
            </div>
    </footer>
    </>
  );
}
