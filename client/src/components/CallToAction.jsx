import { Button } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';

export default function CallToAction() {
    return (
        <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
            <div className="flex-1 justify-center flex flex-col">
                <h2 className='text-2xl'>
                    Let's Collaborate or Guest Post Together
                </h2>
                <p className='text-gray-500 my-2'>
                    Are you a developer, writer, or someone with a great idea?I’m open to guest posts, coding collabs, or just good tech talk.Let’s connect and create something awesome!</p>
                <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'> 
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=YOURMAILID@gmail.com" target='_blank' rel='noopener noreferrer' className="inline-flex items-center gap-2">
                    <HiMail className='h-5 w-5'/>Reach Out Now
                    </a>
                </Button>

            </div>

            <div className="p-7 flex-1">
                <img src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg" />
            </div>

        </div>
    )
}