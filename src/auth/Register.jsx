import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

import axiosPrivate from "../api/axios";

import toast, { Toaster } from 'react-hot-toast'

import { Slide, Fade } from "react-awesome-reveal";

// import ErrorAlert from "../lib/ErrorAlert";

import Navbar from '../layouts/Navbar'

import RegistrationVector from '../assets/registration.svg'
import Star from '../assets/star.svg'
import StarPu from '../assets/starpu.svg'
import SuccessModal from "../modal/SuccessModal";

function Register() {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768); // Adjust the breakpoint as needed

    const [categories, setCategories] = useState([])

    const [errors, setErrors] = useState([]);
    const [formErrors, setFormErrors] = useState({
        email: '',
        phone_number: ''
    })

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\d{1,13}$/;

    const [loading, setLoading] = useState(false)

    const [successModal, setSuccessModal] = useState(false)
    const handleModalClose = () => setSuccessModal(false)

    // Set desktop 
    useEffect(() => {
        function handleResize() {
            setIsDesktop(window.innerWidth >= 768); // Adjust the breakpoint as needed
        }

        window.addEventListener("resize", handleResize);
        return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Fetching categories 
    useEffect(() => {
      const getCategories = async () => {
        try {
            const res = await axiosPrivate.get('/hackathon/categories-list')
            setCategories(res?.data)
        } catch (error) {
            console.log(error)
            toast.error(error)
        }

      }

      getCategories()
    }, [])

    const [formData, setFormData] = useState({
        email: '',
        phone_number: '',
        team_name: '',
        project_topic: '',
        category: '',
        group_size: '1',
        privacy_poclicy_accepted: false
    })

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
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleCheckboxChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.checked
        })
    }

    // console.log(formData)

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axiosPrivate.post('/hackathon/registration', formData)

            setLoading(true)
            
            if(response && response?.status === 201) {

                setSuccessModal(true)
                setLoading(false)

                setFormData({
                    email: '',
                    phone_number: '',
                    team_name: '',
                    project_topic: '',
                    category: '',
                    group_size: '1',
                    privacy_poclicy_accepted: false
                })

                toast.success('Form submitted')
                setErrors([]);
            } else {
                console.log('something is not right')
            }
        } catch (error) {
            toast.error('Something is not right!!!')
            if (error.response && error.response.data) {
                setErrors(error.response.data)
                // console.log(error)
            } else {
                console.error(error);
            }
        }

    }

  return (
    <div className='overflow-hidden'>
        {/* <div className="border h-screen"> */}

            <Toaster />

            {isDesktop ? (
                <Navbar /> 
            ) : (
                <nav className='py-5 md:px-16 px-8 flex justify-between'>
                    <Link to='/' className='md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-lgrad to-secondary'>
                        <div className='w-7 h-7 rounded-full flex items-center justify-center bg-main'>
                            <ion-icon name="chevron-back-outline"></ion-icon>
                        </div>
                    </Link>
                </nav>
            )}

            <div className='md:px-24 px-8 flex items-center relative'>
                <div className="absolute md:top-36 md:left-36 top-24 right-24 w-56 h-56 bg-primary rounded-full blur-3xl opacity-20 "></div>
                <div className="absolute md:-bottom-36 md:-right-4 md:w-96 w-48 md:h-96  h-48 bg-primary rounded-full blur-3xl opacity-20 "></div>
                <img src={Star} alt="star" className='absolute md:top-[20%] md:left-[20%] w-3 animate-pulse' />
                <img src={Star} alt="star" className='absolute md:bottom-[20%] md:right-[50%] top-[47%] right-[5%] w-4 animate-pulse' />
                <img src={StarPu} alt="star" className='absolute md:bottom-[20%] md:right-[10%] top-[10%] right-[10%] w-4 animate-pulse' />

                <div className='md:flex lg:py-4 md:py-6 sm:py-1 w-full h-full'>
                    
                    <div className='md:mt-0 hidden lg:flex justify-center sm:justify-center md:w-6/12'>
                        <Slide duration={2000} direction="top">
                            <img src={RegistrationVector} alt="Register" className="md:w-full w-7/12" />
                        </Slide>
                    </div>

                    <div className='lg:w-7/12 md:h-max h-max md:mt-6 mt-0'>
                        <div className=' md:w-full md:p-12 p-2 h-full md:rounded-md md:shadow-md md:shadow-black md:bg-white md:backdrop-blur md:bg-clip-padding md:backdrop-filter md:bg-opacity-5'>
                            <h2 className='font-clash-display text-secondary md:w-64 w-full md:text-3xl text-xl font-bold '>Register</h2>
                            <div className="flex items-center md:mt-5 mt-6">
                                <h2 className="text-sm">Be part of this movement</h2>
                                {/* <img src={movement} alt="movement" /> */}
                            </div>
                            <h2 className='md:text-2xl text-xl mt-0 font-semibold'>CREATE YOUR ACCOUNT</h2>

                            <div className='md:mt-2 mt-4'>
                                <form onSubmit={handleFormSubmit}>
                                    <div className="flex flex-wrap md:gap-6 gap-4">
                                        
                                        {/* <Fade duration={2000} > */}
                                            <div className="w-full md:w-72 ">
                                                <label className="block tracking-wide text-white text-xs font-bold md:mb-2" htmlFor="team_name">Team's name</label>
                                                <input 
                                                    name="team_name"
                                                    value={formData.team_name}
                                                    onChange={handleInputChange}
                                                    type="text" 
                                                    className='w-full border px-3 rounded-md bg-secondary bg-opacity-5 backdrop-blur py-2 text-white placeholder:text-gray-500 focus:text-white focus:outline-none'
                                                    placeholder='Enter the name of your group'
                                                    required
                                                />
                                            </div>
                                            <div className="w-full md:w-72">
                                                <label 
                                                    className={errors?.email || formErrors.email ? 'block tracking-wide text-red-500 text-xs font-bold md:mb-2' : 'block tracking-wide text-white text-xs font-bold md:mb-2'}
                                                    htmlFor="email"
                                                >
                                                    Email
                                                </label>
                                                <input 
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    onBlur={handleBlur}
                                                    type="email" 
                                                    className={errors?.email || formErrors.email ? 'w-full border px-3 rounded-md bg-red-500 bg-opacity-5 backdrop-blur py-2  focus:ring-red-500 focus:outline-none focus:border-red-500 text-red-300 placeholder:text-red-500' : 'w-full border px-3 rounded-md bg-secondary bg-opacity-5 backdrop-blur py-2 text-white placeholder:text-gray-500 focus:text-white focus:outline-none'}
                                                    placeholder='Enter your email address'
                                                    required
                                                />
                                                {errors.email && (
                                                    <div className="mt-1 text-xs text-red-500">
                                                        {errors?.email.map((error, index) => (
                                                            <span key={index}>{error}</span>
                                                        ))}
                                                    </div>
                                                )}
                                                {formErrors.email && (
                                                    <div className="mt-1 text-xs text-red-500">{formErrors.email}</div>
                                                )}
                                            </div>
                                            <div className="w-full md:w-72">
                                                <label 
                                                    className={errors?.phone_number || formErrors.phone_number ? 'w-full block tracking-wide text-red-500 text-xs font-bold md:mb-2' : 'block tracking-wide text-white text-xs font-bold md:mb-2'}
                                                    htmlFor="phone_number"
                                                >
                                                    Phone Number
                                                </label>
                                                <input 
                                                    name="phone_number"
                                                    type="number"
                                                    value={formData.phone_number}
                                                    onChange={handleInputChange}
                                                    onBlur={handleBlur}
                                                    className={errors?.phone_number || formErrors.phone_number ? 'w-full border px-3 rounded-md bg-red-500 bg-opacity-5 backdrop-blur py-2  focus:ring-red-500 focus:outline-none focus:border-red-500 text-red-300 placeholder:text-red-500' : 'w-full border px-3 rounded-md bg-secondary bg-opacity-5 backdrop-blur py-2 text-white placeholder:text-gray-500 focus:text-white focus:outline-none'}
                                                    placeholder='Enter your phone number'
                                                    required
                                                    maxLength='13'
                                                />
                                                {errors.phone_number && (
                                                    <div className="mt-1 text-xs text-red-500">
                                                        {errors?.phone_number.map((error, index) => (
                                                            <span key={index}>{error}</span>
                                                        ))}
                                                    </div>
                                                )}
                                                {formErrors.phone_number && (
                                                    <div className="mt-1 text-xs text-red-500">{formErrors.phone_number}</div>
                                                )}
                                            </div>
                                            <div className="w-full md:w-72 ">
                                                <label className="block tracking-wide text-white text-xs font-bold md:mb-2" htmlFor="project_topic">Project Topic</label>
                                                <input 
                                                    type="text" 
                                                    name="project_topic"
                                                    value={formData.project_topic}
                                                    onChange={handleInputChange}
                                                    className='w-full border px-3 rounded-md bg-secondary bg-opacity-5 backdrop-blur py-2 text-white placeholder:text-gray-500 focus:text-white focus:outline-none'
                                                    placeholder='What is your project topic?'
                                                    required
                                                />
                                            </div>
                                            <div className="w-7/12 md:w-7/12 lg:w-72 ">
                                                <label className="block tracking-wide text-white text-xs font-bold md:mb-2" htmlFor="category">Category</label>
                                                <select 
                                                    name="category"
                                                    value={formData.category}
                                                    onChange={handleInputChange}
                                                    className='w-full border px-3 rounded-md bg-secondary bg-opacity-5 backdrop-blur py-2 text-white focus:text-white focus:outline-none'
                                                >
                                                    <option
                                                        value=''
                                                        disabled
                                                        className="bg-main"
                                                    >
                                                        Select Category
                                                    </option>
                                                    {categories.map(cat => (
                                                        // <div key={cat.id}>
                                                        <option 
                                                            key={cat.id}
                                                            value={cat.id}
                                                            className="bg-main"
                                                        >
                                                            {cat.name}
                                                        </option>
                                                        // </div>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="w-4/12 md:w-72 ">
                                                <label className="block tracking-wide text-white text-xs font-bold md:mb-2" htmlFor="group_size">Group size</label>
                                                <select 
                                                    name="group_size"
                                                    value={formData.group_size}
                                                    onChange={handleInputChange}
                                                    className='w-full border px-3 rounded-md bg-secondary bg-opacity-5 backdrop-blur py-2 text-white focus:text-white focus:outline-none'
                                                >
                                                    <option 
                                                        value="1"
                                                        className="bg-main"
                                                    >
                                                        1
                                                    </option>
                                                    <option 
                                                        value="2"
                                                        className="bg-main"
                                                    >
                                                        2
                                                    </option>
                                                    <option 
                                                        value="3"
                                                        className="bg-main"
                                                    >
                                                        3
                                                    </option>
                                                    <option 
                                                        value="4"
                                                        className="bg-main"
                                                    >
                                                        4
                                                    </option>
                                                    <option 
                                                        value="5"
                                                        className="bg-main"
                                                    >
                                                        5
                                                    </option>
                                                    <option 
                                                        value="6"
                                                        className="bg-main"
                                                    >
                                                        6
                                                    </option>
                                                    <option 
                                                        value="7"
                                                        className="bg-main"
                                                    >
                                                        7
                                                    </option>
                                                    <option 
                                                        value="8"
                                                        className="bg-main"
                                                    >
                                                        8
                                                    </option>
                                                    <option 
                                                        value="9"
                                                        className="bg-main"
                                                    >
                                                        9
                                                    </option>
                                                    <option 
                                                        value="10"
                                                        className="bg-main"
                                                    >
                                                        10
                                                    </option>
                                                </select>
                                            </div>
                                        {/* </Fade> */}

                                    </div>
                                    
                                    <Fade duration={2000} >
                                        <h2 className="italic text-secondary md:text-sm text-[10px] mt-4">Please revieew your registration details before submitting</h2>
                                    </Fade>
                                        <Fade duration={2000} >
                                            <label className="text-sm">
                                                <input
                                                    name="privacy_poclicy_accepted"
                                                    type="checkbox"
                                                    checked={formData.privacy_poclicy_accepted}
                                                    onChange={handleCheckboxChange}
                                                    required
                                                />
                                                I agreed with the event terms and conditions and privacy policy
                                            </label>
                                        </Fade>

                                    <div className='flex justify-center mx-auto md:mt-6 mt-8'>
                                        <Fade duration={2000} >
                                            <button 
                                                type='submit' 
                                                className={loading ? 'bg-gray-500 text-white py-2 px-8 rounded-sm' : 'bg-gradient-to-r from-lgrad to-grad py-2 px-8 rounded-sm'}
                                                disabled={loading}
                                            >   
                                                {loading ? 'Loading...' : 'Register Now'}
                                                {/* Register Now */}
                                            </button>
                                        </Fade>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* modal  */}
            <SuccessModal onClose={handleModalClose} visible={successModal} />
        {/* </div> */}
    </div>
  )
}

export default Register