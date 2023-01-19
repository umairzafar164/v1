import React from 'react'
import getProfileData from "../data";

function Projects() {
  const profileData = getProfileData();
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {profileData.projects?.map((project, index) => (
            <div className="w-full md:w-full lg:w-1/3 p-5">
              <div className="relative">
                <div
                  className={`flex items-end justify-start bg-gradient-to-t from-gray-800 group hover:from-gray-900 via-transparent to-transparent text-white w-full h-full absolute transition-colors cursor-pointer`}
                >
                  <div className='p-3'>
                    <h1 className="font-bold text-sm">{project.name}</h1>
                    <p className="text-sm">{project.companyName}</p>
                    <div className='flex items-center justify-start flex-wrap'>
                    {project.tags.map((tag, tagIndex) => (
                      <span
                      className={`mr-2 text-xs text-gray-300 font-bold`}
                      >
                        {tagIndex !== 0 && project.tags.length > 0 && (
                          <span className="mr-2">{"/"}</span>
                          )}
                        {tag}
                      </span>
                    ))}
                    </div>
                    <div className='overflow-hidden 
                    group-hover:h-16 
                    sm:h-16 
                    md:h-16 
                    lg:h-0 
                    group-hover:overflow-y-scroll 
                    sm:overflow-y-scroll
                    md:overflow-y-scroll
                    transition-all 
                    duration-300 
                    text-sm'>{project.description}</div>
                  </div>
                </div>
                <img
                  className="h-52 w-full object-cover rounded"
                  src={project.imageUrl}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
