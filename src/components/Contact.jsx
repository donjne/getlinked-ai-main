import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from 'axios'

import toast, { Toaster } from 'react-hot-toast'

import { Fade, Slide } from 'react-awesome-reveal';

import ContactModal from '../modal/ContactModal'

import Star from '../assets/star.svg'
import StarPu from '../assets/starpu.svg'
import Navbar from '../layouts/Navbar'

function Contact() {

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768); 

    const [modal, setModal] = useState(false)
    const handleModalClose = () => setModal(false)

    useEffect(() => {
        function handleResize() {
        setIsDesktop(window.innerWidth >= 768); // Adjust the breakpoint as needed
        }

        window.addEventListener("resize", handleResize);
        return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, []);

    const [formErrors, setFormErrors] = useState({
        email: '',
        phone_number: ''
    })

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\d{1,13}$/;

    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        email: '',
        phone_number: '',
        first_name: '',
        message: '',
    })

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleBlur = (e) => {
        // setFormData({
        //     ...formData,
        //     [e.target.name]: e.target.value
        // })
        const {name, value} = e.target

        // validate email and number 
        if(name === 'email') {
            if(!emailRegex.test(value)) {
                setFormErrors({
                    ...formErrors,
                    email: 'Invalid Email address'
                })
            } else {
                setFormErrors({
                    ...formErrors,
                    email: ''
                })
            }
        } else if(name === 'phone_number') {
            if(!phoneRegex.test(value)) {
                setFormErrors({
                    ...formErrors,
                    phone_number: 'Invalid phone number (max 13 digits)'
                })
            } else {
                setFormErrors({
                    ...formErrors,
                    phone_number: ''
                })
            }
        }

        // set value 
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('https://backend.getlinked.ai/hackathon/contact-form', formData)

            setLoading(true)
            
            if(response && response?.status === 201) {

                setLoading(false)
                setModal(true)

                toast.success('Form submitted')

                setFormData({
                    email: '',
                    phone_number: '',
                    first_name: '',
                    message: '',
                })
            } else {
                console.log('something is not right')
            }
        } catch (error) {
            console.log(error?.response?.data)
            toast.error('Something is not right!!!')
        }

        
    }

  return (
    <div className='overflow-hidden h-screen'>
        {/* <div className='h-screen'> */}
            <Toaster />
            {isDesktop ? (
                <Navbar /> 
            ) : (
                <nav className='py-6 md:px-24 px-8 flex justify-start'>
                    <Link to='/' className='md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-lgrad to-secondary'>
                        <div className='w-7 h-7 rounded-full flex items-center justify-center bg-main'>
                            <ion-icon name="chevron-back-outline"></ion-icon>
                        </div>
                    </Link>
                </nav>
            )}

            <div className='lg:px-24 px-8 flex items-center relative'>
                <div className="absolute md:top-36 md:left-36 top-24 right-24 w-48 h-48 bg-primary rounded-full blur-3xl opacity-20 "></div>
                <div className="absolute md:-bottom-24 md:-right-4 md:w-96 w-48 md:h-96 h-48 bg-primary rounded-full blur-3xl opacity-20 "></div>
                <img src={Star} alt="star" className='absolute md:top-[20%] md:left-[20%] w-3 animate-pulse' />
                <img src={Star} alt="star" className='absolute md:bottom-[20%] md:right-[50%] top-[47%] right-[5%] w-4 animate-pulse' />
                <img src={StarPu} alt="star" className='absolute md:bottom-[20%] md:right-[10%] top-[10%] right-[10%] w-4 animate-pulse' />

                <div className='lg:flex lg:justify-between lg:items-center lg:py-12 py-2 w-full h-full lg:mt-0 '>
                    <Slide>

                        <div className='hidden lg:flex flex-col max-w-xl md:mt-0 mt-12 gap-4'>
                            <div className='md:flex md:justify-start justify-center hidden'>
                                <h2 className='md:max-w-sm md:w-full w-3/4 font-semibold md:text-5xl text-3xl md:text-left text-center text-secondary font-clash-display'>Get in Touch</h2>
                            </div>
                            <h2 className=' w-32 font-semibold font-montserrat'>
                                Contact Information
                            </h2>
                            <h2 className=' w-32 font-semibold font-montserrat'>
                                27,Alara Street
                                Yaba 100012
                                Lagos State
                            </h2>
                            <h2 className=' max-w-md font-semibold font-montserrat'>
                                Call Us : 07067981819
                            </h2>
                            <h2 className=' max-w-xs font-semibold font-montserrat'>
                                we are open from Monday-Friday 08:00am - 05:00pm
                            </h2>
                            <div className='flex-col '>
                                <h2 className="text-secondary text-sm font-bold">Follow us</h2>
                                <div className='flex items-center space-x-2 mt-2'>
                                    <ion-icon name="logo-instagram"></ion-icon>
                                    <ion-icon name="logo-twitter"></ion-icon>
                                    <ion-icon name="logo-facebook"></ion-icon>
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </div>
                            </div>
                        </div>
                    </Slide>

                    <div className='hidden lg:hidden md:flex flex-wrap mt-12 mb-12'>
                        <h2 className='w-full font-semibold text-5xl text-center text-secondary font-clash-display'>Get in Touch</h2>
                        <div className="flex items-center gap-12 justify-center w-full mt-2">
                            <div>
                                <h2 className='text-grad font-semibold font-montserrat'>
                                    Contact Information
                                </h2>
                                <h2 className=' font-semibold font-montserrat'>
                                    27,Alara Street
                                    Yaba 100012
                                    Lagos State
                                </h2>
                            </div>
                            <h2 className=' font-semibold font-montserrat'>
                                Call Us : 07067981819
                            </h2>
                            <h2 className=' max-w-xs font-semibold font-montserrat'>
                                we are open from Monday-Friday 08:00am - 05:00pm
                            </h2>
                        </div>
                    </div>

                    <div className='lg:w-6/12'>
                        <div className='md:p-12 p-4 lg:w-3/4 md:rounded-md md:shadow-md md:shadow-black md:bg-white md:backdrop-blur md:bg-clip-padding md:backdrop-filter md:bg-opacity-5'>
                            <h2 className='font-clash-display text-secondary md:w-64 w-full md:text-lg text-xl font-bold '>Question or need assistance? Let us know about it!</h2>
                            <h3 className='block md:hidden md:mb-12 mb-6'>Email us below to any question related to our event</h3>
                            <div className='flex-col md:mt-6'>
                                <form onSubmit={handleFormSubmit}>
                                    <div className='flex flex-wrap md:gap-6 gap-4'>
                                        <div className="relative w-full">
                                            {/* <label 
                                                className={formData.first_name ? "absolute -top-5 transition-all duration-300 block tracking-wide text-white text-xs font-bold md:mb-2" : "hidden"}
                                                htmlFor="first_name"
                                            >
                                                First Name
                                            </label> */}
                                            <Fade duration={2000} >
                                                <input 
                                                    type="text" 
                                                    name="first_name"
                                                    value={formData.first_name}
                                                    onChange={handleInputChange}
                                                    className='duration-300 w-full border px-3 rounded-md bg-secondary  bg-opacity-5 backdrop-blur py-2 text-white placeholder:text-white focus:text-white focus:outline-none'
                                                    placeholder='First Name'
                                                    required
                                                />
                                            </Fade>
                                        </div>
                                        <div className="relative w-full">
                                            {/* <label 
                                                className={formData.email ? "absolute md:-top-5 -top-4 transition-all duration-300 block tracking-wide text-white text-xs font-bold md:mb-2" : "hidden"}
                                                htmlFor="email"
                                            >
                                                Email
                                            </label> */}
                                            <Fade duration={2000} >
                                                
                                                <input 
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    onBlur={handleBlur}
                                                    type="email" 
                                                    className={formErrors.email ? 'w-full border px-3 rounded-md bg-red-500 bg-opacity-5 backdrop-blur py-2  focus:ring-red-500 focus:outline-none focus:border-red-500 text-red-300 placeholder:text-red-500' : 'w-full border px-3 rounded-md bg-secondary bg-opacity-5 backdrop-blur py-2 text-white placeholder:text-white focus:text-white focus:outline-none'}
                                                    placeholder='Email'
                                                    required
                                                />
                                            </Fade>
                                            {formErrors.email && (
                                                <div className="mt-1 text-xs text-red-500">{formErrors.email}</div>
                                            )}
                                        </div>
                                        <div className="relative w-full">
                                            {/* <label 
                                                className={formData.phone_number ? "absolute -top-5 transition-all duration-300 block tracking-wide text-white text-xs font-bold md:mb-2" : "hidden"}
                                                htmlFor="phone_number"
                                            >
                                                Phone Number
                                            </label> */}
                                            <Fade duration={2000} >
                                                <input 
                                                    name="phone_number"
                                                    type="number"
                                                    value={formData.phone_number}
                                                    onChange={handleInputChange}
                                                    onBlur={handleBlur}
                                                    className={ formErrors.phone_number ? 'w-full border px-3 rounded-md bg-red-500 bg-opacity-5 backdrop-blur py-2  focus:ring-red-500 focus:outline-none focus:border-red-500 text-red-300 placeholder:text-red-500' : 'w-full border px-3 rounded-md bg-secondary bg-opacity-5 backdrop-blur py-2 text-white placeholder:text-white focus:text-white focus:outline-none'}
                                                    placeholder='Enter your phone number'
                                                    required
                                                    maxLength='13'
                                                />
                                            </Fade>
                                            {formErrors.phone_number && (
                                                <div className="mt-1 text-xs text-red-500">{formErrors.phone_number}</div>
                                            )}
                                        </div>
                                        <div className='relative w-full'>
                                            {/* <label 
                                                className={formData.message ? "absolute -top-5 transition-all duration-300 block tracking-wide text-white text-xs font-bold md:mb-2" : "hidden"}
                                                htmlFor="phone_number"
                                            >
                                                Message
                                            </label> */}
                                            <Fade duration={2000} >
                                                <textarea 
                                                    className='resize-none w-full border px-3 rounded-md bg-secondary bg-opacity-5 backdrop-blur py-2 text-white placeholder:text-white focus:text-white focus:outline-none'
                                                    name="message" 
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    cols="5" 
                                                    rows="3"
                                                    placeholder='Message'
                                                    required
                                                ></textarea>
                                            </Fade>
                                        </div>
                                    </div>


                                    <div className='flex justify-center mx-auto md:mt-6 mt-4'>
                                        <Fade duration={3000} >
                                            <button 
                                                type='submit' 
                                                className={loading ? 'bg-gray-500 text-white py-2 px-8 rounded-sm' : 'bg-gradient-to-r from-lgrad to-grad py-2 px-8 rounded-sm'}
                                                disabled={loading}
                                            >   
                                                {loading ? 'Loading...' : 'Submit'}
                                            </button>
                                        </Fade>
                                    </div>
                                </form>

                                <div className='md:hidden flex justify-center items-center flex-col md:mt-12 mt-4'>
                                    <h2 className="text-secondary text-sm font-bold">Follow us</h2>
                                    <div className='flex items-center space-x-2 mt-2'>
                                        <ion-icon name="logo-instagram"></ion-icon>
                                        <ion-icon name="logo-twitter"></ion-icon>
                                        <ion-icon name="logo-facebook"></ion-icon>
                                        <ion-icon name="logo-linkedin"></ion-icon>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        {/* </div> */}
        <ContactModal onClose={handleModalClose} visible={modal} />
    </div>
  )
}

export default Contact