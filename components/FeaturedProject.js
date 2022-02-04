import Link from 'next/dist/client/link';
import { Github } from '@icons-pack/react-simple-icons';
import { ExternalLinkIcon } from '@heroicons/react/solid';
import projects from '../details/project_info';

function FeaturedProject() {
  return projects.map(
    ({
      name,
      description,
      repo_link,
      live_link,
      featured,
      project_img,
      tech,
    }) => (
      <div className='relative max-w-600px shadow-md mt-5 mb-12'>
        <div className='absolute opacity-[4%] top-0 left-0 right-0 bottom-0 z-[-1]'>
          <img
            className='w-full h-full object-left-top'
            src={project_img}
            alt={`${name} Image`}
          />
        </div>

        <div className='px-10 py-20 z-50'>
          <h2 className='text-accent'>Featured Project</h2>
          <h3 className='text-3xl tracking-wider hover:text-neon'>
            <Link href={live_link}>{name}</Link>
          </h3>
          <p className='mt-7 mb-4 text-xl font-light'>{description}</p>
          <ul className='flex gap-4'>
            {tech.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <div className='flex items-center space-x-3 mt-8'>
            <Link href={repo_link}>
              <Github className='w-10 navLink' />
            </Link>

            <Link href={live_link}>
              <ExternalLinkIcon className='w-8 navLink' />
            </Link>
          </div>
        </div>
      </div>
    )
  );
}

export default FeaturedProject;
