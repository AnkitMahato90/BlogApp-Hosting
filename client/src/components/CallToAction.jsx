import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about my Other Projects?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout my portfolio project section
            </p>
            <Button gradientDuoTone='purpleToBlue' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://ankit-portfolio-psi.vercel.app/projects" target='_blank' rel='noopener noreferrer'>
                    my projects
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://ucarecdn.com/f0546b5c-841d-4b0a-8f34-2ece5b07d5c9/Screenshot20240818160953.png" />
        </div>
    </div>
  )
}