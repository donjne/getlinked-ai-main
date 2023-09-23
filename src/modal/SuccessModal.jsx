import Congratulation from '../assets/congratulation.svg'

function SuccessModal({onClose, visible}) {

    const handleOnClose = (e) => {
        if(e.target.id === 'container') onClose()
    }

    if(!visible) return null

  return (
    <div 
        className="z-10 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
        onClick={handleOnClose}
        id='container'
    >
        <div className="md:p-7 p-4 border border-secondary bg md:rounded-md md:shadow-lg md:shadow-black md:bg-secondary md:backdrop-blur md:bg-clip-padding md:backdrop-filter md:bg-opacity-10 rounded-md md:mx-auto w-full mx-3 md:max-w-[550px]">

            <img src={Congratulation} alt="congatulation" className='' />

            <div className="flex flex-col justify-center items-center">
                <h2 className="md:text-3xl text-2xl font-clash-display font-bold">Congratulations</h2>
                <h2 className="md:text-3xl text-lg text-center font-clash-display font-bold">you have successfully Registered!</h2>
                <h3 className="text-sm">Yes, it was easy and you made it!</h3>
                <h3 className="text-sm">check your mail box for next step</h3>
            </div>

            <button
                className="bg-gradient-to-r from-lgrad to-grad py-2 px-8 rounded-sm mt-8 w-full"
                onClick={onClose}
            >
                Back
            </button>

        </div>   
    </div>
  )
}

export default SuccessModal