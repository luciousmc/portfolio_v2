import Link from 'next/dist/client/link';
import { Github } from '@icons-pack/react-simple-icons';
import { ExternalLinkIcon } from '@heroicons/react/outline';
import featured from '../details/featured-projects';
import ProjectList from './ProjectList';

function FeaturedProject() {
  return (
    <div>
      {featured.map(
        ({ name, description, repo_link, live_link, project_img, tech }) => (
          <div key={name} className='relative max-w-600px shadow-lg mt-5 mb-12'>
            <div className='absolute opacity-[4%] top-0 left-0 right-0 bottom-0 z-[-1]'>
              <img
                className='w-full h-full object-cover object-left-top'
                src={project_img}
                alt={`${name} Image`}
              />
            </div>
            <div className='px-10 py-20 z-50'>
              <h3 className='text-accent'>Featured Project</h3>
              <h4 className='text-3xl tracking-wider hover:text-neon'>
                <Link href={live_link}>{name}</Link>
              </h4>
              <p className='mt-7 mb-4 text-xl font-light'>{description}</p>
              <ul className='flex gap-4 flex-wrap'>
                {tech.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className='flex items-center space-x-3 mt-8'>
                <a href={repo_link} target='_blank'>
                  <Github className='w-10 navLink' />
                </a>
                <a href={live_link} target='_blank'>
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
