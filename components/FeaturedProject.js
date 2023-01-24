/* eslint-disable @next/next/no-img-element */

import { Github } from "@icons-pack/react-simple-icons";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { featured } from "../data/projects";
import ProjectList from "./ProjectList";

function FeaturedProject() {
  return (
    <div>
      {featured.map(
        ({ name, description, repo_link, live_link, project_img, tech }) => (
          <div
            key={name}
            className='relative max-w-[800px] shadow-lg mt-5 mb-8 m-auto group'
          >
            <div className='absolute opacity-[10%] w-full h-full right-0 bottom-0 md:h-auto md:w-[40vw] md:bottom-0 z-[-1] cursor-pointer md:hover:filter md:brightness-50 md:group-hover:opacity-80 md:group-hover:origin-bottom-right md:group-hover:scale-110 transition-all duration-500'>
              <img
                className='w-full h-full object-cover md:h-[90%] md:object-contain object-left-top'
                src={project_img}
                alt={`${name} Image`}
              />
              <div className='hidden md:block md:absolute md:inset-0 md:bg-neon md:mix-blend-multiply md:group-hover:bg-transparent' />
            </div>
            <div className='px-10 py-14 z-50'>
              <p className='text-accent'>Featured Project</p>
              <h3 className='text-3xl tracking-wider hover:text-neon'>
                <a href={live_link} target='_blank' rel='noreferrer'>
                  {name}
                </a>
              </h3>
              <p className='mt-7 mb-4 text-xl font-light md:p-5 md:bg-gray-700 md:shadow-md md:max-w-md md:rounded-sm'>
                {description}
              </p>
              <ul className='flex gap-4 flex-wrap'>
                {tech.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className='flex items-center space-x-3 mt-8'>
                <a href={repo_link} target='_blank' rel='noreferrer'>
                  <Github className='w-10 navLink' />
                </a>
                <a href={live_link} target='_blank' rel='noreferrer'>
                  <ExternalLinkIcon className='w-8 navLink' />
                </a>
              </div>
            </div>
          </div>
        )
      )}

      <h3 className='text-3xl text-center my-20'>Other Projects</h3>

      <ProjectList />
    </div>
  );
}

export default FeaturedProject;
