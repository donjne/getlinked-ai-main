import { Link } from "react-router-dom"

import Star from '../assets/star.svg'
import StarPu from '../assets/starpu.svg'

function Footer() {
  return (
    <footer className="relative md:px-24 px-8 py-6 font-montserrat">
            <img src={StarPu} alt="star" className='absolute bottom-2 right-[55%] md:bottom-[20%] md:right-[55%]  w-3 animate-pulse' />
            <img src={Star} alt="star" className='absolute md:top-[25%] md:right-[35%] top-[25%] left-2 w-3 animate-pulse' />
            <img src={Star} alt="star" className='absolute md:bottom-1/2 md:left-10 bottom-1/2 left-1/2 w-4 animate-pulse' />
            <img src={Star} alt="star" className='absolute md:bottom-12 md:right-[15%] bottom-36 right-[15%] w-3 animate-pulse' />

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
            <div className="flex flex-col justify-between">
                <div>
                    <h2 className="font-clash-display text-2xl font-extrabold text-secondary"><span className="text-white">get</span>linked</h2>
                    <p className="text-sm font-montserrat max-w-lg">
                        Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology
                    </p>
                </div>
                <div className="divide-x-2 divide-secondary flex items-center">
                    <Link to='privacy' className="mr-2 ">Terms of Use</Link>
                    <Link to='policy' className=" px-2">Pivacy Policy</Link>
                </div>
            </div>
            <div className="md:flex justify-between">
                {/* Links */}
                <div className="">
                    <h2 className="font-clash-display text-2xl font-extrabold text-secondary">Useful Links</h2>
                    
                    <div className="flex flex-col gap-2">
                        <Link to='overview' className=" ">Overview</Link>
                        <Link to='timeline' className=" ">Timeline</Link>
                        <Link to='faq' className=" ">FAQs</Link>
                        <Link to='register' className=" ">Register</Link>
                    </div>

                    <div className="flex items-center mt-2 space-x-2">
                        <h2 className="text-secondary text-sm font-bold">Follow us</h2>
                        <ion-icon name="logo-instagram"></ion-icon>
                        <ion-icon name="logo-twitter"></ion-icon>
                        <ion-icon name="logo-facebook"></ion-icon>
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </div>
                </div>
                {/* COntact  */}
                <div className="md:mt-0 mt-12">
                    <h2 className="font-clash-display text-2xl font-extrabold text-secondary lg:ml-6">Contact us</h2>
                    
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center space-x-3">
                            <ion-icon name="call-outline"></ion-icon>
                            <h1>+234 6707653444</h1>
                            
                        </div>
                        <div className="flex items-center space-x-3">
                            <ion-icon name="location-outline"></ion-icon>
                            <h2>27, Alara Street <br /> Yaba 100012 <br /> Lagos State</h2>
                        </div>

                    </div>

                </div>
            </div>
        </div>

        <div className="flex items-center justify-center mt-4 text-sm">
            All rights reserved. &#169; getlinked ltd.
        </div>
    </footer>
  )
}

export default Footer