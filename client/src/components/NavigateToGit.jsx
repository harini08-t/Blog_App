import { Button } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';

export default function NavigateToGit() {
    return (
        <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
            <div className="flex-1 justify-center flex flex-col">
                <h2 className='text-2xl'>
                    Wanna know more ?
                </h2>
                <p className='text-gray-500 my-2'>
                    Follow me on github for more updates</p>
                <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'> 
                    <a href="https://github.com/harini08-t" target='_blank' rel='noopener noreferrer' className="inline-flex items-center gap-2">
                    <HiMail className='h-5 w-5'/>Gitbub link
                    </a>
                </Button>

            </div>

            <div className="p-7 flex-1">
                <img src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg" />
            </div>

        </div>
    )
}