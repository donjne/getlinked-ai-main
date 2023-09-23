
import { Link } from 'react-router-dom';
import { useRef,useEffect } from "react";
import Typed from "typed.js";

import { Bounce, Slide, Roll, JackInTheBox, Zoom } from 'react-awesome-reveal';


import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

import Vector from '../assets/vector.svg'
import Man from '../assets/man.png'
import Metrix from '../assets/metrix.png'
import Planet from '../assets/planet.png'
import Creative from '../assets/Creative.svg'
import Chain from '../assets/chain.svg'
import Flare from '../assets/flare.svg'
import Star from '../assets/star.svg'
import StarPu from '../assets/starpu.svg'
import Idea from '../assets/idea.png'
import Arrow from '../assets/arrow.svg'
import Rules from '../assets/rules.png'
import Criteria from '../assets/criteria.png'
import Question from '../assets/question.png'
import FAQ from '../assets/faq.png'
import Prize from '../assets/prize.png'
import GoldM from '../assets/gold_medal.png'
import Silver from '../assets/silver.svg'
import Bronze from '../assets/bronze.svg'
import Shield from '../assets/shield.png'
import ShieldMan from '../assets/shieldman.png'


import Liberty from '../assets/logo/liberty.png'
import LibertyPay from '../assets/logo/libertypay.png'
import Paybox from '../assets/logo/Paybox.png'
import Whishper from '../assets/logo/whisper.png'
import Winwise from '../assets/logo/winwise.png'
import Vizual from '../assets/logo/vizual.png'
import Timer from './Timer';

const Typewriter = () => {
  const typedElementRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: ["Igniting a Revolution in HR Innovation"], // An array of strings to type out
      typeSpeed: 50, // Typing speed in milliseconds
    };
    const typed = new Typed(typedElementRef.current, options);
    return () => {
      typed.destroy(); // Clean up Typed.js on component unmount
    };
  }, []);
  return <span ref={typedElementRef}></span>;
};


function Home() {

  return (
    <div className='overflow-hidden'>
        <Navbar />
        {/* Home  */}
        <section className="relative border-b border-gray-700 md:px-24 px-8">
            {/* Flare  */}
            <div className="absolute md:-top-12 top-1 md:left-36 md:w-96 md:h-96 w-24 h-24 bg-primary rounded-full blur-3xl opacity-30 "></div>
            <img src={Star} alt="star" className='absolute md:top-24 md:left-36 top-12 left-24 w-3 animate-pulse' />
            <img src={Star} alt="star" className='absolute md:top-24 md:left-[50%] top-12 right-10 w-2 animate-pulse' />
            <img src={Star} alt="star" className='absolute md:top-[70%] md:left-[35%] top-1/2 left-1/2 w-3 animate-pulse' />
            
            <div className="flex md:justify-end justify-center mt-4">
                    <h2 className="lg:text-3xl md:text-2xl w-auto md:relative font-semibold italic">
                            {/* Ignitting a Revolution in HR Innovation */}
                        <Typewriter />
                        <img 
                            src={Vector} 
                            alt="vector" 
                            className='absolute lg:w-40 w-24 md:left-48 left-64 lg:left-96 transform'
                        />
                    </h2>
            </div>  

            <div className='md:flex items-center mt-4'>

                <div className='lg:max-w-2xl md:mt-0 mt-12'>
                    <Slide
                        direction='left'
                        cascade
                        duration={2000}
                    >
                        <h2 className='lg:text-7xl md:text-2xl text-4xl md:text-left text-center font-extrabold font-clash-display relative'>
                                <span className='absolute lg:-top-14 lg:right-48 md:right-24 -top-6 right-16'><img src={Creative} alt="creative" className='lg:w-full w-6' /></span>
                                getlinked Tech Hackathon <span className='text-secondary'>1.0</span> 
                                <span className='flex absolute lg:bottom-3 bottom-3 lg:right-16 -right-5'><img src={Chain} alt="Chain" className='lg:w-14 w-6' /> <img src={Flare} alt="Flare" className='w-5 lg:w-12' /> </span>
                        </h2>
                    </Slide>
                    <Slide
                        direction='right'
                        cascade
                        duration={1000}
                    >
                        <p className='md:text-left text-center max-w-md mt-3'>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                    </Slide>
                    {/* Register  */}
                    <Bounce delay={500}>

                        <div className='mt-8 flex md:justify-start justify-center'>
                            <Link 
                                to='/register'
                                className='bg-gradient-to-r from-lgrad to-grad py-3 px-12 rounded-sm z-50'
                            >
                                Register
                            </Link>
                        </div>
                    </Bounce>
                    {/* Time  */}
                    <Timer day={27} m={"09"} year={2023} />
                </div>

                <div className='md:mt-0 mt-[88px]'>
                    {/* Flare  */}
                    <div className="absolute md:top-24 top-8 -z-1 md:right-36 right-64 md:w-96 w-64 md:h-96 h-64 bg-primary rounded-full blur-3xl opacity-20 "></div>
                    <Zoom className='absolute md:w-5/12 w-80' delay={500} duration={400}>
                        <img src={Planet} alt="planet" className='' />
                    </Zoom>
                    <img src={Man} alt="man" className='md:w-full' />
                    <img src={Metrix} alt="man" className='absolute -z-50 top-24 md:-right-0 w-96 h-96' />
                </div>
            </div>

        </section>

        {/* Introduction  */}
        <section className="border-b border-gray-700 md:px-24 px-8 relative">
            <img src={StarPu} alt="Pu" className='absolute md:top-64 md:left-36 w-3 animate-pulse' />
            <img src={StarPu} alt="star" className='absolute md:top-64 md:right-[10%] bottom-[47%] right-[10%] w-4 animate-pulse' />
            <img src={Arrow} alt="star" className='absolute md:bottom-20 md:right-[50%] bottom-[51%] right-[45%] w-12 animate-pulse' />

            <div 
                className='flex flex-wrap lg:justify-between justify-center items-center py-12 mt-4'
            >
                    <div className='lg:w-5/12'>
                        <Bounce delay={1000}>
                            <img 
                                src={Idea} 
                                alt="idea" 
                                className=''
                            />
                        </Bounce>
                    </div>

                <div className='flex flex-col lg:max-w-xl md:mt-2 mt-20' id='fade-in-section'>
                    <Slide
                        direction='down'
                    >
                        <div className='flex md:justify-start justify-center'>
                            <h2 
                                className='md:max-w-md font-clash-display font-semibold md:text-4xl text-3xl md:text-left text-center'
                            >
                                Introduction to getlinked <span className='text-secondary'>tech Hackthon 1.0</span>
                            </h2>
                        </div>
                    </Slide>
                    <Slide
                        direction='right'
                        duration={1000}
                    >
                        <p className='tracking-wide leading-1 mt-6'>
                            Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform  your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!
                        </p>
                    </Slide>
                </div>
            </div>
        </section>

        {/* Rules  */}
        <section className="border-b border-gray-700 md:px-24 px-8 relative">
            <div className="absolute md:top-36 md:left-36 top-24 right-24 w-96 h-96 bg-primary rounded-full blur-3xl opacity-20 "></div>
            <div className="absolute -bottom-24 -right-4 md:w-96 w-72 md:h-96 h-72 bg-primary rounded-full blur-3xl opacity-20 "></div>
            <img src={Star} alt="star" className='absolute md:top-[20%] md:left-[20%] w-3 animate-pulse' />
            <img src={Star} alt="star" className='absolute md:bottom-[20%] md:right-[50%] bottom-[47%] right-[10%] w-4 animate-pulse' />

            <div className='flex flex-wrap lg:justify-between justify-center items-center py-12 mt-4'>
                
                <div className='lg:w-6/12 md:w-5/12 lg:order-last'>
                    <JackInTheBox delay={500} duration={700}>
                        <img src={Rules} alt="idea"  />
                    </JackInTheBox>
                </div>

                <div className='flex flex-col max-w-xl md:mt-0 mt-12'>
                    <Slide
                        direction='down'
                    >
                        <div className='flex md:justify-start justify-center'>
                                <h2 className='md:max-w-sm md:w-full w-3/4 font-clash-display font-semibold md:text-5xl text-3xl md:text-left text-center'>Rules and <span className='text-secondary'>Guidelines</span></h2>
                        </div>
                    </Slide>
                    <Slide direction='left'>
                        <p className='tracking-wide leading-1 mt-6'>
                            Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform  your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!
                        </p>
                    </Slide>
                </div>
            </div>
        </section>

        {/* Criteria  */}
        <section className="border-b border-gray-700 md:px-24 px-8 relative">
            <div className="absolute md:top-72 md:left-36 top-16 left-24 md:w-96 md:h-96 w-72 h-72 bg-primary rounded-full blur-3xl opacity-30 "></div>
            <div className="absolute -bottom-48 -right-4 md:w-96 md:h-96 w-64 h-64 bg-primary rounded-full blur-3xl opacity-30 "></div>
            <img src={StarPu} alt="star" className='absolute md:top-[10%] md:left-[20%] w-4 animate-pulse' />
            <img src={Star} alt="star" className='absolute md:bottom-[20%] md:right-[50%] bottom-[47%] right-[10%] w-4 animate-pulse' />

            <div className='flex flex-wrap lg:justify-between justify-center items-center py-10 mt-2'>

                <div className='lg:w-6/12 md:w-5/12 '>
                    <Slide direction='left' duration={1000} delay={1000}>
                        <img src={Criteria} alt="idea" className='' />
                    </Slide>
                </div>

                <div className='flex flex-col lg:max-w-xl md:mt-0 mt-12'>
                    <Slide direction='down' delay={100}>
                        <div className='md:justify-start'>
                            <h2 className='md:max-w-md md:w-full font-clash-display font-semibold md:text-5xl text-3xl md:text-left text-center'>Judging Criteria <br /><span className='text-secondary'>Key attributes</span></h2>
                        </div>
                    </Slide>
                    <div className='flex flex-col gap-4 mt-4 font-montserrat'>
                        <Slide direction='right' delay={100}>
                            <h2 className='text-md leading-1 text-key font-medium'>Innovation and Creativity: <span className='text-white'>Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</span></h2>
                        </Slide>
                        <Slide direction='left' delay={200}>
                            <h2 className='text-md leading-1 text-key font-medium'>Functionality: <span className='text-white'>Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.</span></h2>
                        </Slide>
                        <Slide direction='right' delay={300}>
                            <h2 className='text-md leading-1 text-key font-medium'>Impact and Relevance:  <span className='text-white'>Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.</span></h2>
                        </Slide>
                        <Slide direction='left' delay={400}>
                            <h2 className='text-md leading-1 text-key font-medium'>Technical Complexity: <span className='text-white'>Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.</span></h2>
                        </Slide>
                        <Slide direction='right' delay={500}>
                            <h2 className='text-md leading-1 text-key font-medium'>Adherence to Hackathon Rules: <span className='text-white'>Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.</span></h2>
                        </Slide>
                    </div>
                    <div className='flex md:justify-start justify-center'>
                        <button className='bg-gradient-to-r from-lgrad to-grad py-2 px-8 w-48 rounded-sm mt-12'>Read More</button>
                    </div>
                </div>
            </div>
        </section>

        {/* faq  */}
        <section className="border-b border-gray-700 md:px-24 px-8 relative">
            <img src={StarPu} alt="star" className='absolute md:top-[10%] md:left-[10%] w-4 animate-pulse' />
            <img src={Star} alt="star" className='absolute md:bottom-[20%] md:right-[50%] bottom-[47%] right-[10%] w-4 animate-pulse' />
            <img src={Star} alt="star" className='absolute md:bottom-[10%] md:right-[10%] bottom-[47%] right-[10%] w-4 animate-pulse' />
            <img src={StarPu} alt="star" className='absolute md:top-[20%] md:right-[33%] w-4 animate-pulse' />
            <img src={StarPu} alt="star" className='absolute md:top-[40%] md:right-[40%] w-4 animate-pulse' />

            <div className='flex flex-wrap lg:justify-between justify-center items-center py-10 mt-2'>

                <div className='flex flex-col lg:justify-between justify-center max-w-xl md:mt-24 mt-12'>
                    <Slide direction='down'>
                        <div className='flex md:justify-start justify-center'>
                            <h2 className='md:max-w-md md:w-full w-3/4 font-clash-display font-semibold md:text-5xl text-3xl md:text-left text-center'>Frequently Asked <span className='text-secondary'>Questions</span></h2>
                        </div>
                    </Slide>
                    <Slide duration={400} direction='left'>
                        <p className='mt-4 max-w-md'>We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>
                    </Slide>

                    <div className="grid divide-y divide-secondary mt-8">
                            <Slide direction='left' delay={100}>
                                <div className="py-5">
                                    <details className="flex group">
                                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none h-10 w-full">
                                            <span className="w-4/5"> Can I work on a project I started before the hackathon?</span>
                                            <span className="transition group-open:rotate-180">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" /></svg>
                                            </span>
                                        </summary>
                                        <p className="text-white mt-3 group-open:animate-fadeIn">
                                            Can I work on a project I started before the hackathon?
                                        </p>
                                    </details>
                                </div>
                            </Slide>
                            <Slide direction='left' delay={200}>
                                <div className="py-5">
                                    <details className="flex group">
                                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none h-10 w-full">
                                            <span className="w-4/5">What happens if I need help during the hackathon?</span>
                                            <span className="transition group-open:rotate-180">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" /></svg>
                                            </span>
                                        </summary>
                                        <p className="text-white mt-3 group-open:animate-fadeIn">
                                            What happens if I need help during the hackathon?
                                        </p>
                                    </details>
                                </div>
                            </Slide>
                            <Slide direction='left' delay={300}>
                                <div className="py-5">
                                    <details className="flex group">
                                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none h-10 w-full">
                                            <span className="w-4/5">Can I join a team or do I have to come with one?</span>
                                            <span className="transition group-open:rotate-180">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" /></svg>
                                            </span>
                                        </summary>
                                        <p className="text-white mt-3 group-open:animate-fadeIn">
                                            Can I join a team or do I have to come with one?
                                        </p>
                                    </details>
                                </div>
                            </Slide>
                            <Slide direction='left' delay={400}>
                                <div className="py-5">
                                    <details className="flex group">
                                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none h-10 w-full">
                                            <span className="w-4/5">What happens after the hackathon ends</span>
                                            <span className="transition group-open:rotate-180">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" /></svg>
                                            </span>
                                        </summary>
                                        <p className="text-white mt-3 group-open:animate-fadeIn">
                                            What happens after the hackathon ends
                                        </p>
                                    </details>
                                </div>
                            </Slide>
                            <Slide direction='left' delay={500}>
                                <div className="py-5">
                                    <details className="flex group">
                                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none h-10 w-full">
                                            <span className="w-4/5">What happens if I don't have an idea for a project?</span>
                                            <span className="transition group-open:rotate-180">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" /></svg>
                                            </span>
                                        </summary>
                                        <p className="text-white mt-3 group-open:animate-fadeIn">
                                            What happens if I don't have an idea for a project?
                                        </p>
                                    </details>
                                </div>
                            </Slide>
                            <Slide direction='left' delay={600}>
                                <div className="py-5">
                                    <details className="flex group">
                                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none h-10 w-full">
                                            <span className="w-4/5">Can I work on a project I started before the hackathon?</span>
                                            <span className="transition group-open:rotate-180">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" /></svg>
                                            </span>
                                        </summary>
                                        <p className="text-white mt-3 group-open:animate-fadeIn">
                                            Can I work on a project I started before the hackathon?
                                        </p>
                                    </details>
                                </div>
                            </Slide>
                    </div>
                </div>

                <div className='flex relative justify-center mt-12'>
                    <div className='lg:mt-0 mt-3 flex items-center gap-6 justify-center absolute md:-top-20 -top-10 md:right-[50%] right-[45%]'>
                        <Roll delay={1500}>
                            <img src={Question} alt="question" className='md:w-8 w-6' />
                        </Roll>
                        <Roll delay={1500}>
                            <img src={Question} alt="question" className='md:w-16 w-8' />
                        </Roll>
                        <Roll delay={1500}>
                            <img src={Question} alt="question" className='md:w-8 w-6' />
                        </Roll>
                    </div>
                    <div className='lg:w-6/12 md:w-5/12 '>
                        <JackInTheBox delay={1000}>
                            <img src={FAQ} alt="idea" className='' />
                        </JackInTheBox>
                    </div>
                </div>
            </div>
        </section>

        {/* timeline  */}
        <section className='border-b border-gray-700 md:px-24 px-8 relative'>

            <img src={StarPu} alt="star" className='absolute md:top-[10%] md:left-[10%] w-4 animate-pulse' />
            <img src={Star} alt="star" className='absolute md:bottom-[10%] md:left-[20%] bottom-[47%] right-[10%] w-4 animate-pulse' />

            <div className='flex flex-col items-center justify-center py-12'>
                <Slide direction='down'>
                    <h2 className='font-clash-display font-bold text-2xl'>Timeline</h2>
                    <p className='text-center max-w-md text-sm'>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
                </Slide>
            </div>

            <div className=''>
                <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
                    {/* 1*/}
                    <div className="flex flex-row-reverse md:contents">
                        <div className=" col-start-1 col-end-5 p-4 my-4 ml-auto ">
                            <Slide delay={200}>
                                <h3 className="font-semibold md:text-lg mb-1 text-secondary">Hackathon Announcement</h3>
                                <p className="leading-tight text-justify font-montserrat text-sm">
                                    The getlinked texh hackathon 1.0 formally announced to the general public and teams begin to get ready to register
                                </p>
                                <h3 className="mt-2 md:hidden font-semibold text-md mb-1 text-secondary">September 18, 2023</h3>
                            </Slide>
                        </div>
                        {/* stepper  */}
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10  ">
                            <div className="h-full w-8 flex items-center justify-center">
                                <div className="h-full w-1 bg-secondary pointer-events-none"></div>
                            </div>
                            <div className="w-8 h-8 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-r from-lgrad to-grad shadow flex items-center justify-center font-bold border-4 border-main">1</div>
                        </div>
                        {/* right  */}
                        <div className="col-start-6 col-end-10 p-4 my-4 mr-auto md:flex items-center justify-center hidden">
                            <Slide direction='right'>
                                <h3 className=" font-semibold text-lg mb-1 text-secondary">September 18, 2023</h3>
                            </Slide>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="flex md:contents">
                        {/* left */}
                        <div className="col-start-1 col-end-5 p-4 my-4 ml-auto md:flex items-center justify-center hidden">
                            <Slide direction='left' delay={300}>
                                <h3 className=" font-semibold text-lg mb-1 text-secondary">September 18, 2023</h3>
                            </Slide>
                        </div>
                        {/* stepper  */}
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div className="h-full w-8 flex items-center justify-center">
                                <div className="h-full w-1 bg-secondary pointer-events-none"></div>
                            </div>
                            <div className="w-8 h-8 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-r from-lgrad to-grad shadow flex items-center justify-center font-bold border-4 border-main">2</div>
                        </div>
                        {/* right */}
                        <div className=" col-start-6 col-end-10 p-4 my-4 mr-auto shadow-md">
                            <Slide direction='right'>
                                <h3 className="font-semibold md:text-lg mb-1 text-secondary">Team Registation begins</h3>
                                <p className="leading-tight text-justify text-sm font-montserrat">
                                    Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register
                                </p>
                                <h3 className="mt-2 md:hidden font-semibold text-md mb-1 text-secondary">September 18, 2023</h3>
                            </Slide>
                        </div>
                    </div>

                    {/* 3*/}
                    <div className="flex flex-row-reverse md:contents">
                        <div className=" col-start-1 col-end-5 p-4 my-4 ml-auto ">
                            <Slide delay={200}>
                                <h3 className="font-semibold md:text-lg mb-1 text-secondary">Team Registration ends</h3>
                                <p className="leading-tight text-justify font-montserrat text-sm md:w-screen">
                                    Interested participants are no longer allowed to register
                                </p>
                                <h3 className="mt-2 md:hidden font-semibold text-md mb-1 text-secondary">September 18, 2023</h3>
                            </Slide>
                        </div>
                        {/* stepper  */}
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10  ">
                            <div className="h-full w-8 flex items-center justify-center">
                                <div className="h-full w-1 bg-secondary pointer-events-none"></div>
                            </div>
                            <div className="w-8 h-8 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-r from-lgrad to-grad shadow flex items-center justify-center font-bold border-4 border-main">3</div>
                        </div>
                        {/* right  */}
                        <div className="col-start-6 col-end-10 p-4 my-4 mr-auto md:flex items-center justify-center hidden">
                            <Slide direction='right'>
                                <h3 className=" font-semibold text-lg mb-1 text-secondary">September 18, 2023</h3>
                            </Slide>
                        </div>
                    </div>

                    {/* 4 */}
                    <div className="flex md:contents">
                        {/* left */}
                        <div className="col-start-1 col-end-5 p-4 my-4 ml-auto hidden md:flex items-center justify-center">
                            <Slide direction='left' delay={500}>
                                <h3 className=" font-semibold text-lg mb-1 text-secondary">September 18, 2023</h3>
                            </Slide>
                        </div>
                        {/* stepper  */}
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div className="h-full w-8 flex items-center justify-center">
                                <div className="h-full w-1 bg-secondary pointer-events-none"></div>
                            </div>
                            <div className="w-8 h-8 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-r from-lgrad to-grad shadow flex items-center justify-center font-bold border-4 border-main">4</div>
                        </div>
                        {/* right */}
                        <div className=" col-start-6 col-end-10 p-4 my-4 mr-auto shadow-md">
                            <Slide direction='right'>
                                <h3 className="font-semibold md:text-lg mb-1 text-secondary">Announcement of the accepted teams and ideas</h3>
                                <p className="leading-tight text-justify text-sm font-montserrat">
                                    All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced
                                </p>
                                <h3 className="mt-2 md:hidden font-semibold text-md mb-1 text-secondary">September 18, 2023</h3>
                            </Slide>
                        </div>
                    </div>

                    {/* 5*/}
                    <div className="flex flex-row-reverse md:contents">
                        <div className=" col-start-1 col-end-5 p-4 my-4 ml-auto">
                            <Slide direction='left' delay={600}>
                                <h3 className="font-semibold md:text-lg mb-1 text-secondary">Getlinked Hackathon 1.0 Officially Begins</h3>
                                <p className="leading-tight text-justify text-sm font-montserrat">
                                    Accepted teams can now proceed to build their ground breaking skill driven solutions
                                </p>
                                <h3 className="mt-2 md:hidden font-semibold text-md mb-1 text-secondary">September 18, 2023</h3>
                            </Slide>
                        </div>
                        {/* stepper  */}
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10  ">
                            <div className="h-full w-8 flex items-center justify-center">
                                <div className="h-full w-1 bg-secondary pointer-events-none"></div>
                            </div>
                            <div className="w-8 h-8 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-r from-lgrad to-grad shadow flex items-center justify-center font-bold border-4 border-main">5</div>
                        </div>
                        {/* right  */}
                        <div className="col-start-6 col-end-10 p-4 my-4 mr-auto hidden md:flex items-center justify-center">
                            <Slide direction='right'>
                                <h3 className=" font-semibold text-lg mb-1 text-secondary">September 18, 2023</h3>
                            </Slide>
                        </div>
                    </div>

                    {/* 6 */}
                    <div className="flex md:contents">
                        {/* left */}
                        <div className="col-start-1 col-end-5 p-4 my-4 ml-auto md:flex items-center justify-center hidden">
                            <Slide direction='left' delay={700}>
                                <h3 className=" font-semibold text-lg mb-1 text-secondary">September 18, 2023</h3>
                            </Slide>
                        </div>
                        {/* stepper  */}
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div className="h-20 w-8 flex items-center justify-center">
                                <div className="h-full w-1 bg-secondary pointer-events-none"></div>
                            </div>
                            <div className="w-8 h-8 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-r from-lgrad to-grad shadow flex items-center justify-center font-bold border-4 border-main">6</div>
                        </div>
                        {/* right */}
                        <div className=" col-start-6 col-end-10 p-4 my-4 mr-auto shadow-md">
                            <Slide direction='right'>
                                <h3 className="font-semibold md:text-lg mb-1 text-secondary">Demo Day</h3>
                                <p className="leading-tight text-justify text-sm font-montserrat">
                                    Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced this day
                                </p>
                                <h3 className="mt-2 md:hidden font-semibold text-md mb-1 text-secondary">September 18, 2023</h3>
                            </Slide>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* prize  */}
        <section className='border-b border-gray-700 md:px-24 px-8 relative'>
            <div className="absolute md:top-56 md:left-48 top-36 left-24 md:w-96 md:h-96 w-72 h-72 bg-primary rounded-full blur-3xl opacity-30 "></div>
            <div className="absolute md:-bottom-48 md:-right-4 -bottom-16 -right-16 md:w-96 md:h-96 w-56 h-56 bg-primary rounded-full blur-3xl opacity-30 "></div>
            <img src={StarPu} alt="star" className='absolute md:top-[10%] md:left-[10%] w-4 animate-pulse' />
            <img src={Star} alt="star" className='absolute md:bottom-[20%] md:right-[50%] bottom-[47%] right-[10%] w-4 animate-pulse' />
            <img src={Star} alt="star" className='absolute md:bottom-[10%] md:right-[10%] bottom-[47%] right-[10%] w-4 animate-pulse' />
            <img src={StarPu} alt="star" className='absolute md:top-[20%] md:right-[33%] w-4 animate-pulse' />
            <img src={StarPu} alt="star" className='absolute md:top-[40%] md:right-[40%] w-4 animate-pulse' />

            <Slide direction='right' duration={1000}>
                <div className='flex md:justify-center lg:justify-end mt-12'>
                    <h2 className='md:max-w-md md:w-full w-3/4 font-clash-display font-bold md:text-5xl text-3xl md:text-left text-center'>Prizes and <span className='text-secondary'>Rewards</span></h2>
                </div>
            </Slide>
            <Slide direction='right' duration={1000}>
                <div className='flex md:justify-center lg:justify-end lg:mr-12 mt-12'>
                    <p>Highlights of the prizes or rewards for winners and <br />for participants</p>
                </div>
            </Slide>

            <div className='flex lg:justify-between justify-center items-center py-10 mt-2'>


                <div className='lg:w-6/12 md:w-5/12'>
                    <Bounce delay={100} duration={300}>
                        <img src={Prize} alt="idea" className='lg:w-full' />
                    </Bounce>
                </div>

                <div className='flex md:gap-4 gap-2 items-center justify-center lg:mt-6 md:mt-24 mt-12 w-full font-montserrat'>
                    
                    <div className='w-36 h-56 rounded-md border border-secondary bg-secondary backdrop-blur-lg bg-clip-padding backdrop-filter bg-opacity-5 flex flex-col items-center justify-center relative'>
                        <img src={Silver} alt="second" className='absolute md:-top-16 -top-8' />
                        <h2 className='font-bold md:text-4xl text-center tracking-wide mt-14'>2nd</h2>
                        <h2 className='text-sm'>Runner</h2>
                        <h2 className='md:text-2xl font-bold text-secondary'>N300,000</h2>
                    </div>

                    <Slide delay={100} direction='down'>
                        <div className='w-32 h-60 rounded-md border border-primary bg-primary backdrop-blur-lg bg-clip-padding backdrop-filter bg-opacity-5 flex flex-col items-center justify-center relative'>
                            <img src={GoldM} alt="second" className='absolute w-56 md:-top-16 -top-8' />
                            <h2 className='font-bold md:text-4xl text-center tracking-wide mt-14'>1st</h2>
                            <h2 className='text-sm'>Runner</h2>
                            <h2 className='md:text-2xl font-bold text-primary'>N400,000</h2>
                        </div>
                    </Slide>

                    <div className='w-36 h-56 rounded-md border border-secondary bg-secondary backdrop-blur-lg bg-clip-padding backdrop-filter bg-opacity-5 flex flex-col items-center justify-center relative'>
                        <img src={Bronze} alt="second" className='absolute md:-top-16 -top-8' />
                        <h2 className='font-bold md:text-4xl text-center tracking-wide mt-14'>3rd</h2>
                        <h2 className='text-sm'>Runner</h2>
                        <h2 className='md:text-2xl font-bold text-secondary'>N200,000</h2>
                    </div>
                    
                </div>
                
            </div>
        </section>

        {/* Partners  */}
        <section className='border-b border-gray-700 md:px-24 px-8 relative py-12'>
            <div className="absolute md:top-16 md:left-24 top-0 -left-16 md:w-96 md:h-96 w-64 h-64 bg-primary rounded-full blur-3xl opacity-30 "></div>
            <div className="absolute -bottom-48 -right-4 md:w-96 md:h-96 w-64 h-64 bg-primary rounded-full blur-3xl opacity-30 "></div>
            <img src={Star} alt="star" className='absolute md:bottom-[10%] md:right-[10%] bottom-[47%] right-[10%] w-4 animate-pulse' />
            <img src={StarPu} alt="star" className='absolute md:top-[20%] md:right-[33%] w-4 animate-pulse' />
            <img src={StarPu} alt="star" className='absolute md:top-[40%] md:right-[40%] w-4 animate-pulse' />

            <div className='flex flex-col items-center justify-center py-4'>
                <Slide direction='down'>
                    <h2 className='font-clash-display font-bold text-2xl pb-6'>Partners and Sponsors</h2>
                </Slide>
                <Slide direction='right'>
                    <p className='text-center max-w-md text-sm'>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
                </Slide>
            </div>

            <div className='flex justify-center items-center rounded-md border border-secondary w-full md:h-full mt-12 relative'>
                <div className="grid grid-cols-3 py-28">
                    <>
                    {/* 1 */}
                    <div className="relative">
                        <div className="flex items-center justify-center px-8 h-full">
                            <img src={Liberty} alt="Liberty" className="w-36 h-auto" />
                        </div>
                        {/* <!-- Right Border --> */}
                        <div className="absolute inset-y-0 right-0 w-2 border-r-2 border-secondary"></div>
                        {/* <!-- Bottom Border --> */}
                        <div className="absolute inset-x-2 -bottom-4 h-2 border-b-2 border-secondary"></div>
                    </div>

                    {/* 2 */}
                    <div className="relative ">
                        <div className="flex justify-center items-center px-8 h-full">
                            <img src={LibertyPay} alt="Liberty" className="md:w-36 h-auto" />
                        </div>
                        {/* <!-- Right Border --> */}
                        <div className="absolute inset-y-0 right-0 w-2 border-r-2 border-secondary"></div>
                        {/* <!-- Bottom Border --> */}
                        <div className="absolute inset-x-2 -bottom-4 h-2 border-b-2 border-secondary"></div>
                    </div>

                    {/* 3 */}
                    <div className="relative ">
                        <div className="flex justify-center items-center px-8 h-full">
                            <img src={Winwise} alt="Liberty" className="w-36 h-auto" />
                        </div>
                        {/* <!-- Right Border --> */}
                        {/* <div className="absolute inset-y-0 right-0 w-2 border-r-2 border-secondary"></div> */}
                        {/* <!-- Bottom Border --> */}
                        <div className="absolute inset-x-2 -bottom-4 h-2 border-b-2 border-secondary"></div>
                    </div>

                    {/* 4 */}
                    <div className="relative mt-8">
                        <div className="flex items-center justify-center px-8 h-full">
                            <img src={Whishper} alt="Liberty" className="w-36 h-auto" />
                        </div>
                        {/* <!-- Right Border --> */}
                        <div className="absolute inset-y-0 right-0 w-2 border-r-2 border-secondary"></div>
                        {/* <!-- Bottom Border --> */}
                        {/* <div className="absolute inset-x-2 -bottom-4 h-2 border-b-2 border-secondary"></div> */}
                    </div>

                    {/* 5 */}
                    <div className="relative mt-8">
                        <div className="flex justify-center items-center px-8 h-full">
                            <img src={Paybox} alt="Liberty" className="w-36 h-auto" />
                        </div>
                        {/* <!-- Right Border --> */}
                        <div className="absolute inset-y-0 right-0 w-2 border-r-2 border-secondary"></div>
                        {/* <!-- Bottom Border --> */}
                        {/* <div className="absolute inset-x-2 -bottom-4 h-2 border-b-2 border-secondary"></div> */}
                    </div>

                    {/* 6 */}
                    <div className="relative mt-8">
                        <div className="flex justify-center items-center px-8 h-full">
                            <img src={Vizual} alt="Liberty" className="w-36 h-auto" />
                        </div>
                        {/* <!-- Right Border --> */}
                        {/* <div className="absolute inset-y-0 right-0 w-2 border-r-2 border-secondary"></div> */}
                        {/* <!-- Bottom Border --> */}
                        {/* <div className="absolute inset-x-2 -bottom-4 h-2 border-b-2 border-secondary"></div> */}
                    </div>
                    </>

                </div>
            </div>
        </section>

        {/* privacy  */}
        <section className='border-b border-gray-700 md:px-24 px-8 relative md:py-16'>

            <img src={StarPu} alt="star" className='absolute md:bottom-1/2 md:left-12 w-4 animate-pulse' />
            <div className="absolute md:-bottom-24 bottom-1/2 md:-left-24 -left-24 md:w-96 md:h-96 w-64 h-64 bg-primary rounded-full blur-3xl opacity-30 "></div>
            <img src={Star} alt="star" className='absolute  bottom-[47%] right-[10%] w-4 animate-pulse' />
            <img src={Star} alt="star" className='absolute  top-[20%] right-[30%] w-3 animate-pulse' />
            <img src={StarPu} alt="star" className='absolute bottom-[20%] right-[33%]  w-4 animate-pulse' />
            <img src={StarPu} alt="star" className='absolute  bottom-[15%] right-[50%] w-3 animate-pulse' />
            <img src={StarPu} alt="star" className='absolute bottom-[32%] right-[45%]  w-3 animate-pulse' />
            <img src={StarPu} alt="star" className='absolute top-[20%] right-[60%] w-4 animate-pulse' />

            <div className="flex flex-wrap lg:justify-between justify-center py-10 mt-2">
                
                <div className='lg:w-7/12'>
                    <div className='flex flex-col'>
                        <Slide>
                            <div className='flex lg:justify-start justify-center md:mt-0 '>
                                <h2 className='md:max-w-sm md:w-64 w-3/4 font-clash-display font-bold text-3xl md:text-start text-center'>Privacy Policy and <span className='text-secondary'>Terms</span></h2>
                            </div>
                        </Slide>
                        <Slide delay={100}>
                            <h2 className='mt-4 font-montserrat text-xs'>Last updated on September 12, 2023</h2>
                        </Slide>
                        <Slide delay={250}>
                            <p className='md:text-start md:max-w-md text-sm mt-4'>Below are our privacy & policy, which outline a lot of goodies. It's our aim to always take of our participant</p>
                        </Slide>
                    </div>
                    
                    <div className='mt-4 lg:w-9/12  md:p-12 p-8 rounded border border-secondary bg-secondary backdrop-blur-lg bg-clip-padding backdrop-filter bg-opacity-5 shadow-lg'>
                        <p className='text-sm'>
                            At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy
                        </p>
                        <h2 className='text-secondary mt-4 font-extrabold'>Licensing Policy</h2>
                        <h2 className='mt-3 font-extrabold'>Here are terms of our Standard License:</h2>
                        <div className='flex flex-col py-4'>
                            <div className="flex items-center justify-between space-x-6 ">
                                <Slide delay={300}>
                                    <div className="flex items-center">
                                        <div className="rounded-full w-6 h-6 bg-green-500 outline-none flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide>
                                    <h2 className="text-sm ">The Standard License grants you a non-exclusive right to navigate and register for our event</h2>
                                </Slide>
                            </div>
                            <div className="flex items-center justify-between space-x-6 mt-4">
                                <Slide delay={300}>
                                <div className="flex items-center">
                                    <div className=" rounded-full w-6 h-6 bg-green-500 outline-none flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                </div>
                                </Slide>
                                <Slide>
                                    <h2 className='text-sm'>You are licensed to use the item available at any free source sites, for your project developement</h2>
                                </Slide>
                            </div>
                        </div>
                        <div className='flex justify-center items-center mt-3'>
                            <button className='bg-gradient-to-r from-lgrad to-grad py-2 px-6'>Read More</button>
                        </div>
                    </div>
                </div>
                {/* image */}
                <div className='relative md:mt-0 mt-12 lg:py-0 py-8'>
                    <img src={Shield} alt="shield" className='lg:w-full' />
                    <div className='lg:w-9/12 md:w-9/12 w-64 absolute lg:bottom-2 lg:left-0 bottom-0 top-36 left-8'>
                        <Zoom direction='right' delay={500}>
                            <img src={ShieldMan} alt="shield" className='w-full' />
                        </Zoom>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
      
    </div>
  )
}

export default Home