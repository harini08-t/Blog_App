import React from 'react'
export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Harini's Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Hi! I’m Harini — a developer, tech enthusiast, and lifelong learner.
               I created this blog to share my journey in the world of web development, 
               personal projects, and things that spark my curiosity.
            </p>

            <p>
              I enjoy building applications that solve real problems and writing about what I learn along the way.
               I’m especially passionate about front-end development and love experimenting with new tools, frameworks,
               and UI ideas.Another part of my journey that I’m excited to share my love for the Japanese language and culture. Learning Japanese has been both challenging and rewarding
               , and you’ll occasionally find posts about my progress, study tips, 
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}